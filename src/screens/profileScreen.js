import { state } from '../state.js';

export function renderProfileScreen() {
  const profile = state.userProfile;

  return `
    <div class="max-w-4xl mx-auto space-y-6 pb-20">
      
      <!-- Profile Header -->
      <div class="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-6 shadow-2xl space-y-6">
        <div class="flex flex-col sm:flex-row items-center gap-5 border-b border-outline-variant/20 pb-6">
          <div class="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-xl">
            <span class="material-symbols-outlined text-[44px]">person</span>
          </div>
          <div class="text-center sm:text-left space-y-1">
            <h2 class="text-2xl font-extrabold text-on-surface tracking-tight">${profile.name}</h2>
            <p class="text-sm text-primary font-mono font-bold">${profile.role}</p>
            <p class="text-xs text-outline font-mono">${profile.city} • BADGE: ${profile.badgeId}</p>
          </div>
        </div>

        <!-- System Preferences Grid -->
        <div class="space-y-4">
          <h3 class="font-bold text-sm text-on-surface font-mono uppercase tracking-wider flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[20px]">settings</span>
            <span>Edge Telemetry & System Configurations</span>
          </h3>

          <div class="space-y-3 font-mono text-xs">
            <div class="bg-surface-container-high p-4 rounded-xl flex items-center justify-between border border-outline-variant/20">
              <div>
                <div class="font-bold text-on-surface">Real-Time Mobile Edge Telemetry</div>
                <div class="text-slate-400 text-[11px]">Stream AI detections every ${profile.edgeTelemetryIntervalSec} seconds</div>
              </div>
              <input type="checkbox" checked class="rounded border-outline-variant text-primary focus:ring-0 w-5 h-5" />
            </div>

            <div class="bg-surface-container-high p-4 rounded-xl flex items-center justify-between border border-outline-variant/20">
              <div>
                <div class="font-bold text-on-surface">Auto-Dispatch Maintenance Crew</div>
                <div class="text-slate-400 text-[11px]">Automatically assign crew when priority score > 90</div>
              </div>
              <input type="checkbox" class="rounded border-outline-variant text-primary focus:ring-0 w-5 h-5" />
            </div>

            <div class="bg-surface-container-high p-4 rounded-xl flex items-center justify-between border border-outline-variant/20">
              <div>
                <div class="font-bold text-on-surface">Dark Smart City Visual Theme</div>
                <div class="text-slate-400 text-[11px]">Exact Google Stitch theme tokens enabled</div>
              </div>
              <span class="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold">ACTIVE</span>
            </div>
          </div>
        </div>

        <!-- Reset State Button -->
        <div class="pt-4 border-t border-outline-variant/20 flex justify-between items-center">
          <button onclick="window.resetData()" class="px-4 py-2 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white font-mono text-xs font-bold rounded-xl border border-red-500/30 transition-all flex items-center gap-2">
            <span class="material-symbols-outlined text-[16px]">restart_alt</span>
            <span>RESET SESSION DATA & LOCALSTORAGE</span>
          </button>
          <span class="text-[11px] font-mono text-outline">UrbanSight AI Node v4.2</span>
        </div>

      </div>

    </div>
  `;
}
