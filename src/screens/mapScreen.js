import { initLeafletMap } from '../components/MapComponent.js';

export function renderMapScreen() {
  setTimeout(() => {
    initLeafletMap('live-gis-map-container');
  }, 100);

  return `
    <div class="max-w-7xl mx-auto space-y-4 pb-20">
      
      <!-- Top Control Bar -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl p-4 shadow-xl">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center shadow">
            <span class="material-symbols-outlined text-on-primary-container text-[22px]">map</span>
          </div>
          <div>
            <h2 class="text-xl font-bold text-on-surface">Live GIS City Map</h2>
            <p class="text-xs text-on-surface-variant font-mono">Real-time Spatial Intelligence & Defect Marker Network</p>
          </div>
        </div>

        <!-- Legend Filters -->
        <div class="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span class="px-2.5 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-red-500"></span> Critical
          </span>
          <span class="px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-orange-500"></span> Road Defect
          </span>
          <span class="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-amber-500"></span> Congestion
          </span>
          <span class="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span> Bus Fleet
          </span>
          <span class="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Resolved
          </span>
        </div>
      </div>

      <!-- Map Viewport -->
      <div class="relative w-full h-[65vh] min-h-[450px] rounded-2xl overflow-hidden border border-outline-variant/40 shadow-2xl bg-surface-container">
        <div id="live-gis-map-container" class="w-full h-full"></div>

        <!-- Floating Quick Action Overlay -->
        <div class="absolute bottom-4 left-4 z-[400] bg-surface/90 backdrop-blur-md p-3 rounded-xl border border-outline-variant/30 text-xs font-mono space-y-1 hidden sm:block">
          <div class="text-primary font-bold">CLICK MARKER TO INSPECT</div>
          <div class="text-slate-300">GPS Focus: 21.2514° N, 81.6296° E</div>
        </div>
      </div>

    </div>
  `;
}
