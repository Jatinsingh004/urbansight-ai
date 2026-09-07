import { state } from '../state.js';

export function renderMaintenanceScreen() {
  const incident = state.getIncident();
  const isAssigned = incident.status === 'IN_PROGRESS';
  const isResolved = incident.status === 'RESOLVED';

  return `
    <div class="max-w-4xl mx-auto space-y-6 pb-20">
      
      <!-- Top Navigation Bar -->
      <div class="flex items-center justify-between">
        <button onclick="window.navigateTo('home')" class="flex items-center gap-2 px-3 py-1.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-xl text-xs font-mono border border-outline-variant/30 transition-colors">
          <span class="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>Back to Command Center</span>
        </button>
        <span class="text-xs font-mono text-outline">MAINTENANCE DISPATCH ENGINE</span>
      </div>

      <!-- Main Maintenance Card -->
      <div class="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        <!-- Header & Priority Badge -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant/20 pb-5">
          <div class="space-y-1">
            <div class="flex items-center gap-2 font-mono text-xs">
              <span class="px-3 py-1 rounded-full font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                TASK #${incident.id}
              </span>
              <span class="text-slate-400">Location: ${incident.location}</span>
            </div>
            <h2 class="text-2xl font-extrabold text-on-surface tracking-tight">${incident.title}</h2>
          </div>

          <!-- Priority Gauge Box (92/100) -->
          <div class="bg-surface-container-high border border-amber-500/40 p-4 rounded-xl flex items-center gap-4 shadow-lg min-w-[200px]">
            <div class="w-14 h-14 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center font-extrabold font-mono text-amber-300 text-lg shadow-inner">
              ${incident.priorityScore}
            </div>
            <div>
              <div class="text-xs font-mono text-outline uppercase">Priority Score</div>
              <div class="text-sm font-bold text-amber-400 font-mono">92 / 100</div>
              <div class="text-[10px] text-slate-400 font-mono">URGENT DISPATCH</div>
            </div>
          </div>
        </div>

        <!-- Four Key Reasons Box -->
        <div class="bg-surface-container-high p-5 rounded-xl space-y-3 border border-outline-variant/30">
          <h3 class="font-bold text-sm text-on-surface font-mono uppercase tracking-wider flex items-center gap-2">
            <span class="material-symbols-outlined text-amber-400 text-[20px]">fact_check</span>
            <span>Priority Calculation Rationale</span>
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
            <div class="bg-surface-container-low p-3.5 rounded-lg border border-outline-variant/20 flex items-center gap-3">
              <div class="w-7 h-7 rounded bg-red-500/20 text-red-400 flex items-center justify-center">
                <span class="material-symbols-outlined text-[18px]">traffic</span>
              </div>
              <div>
                <div class="font-bold text-on-surface">High Traffic Road</div>
                <div class="text-[11px] text-slate-400">Arterial commuter corridor</div>
              </div>
            </div>

            <div class="bg-surface-container-low p-3.5 rounded-lg border border-outline-variant/20 flex items-center gap-3">
              <div class="w-7 h-7 rounded bg-red-500/20 text-red-400 flex items-center justify-center">
                <span class="material-symbols-outlined text-[18px]">warning</span>
              </div>
              <div>
                <div class="font-bold text-on-surface">Critical Defect</div>
                <div class="text-[11px] text-slate-400">Pothole depth > 8cm</div>
              </div>
            </div>

            <div class="bg-surface-container-low p-3.5 rounded-lg border border-outline-variant/20 flex items-center gap-3">
              <div class="w-7 h-7 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <span class="material-symbols-outlined text-[18px]">history</span>
              </div>
              <div>
                <div class="font-bold text-on-surface">Repeated Detections</div>
                <div class="text-[11px] text-slate-400">Confirmed across 4 bus passes</div>
              </div>
            </div>

            <div class="bg-surface-container-low p-3.5 rounded-lg border border-outline-variant/20 flex items-center gap-3">
              <div class="w-7 h-7 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <span class="material-symbols-outlined text-[18px]">shield</span>
              </div>
              <div>
                <div class="font-bold text-on-surface">Safety Risk</div>
                <div class="text-[11px] text-slate-400">Immediate hazard to vehicles</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Task Status & Dispatch Button -->
        <div class="bg-surface-container-high p-5 rounded-xl space-y-4 border border-outline-variant/30">
          <div class="flex items-center justify-between font-mono text-xs">
            <span class="text-slate-300">CURRENT DISPATCH STATUS:</span>
            <span class="px-3 py-1 rounded-full font-bold uppercase ${isAssigned ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : isResolved ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-red-500/20 text-red-300 border border-red-500/40'}">
              ${isAssigned ? 'IN PROGRESS' : isResolved ? 'RESOLVED' : 'PENDING ASSIGNMENT'}
            </span>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 pt-2">
            ${!isAssigned && !isResolved ? `
              <button onclick="window.assignTeam('${incident.id}')" class="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
                <span class="material-symbols-outlined text-[20px]">engineering</span>
                <span>Assign Rapid Maintenance Crew</span>
              </button>
            ` : `
              <div class="flex-1 py-3 bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold rounded-xl flex items-center justify-center gap-2 text-xs font-mono">
                <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                <span>CREW DISPATCHED • STATUS: IN PROGRESS</span>
              </div>
            `}

            <button onclick="window.navigateTo('map')" class="py-3 px-6 bg-surface-container-low hover:bg-surface-container text-on-surface font-semibold rounded-xl border border-outline-variant/30 text-xs flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-[18px]">map</span>
              <span>View Location on Map</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  `;
}
