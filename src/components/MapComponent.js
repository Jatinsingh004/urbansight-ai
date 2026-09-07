import { state } from '../state.js';
import { fleetBuses } from '../mockData.js';

export function initLeafletMap(containerId, center = [21.2514, 81.6296], zoom = 14) {
  if (typeof L === 'undefined') {
    console.error('Leaflet is not loaded');
    return null;
  }

  const container = document.getElementById(containerId);
  if (!container) return null;

  // Clear existing map instance if any stored on DOM element
  if (container._leaflet_map) {
    container._leaflet_map.remove();
  }

  const map = L.map(containerId, {
    zoomControl: false,
    attributionControl: false
  }).setView(center, zoom);

  container._leaflet_map = map;

  // Add CartoDB Dark Matter map tile layer
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    subdomains: 'abcd'
  }).addTo(map);

  // Custom Zoom Control
  L.control.zoom({ position: 'topright' }).addTo(map);

  // Add Incident Markers
  state.incidents.forEach(evt => {
    let colorHex = '#ef4444'; // Red = Critical
    let iconSymbol = 'warning';

    if (evt.status === 'RESOLVED') {
      colorHex = '#22c55e'; // Green = Resolved
      iconSymbol = 'check_circle';
    } else if (evt.type === 'POTHOLE' || evt.type === 'ROAD_DEFECT') {
      colorHex = '#f97316'; // Orange = Road Defect
      iconSymbol = 'build';
    } else if (evt.type === 'CONGESTION') {
      colorHex = '#eab308'; // Yellow = Congestion
      iconSymbol = 'traffic';
    }

    if (evt.severity === 'HIGH' && evt.status !== 'RESOLVED') {
      colorHex = '#ef4444'; // Red = High / Critical
      iconSymbol = 'report';
    }

    const customHtml = `
      <div class="relative flex items-center justify-center group cursor-pointer">
        <div class="absolute w-8 h-8 rounded-full opacity-30 animate-ping" style="background-color: ${colorHex}"></div>
        <div class="w-7 h-7 rounded-full flex items-center justify-center text-white shadow-lg border border-white/20 font-bold" style="background-color: ${colorHex}">
          <span class="material-symbols-outlined text-[16px]">${iconSymbol}</span>
        </div>
      </div>
    `;

    const customIcon = L.divIcon({
      html: customHtml,
      className: 'custom-map-marker',
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });

    const popupContent = `
      <div class="p-2 min-w-[200px] text-slate-100 font-sans">
        <div class="flex items-center justify-between gap-2 mb-1">
          <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider text-white" style="background-color: ${colorHex}">
            ${evt.id}
          </span>
          <span class="text-[11px] text-slate-400 font-mono">${evt.time}</span>
        </div>
        <h4 class="font-bold text-sm text-white mb-1">${evt.title}</h4>
        <p class="text-xs text-slate-300 mb-2">${evt.location} • Conf: ${evt.confidence}%</p>
        <div class="flex gap-2">
          <button onclick="window.navigateTo('incident', { incidentId: '${evt.id}' })" class="flex-1 px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold">
            Details
          </button>
          <button onclick="window.navigateTo('maintenance', { incidentId: '${evt.id}' })" class="flex-1 px-2.5 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded text-xs font-semibold">
            Task
          </button>
        </div>
      </div>
    `;

    L.marker([evt.gps.lat, evt.gps.lng], { icon: customIcon })
      .addTo(map)
      .bindPopup(popupContent, { className: 'dark-leaflet-popup' });
  });

  // Add Active Buses (Blue Markers)
  fleetBuses.filter(b => b.status === 'ACTIVE').forEach(bus => {
    const coords = bus.gps.split(',').map(s => parseFloat(s.trim()));
    if (coords.length === 2 && !isNaN(coords[0])) {
      const busHtml = `
        <div class="relative flex items-center justify-center cursor-pointer">
          <div class="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border border-blue-400/40">
            <span class="material-symbols-outlined text-[15px]">directions_bus</span>
          </div>
        </div>
      `;
      const busIcon = L.divIcon({
        html: busHtml,
        className: 'bus-marker',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      const busPopup = `
        <div class="p-2 text-slate-100 font-sans">
          <span class="px-2 py-0.5 bg-blue-600 rounded text-[10px] font-mono font-bold text-white">${bus.id}</span>
          <h4 class="font-bold text-sm text-white mt-1">${bus.route}</h4>
          <p class="text-xs text-slate-300 mb-2">Driver: ${bus.driver} | Speed: ${bus.speed}</p>
          <button onclick="window.navigateTo('edge-ai')" class="w-full px-2.5 py-1 bg-blue-600 text-white rounded text-xs font-semibold">
            Live AI Camera Feed
          </button>
        </div>
      `;

      L.marker([coords[0], coords[1]], { icon: busIcon })
        .addTo(map)
        .bindPopup(busPopup, { className: 'dark-leaflet-popup' });
    }
  });

  return map;
}
