import { state } from '../state.js';

export function renderHomeScreen() {
  const criticalIncident = state.getIncident('EVT-1042');
  const activeIncidents = state.incidents.filter(i => i.status !== 'RESOLVED');

  return `
    <div class="max-w-7xl mx-auto space-y-6 pb-20">
      
      <!-- Top Banner Welcome & Mode -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl p-5 sm:p-6 shadow-xl">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> SYSTEM ACTIVE
            </span>
            <span class="text-xs font-mono text-outline">Sector 4 • Mobile Intelligence</span>
          </div>
          <h2 class="text-2xl font-extrabold text-on-surface tracking-tight">Urban Intelligence Command Center</h2>
          <p class="text-xs text-on-surface-variant">Real-time mobile Edge AI processing across public transit bus camera feeds.</p>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="window.navigateTo('map')" class="px-4 py-2 bg-primary text-on-primary font-bold text-xs rounded-xl shadow-lg hover:opacity-90 transition-all flex items-center gap-2">
            <span class="material-symbols-outlined text-[18px]">map</span>
            <span>OPEN GIS LIVE MAP</span>
          </button>
        </div>
      </div>

      <!-- Critical Alert Feature Card (EVT-1042) -->
      <div class="bg-gradient-to-r from-red-950/40 via-surface-container-low to-surface-container-low border border-red-500/40 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden group">
        <div class="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex items-center justify-between gap-2 mb-3">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-error text-on-error flex items-center gap-1.5 shadow-sm">
              <span class="w-2 h-2 rounded-full bg-white animate-ping"></span> CRITICAL INCIDENT ALERT
            </span>
            <span class="text-xs font-mono text-outline">${criticalIncident.id} • ${criticalIncident.time}</span>
          </div>
          <span class="px-2.5 py-0.5 rounded font-mono text-xs bg-red-500/20 text-red-300 font-bold border border-red-500/30">
            CONFIDENCE: ${criticalIncident.confidence}%
          </span>
        </div>

        <div class="grid md:grid-cols-3 gap-6 items-center">
          <div class="md:col-span-2 space-y-2">
            <h3 class="text-xl font-extrabold text-white tracking-tight">${criticalIncident.title}</h3>
            <p class="text-sm text-slate-300">
              Detected by <strong class="text-primary font-mono">${criticalIncident.bus}</strong> on <strong class="text-white">${criticalIncident.location}</strong>. Immediate hazard to public transit & heavy vehicle suspension.
            </p>

            <div class="flex flex-wrap items-center gap-3 pt-2">
              <div class="flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-surface-container-high px-3 py-1.5 rounded-lg border border-outline-variant/30">
                <span class="material-symbols-outlined text-[16px] text-primary">location_on</span>
                <span>GPS: ${criticalIncident.gps.lat}, ${criticalIncident.gps.lng}</span>
              </div>
              <div class="flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-surface-container-high px-3 py-1.5 rounded-lg border border-outline-variant/30">
                <span class="material-symbols-outlined text-[16px] text-amber-400">equalizer</span>
                <span>Priority Score: ${criticalIncident.priorityScore}/100</span>
              </div>
              <div class="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border ${criticalIncident.status === 'IN_PROGRESS' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-red-500/20 text-red-300 border-red-500/30'}">
                <span class="material-symbols-outlined text-[16px]">${criticalIncident.status === 'IN_PROGRESS' ? 'engineering' : 'error'}</span>
                <span>Status: ${criticalIncident.status.replace('_', ' ')}</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2.5 justify-center">
            <button onclick="window.navigateTo('incident', { incidentId: '${criticalIncident.id}' })" class="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
              <span>Inspect Incident Details</span>
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button onclick="window.navigateTo('maintenance', { incidentId: '${criticalIncident.id}' })" class="w-full py-2.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-semibold rounded-xl border border-outline-variant/40 transition-colors flex items-center justify-center gap-2 text-xs">
              <span class="material-symbols-outlined text-[18px] text-amber-400">build</span>
              <span>Create Maintenance Task</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Real-time Stats Counter Bar -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 space-y-1">
          <div class="flex items-center justify-between text-on-surface-variant">
            <span class="text-xs font-mono font-medium">ACTIVE BUSES</span>
            <span class="material-symbols-outlined text-primary text-[20px]">directions_bus</span>
          </div>
          <div class="text-2xl font-extrabold text-on-surface">6 / 8</div>
          <div class="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Edge AI Stream Online
          </div>
        </div>

        <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 space-y-1">
          <div class="flex items-center justify-between text-on-surface-variant">
            <span class="text-xs font-mono font-medium">ACTIVE ALERTS</span>
            <span class="material-symbols-outlined text-amber-400 text-[20px]">warning</span>
          </div>
          <div class="text-2xl font-extrabold text-on-surface">${activeIncidents.length}</div>
          <div class="text-[11px] text-amber-400 font-mono">1 Critical Pothole Pending</div>
        </div>

        <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 space-y-1">
          <div class="flex items-center justify-between text-on-surface-variant">
            <span class="text-xs font-mono font-medium">AVG TRANSIT SPEED</span>
            <span class="material-symbols-outlined text-blue-400 text-[20px]">speed</span>
          </div>
          <div class="text-2xl font-extrabold text-on-surface">24.5 km/h</div>
          <div class="text-[11px] text-slate-400 font-mono">Congestion Index: 68%</div>
        </div>

        <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 space-y-1">
          <div class="flex items-center justify-between text-on-surface-variant">
            <span class="text-xs font-mono font-medium">EDGE LATENCY</span>
            <span class="material-symbols-outlined text-emerald-400 text-[20px]">bolt</span>
          </div>
          <div class="text-2xl font-extrabold text-on-surface">14 ms</div>
          <div class="text-[11px] text-emerald-400 font-mono">30.2 FPS • On-Bus NPU</div>
        </div>
      </div>

      <!-- Quick Navigation Command Grid (All requested screens) -->
      <div>
        <h3 class="text-lg font-bold text-on-surface mb-3 flex items-center gap-2">
          <span class="material-symbols-outlined text-primary text-[20px]">grid_view</span>
          <span>Urban Intelligence Modules</span>
        </h3>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          <!-- Live Map -->
          <div onclick="window.navigateTo('map')" class="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/30 rounded-xl p-4 cursor-pointer transition-all hover:scale-[1.02] group">
            <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-[24px]">map</span>
            </div>
            <h4 class="font-bold text-sm text-on-surface mb-1">Live GIS Map</h4>
            <p class="text-xs text-on-surface-variant">Interactive city map with color-coded incident markers.</p>
          </div>

          <!-- Edge AI Monitor -->
          <div onclick="window.navigateTo('edge-ai')" class="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/30 rounded-xl p-4 cursor-pointer transition-all hover:scale-[1.02] group">
            <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-[24px]">videocam</span>
            </div>
            <h4 class="font-bold text-sm text-on-surface mb-1">Edge AI Monitor</h4>
            <p class="text-xs text-on-surface-variant">Simulated 4-camera bus feed with real-time bounding boxes.</p>
          </div>

          <!-- Road Intelligence -->
          <div onclick="window.navigateTo('road-intel')" class="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/30 rounded-xl p-4 cursor-pointer transition-all hover:scale-[1.02] group">
            <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3 group-hover:bg-amber-500 group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-[24px]">add_road</span>
            </div>
            <h4 class="font-bold text-sm text-on-surface mb-1">Road Intelligence</h4>
            <p class="text-xs text-on-surface-variant">Pothole counts, waterlogging, and road condition heatmaps.</p>
          </div>

          <!-- Fleet Management -->
          <div onclick="window.navigateTo('fleet')" class="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/30 rounded-xl p-4 cursor-pointer transition-all hover:scale-[1.02] group">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-[24px]">directions_bus</span>
            </div>
            <h4 class="font-bold text-sm text-on-surface mb-1">Fleet Monitor</h4>
            <p class="text-xs text-on-surface-variant">Bus statuses, GPS tracking, camera operational health.</p>
          </div>

          <!-- Traffic Analytics -->
          <div onclick="window.navigateTo('traffic')" class="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/30 rounded-xl p-4 cursor-pointer transition-all hover:scale-[1.02] group">
            <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-[24px]">analytics</span>
            </div>
            <h4 class="font-bold text-sm text-on-surface mb-1">Traffic Analytics</h4>
            <p class="text-xs text-on-surface-variant">Density trends, route bottleneck charts, vehicle counts.</p>
          </div>

          <!-- Maintenance Tasks -->
          <div onclick="window.navigateTo('maintenance')" class="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/30 rounded-xl p-4 cursor-pointer transition-all hover:scale-[1.02] group">
            <div class="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-3 group-hover:bg-rose-500 group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-[24px]">build</span>
            </div>
            <h4 class="font-bold text-sm text-on-surface mb-1">Maintenance Dispatch</h4>
            <p class="text-xs text-on-surface-variant">Priority scoring (92/100) & team dispatch assignment.</p>
          </div>

          <!-- AI Copilot -->
          <div onclick="window.navigateTo('copilot')" class="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/30 rounded-xl p-4 cursor-pointer transition-all hover:scale-[1.02] group col-span-2 md:col-span-1">
            <div class="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-on-primary transition-colors">
              <span class="material-symbols-outlined text-[24px]">smart_toy</span>
            </div>
            <h4 class="font-bold text-sm text-on-surface mb-1">UrbanSight Copilot</h4>
            <p class="text-xs text-on-surface-variant">Conversational AI query interface for city operations.</p>
          </div>

          <!-- System Settings -->
          <div onclick="window.navigateTo('profile')" class="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/30 rounded-xl p-4 cursor-pointer transition-all hover:scale-[1.02] group col-span-2 md:col-span-1">
            <div class="w-10 h-10 rounded-xl bg-slate-500/10 text-slate-300 flex items-center justify-center mb-3 group-hover:bg-slate-700 group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-[24px]">person</span>
            </div>
            <h4 class="font-bold text-sm text-on-surface mb-1">Profile & Settings</h4>
            <p class="text-xs text-on-surface-variant">Officer profile, system config, local state reset.</p>
          </div>

        </div>
      </div>

    </div>
  `;
}
