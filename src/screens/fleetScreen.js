import { fleetBuses } from '../mockData.js';

export function renderFleetScreen() {
  const activeCount = fleetBuses.filter(b => b.status === 'ACTIVE').length;
  const offlineCount = fleetBuses.length - activeCount;

  return `
    <div class="max-w-7xl mx-auto space-y-6 pb-20">
      
      <!-- Top Banner Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl p-5 shadow-xl">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shadow">
            <span class="material-symbols-outlined text-[22px]">directions_bus</span>
          </div>
          <div>
            <h2 class="text-xl font-bold text-on-surface">Transit Fleet Edge Network</h2>
            <p class="text-xs text-on-surface-variant font-mono">Mobile Camera Nodes & Local AI Hardware Monitor</p>
          </div>
        </div>

        <div class="flex items-center gap-2 font-mono text-xs">
          <span class="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
            ${activeCount} ACTIVE BUSES
          </span>
          <span class="px-3 py-1.5 rounded-xl bg-slate-700/50 text-slate-400 border border-slate-600/30">
            ${offlineCount} STANDBY / OFFLINE
          </span>
        </div>
      </div>

      <!-- Bus Fleet Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        ${fleetBuses.map(bus => {
          const isActive = bus.status === 'ACTIVE';

          return `
            <div class="bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 rounded-2xl p-4 transition-all shadow-lg space-y-3">
              <div class="flex items-center justify-between border-b border-outline-variant/20 pb-2.5">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-lg ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-400'} flex items-center justify-center font-mono font-bold text-xs">
                    ${bus.id.replace('BUS-', '')}
                  </div>
                  <div>
                    <h4 class="font-bold text-sm text-on-surface font-mono">${bus.id}</h4>
                    <p class="text-[10px] font-mono text-outline">${bus.driver}</p>
                  </div>
                </div>

                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${isActive ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-700 text-slate-400'}">
                  ${bus.status}
                </span>
              </div>

              <div class="space-y-1.5 text-xs font-mono">
                <div class="text-slate-300 font-bold truncate">${bus.route}</div>
                <div class="text-slate-400 text-[11px]">GPS: ${bus.gps}</div>
                <div class="flex justify-between text-[11px] text-slate-400">
                  <span>Speed: ${bus.speed}</span>
                  <span>AI FPS: ${bus.fps}</span>
                </div>
              </div>

              <div class="flex items-center justify-between text-[11px] font-mono pt-2 border-t border-outline-variant/20">
                <span class="flex items-center gap-1 ${isActive ? 'text-emerald-400' : 'text-slate-500'}">
                  <span class="w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}"></span>
                  ${bus.camera}
                </span>
                
                ${isActive ? `
                  <button onclick="window.navigateTo('edge-ai')" class="px-2.5 py-1 bg-primary text-on-primary font-bold rounded text-[11px] hover:opacity-90 transition-opacity">
                    Inspect AI Feed
                  </button>
                ` : `
                  <span class="text-slate-500">Standby Mode</span>
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
}
