import { state } from '../state.js';

export function renderAlertsScreen() {
  const incidents = state.incidents;

  return `
    <div class="max-w-7xl mx-auto space-y-6 pb-20">
      
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl p-5 shadow-xl">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shadow">
            <span class="material-symbols-outlined text-[22px]">warning</span>
          </div>
          <div>
            <h2 class="text-xl font-bold text-on-surface">Urban Defect Alerts Feed</h2>
            <p class="text-xs text-on-surface-variant font-mono">Automated AI Detection Stream from Public Transit Nodes</p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="window.navigateTo('home')" class="px-3.5 py-1.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-xs font-mono rounded-xl border border-outline-variant/30">
            Back to Command
          </button>
        </div>
      </div>

      <!-- Alerts Feed List -->
      <div class="space-y-4">
        ${incidents.map(evt => {
          let badgeColor = 'bg-red-500/20 text-red-400 border-red-500/30';
          if (evt.status === 'RESOLVED') badgeColor = 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
          else if (evt.severity === 'MODERATE') badgeColor = 'bg-amber-500/20 text-amber-400 border-amber-500/30';
          else if (evt.severity === 'LOW') badgeColor = 'bg-blue-500/20 text-blue-400 border-blue-500/30';

          return `
            <div class="bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 rounded-2xl p-5 transition-all shadow-lg space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/20 pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="px-3 py-1 rounded-full text-xs font-mono font-bold border ${badgeColor}">
                    ${evt.id} • ${evt.severity}
                  </span>
                  <span class="text-xs font-mono text-outline">${evt.time}</span>
                </div>
                <div class="flex items-center gap-2 text-xs font-mono">
                  <span class="text-slate-400">STATUS:</span>
                  <span class="font-bold text-primary">${evt.status.replace('_', ' ')}</span>
                </div>
              </div>

              <div class="grid md:grid-cols-4 gap-4 items-center">
                <div class="md:col-span-3 space-y-1.5">
                  <h3 class="text-lg font-bold text-on-surface">${evt.title}</h3>
                  <p class="text-xs text-on-surface-variant">
                    Detected on <strong class="text-white">${evt.location}</strong> by <span class="font-mono text-primary font-bold">${evt.bus}</span> with <strong class="text-white">${evt.confidence}% AI Confidence</strong>.
                  </p>
                  <div class="text-[11px] font-mono text-outline">
                    GPS: ${evt.gps.lat}, ${evt.gps.lng} | Priority Score: ${evt.priorityScore}/100
                  </div>
                </div>

                <div class="flex flex-col gap-2">
                  <button onclick="window.navigateTo('incident', { incidentId: '${evt.id}' })" class="w-full py-2 bg-primary hover:bg-primary/90 text-on-primary font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow">
                    <span>Inspect Details</span>
                    <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                  <button onclick="window.navigateTo('maintenance', { incidentId: '${evt.id}' })" class="w-full py-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-semibold rounded-xl text-xs border border-outline-variant/30 flex items-center justify-center gap-1.5">
                    <span class="material-symbols-outlined text-[16px] text-amber-400">build</span>
                    <span>Maintenance Task</span>
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
}
