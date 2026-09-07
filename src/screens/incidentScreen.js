import { state } from '../state.js';

export function renderIncidentScreen() {
  const incident = state.getIncident();

  return `
    <div class="max-w-5xl mx-auto space-y-6 pb-20">
      
      <!-- Back Navigation Header -->
      <div class="flex items-center justify-between">
        <button onclick="window.navigateTo('home')" class="flex items-center gap-2 px-3 py-1.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-xl text-xs font-mono border border-outline-variant/30 transition-colors">
          <span class="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>Back to Command Center</span>
        </button>
        <span class="text-xs font-mono text-outline">INCIDENT INSPECTOR NODE</span>
      </div>

      <!-- Main Incident Card Header -->
      <div class="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-6 shadow-2xl space-y-6">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant/20 pb-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-500/20 text-red-400 border border-red-500/30">
                ${incident.id} • ${incident.severity}
              </span>
              <span class="text-xs font-mono text-outline">${incident.time}</span>
            </div>
            <h2 class="text-2xl font-extrabold text-on-surface tracking-tight">${incident.title}</h2>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="window.navigateTo('map')" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow">
              <span class="material-symbols-outlined text-[18px]">map</span>
              <span>VIEW ON MAP</span>
            </button>
            <button onclick="window.navigateTo('maintenance', { incidentId: '${incident.id}' })" class="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 shadow">
              <span class="material-symbols-outlined text-[18px]">build</span>
              <span>CREATE MAINTENANCE TASK</span>
            </button>
          </div>
        </div>

        <!-- Evidence Visual Feed & AI Detection Overlay -->
        <div class="relative w-full h-80 rounded-xl overflow-hidden bg-surface-container shadow-xl border border-outline-variant/30 group">
          <img src="${incident.image}" class="w-full h-full object-cover" alt="Surveillance evidence" />
          
          <!-- AI Bounding Box Overlay -->
          <div class="absolute inset-16 border-2 border-primary bg-primary/10 rounded-lg flex flex-col justify-between p-3 pointer-events-none">
            <div class="flex justify-between items-start">
              <span class="bg-primary text-on-primary font-mono text-xs font-bold px-2 py-0.5 rounded shadow">
                ${incident.type} // ${incident.confidence}%
              </span>
              <span class="bg-surface/80 text-primary font-mono text-xs px-2 py-0.5 rounded backdrop-blur">
                NODE: ${incident.bus}
              </span>
            </div>
            <div class="self-start bg-surface/90 text-on-surface font-mono text-xs px-3 py-1 rounded backdrop-blur border border-outline-variant/30 flex items-center gap-2">
              <span class="material-symbols-outlined text-[16px] text-primary">location_on</span>
              <span>${incident.location} (${incident.gps.lat}, ${incident.gps.lng})</span>
            </div>
          </div>

          <div class="absolute top-3 left-3 bg-surface/80 backdrop-blur px-3 py-1 rounded-full text-[11px] font-mono text-white flex items-center gap-2 border border-white/10">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>MOBILE EDGE CAPTURE</span>
          </div>
        </div>

        <!-- Metric Details Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="bg-surface-container-high p-4 rounded-xl space-y-1">
            <span class="text-xs font-mono text-outline">TYPE</span>
            <div class="text-base font-bold text-on-surface font-mono">${incident.type}</div>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-1">
            <span class="text-xs font-mono text-outline">DETECTING BUS</span>
            <div class="text-base font-bold text-primary font-mono">${incident.bus}</div>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-1">
            <span class="text-xs font-mono text-outline">CONFIDENCE</span>
            <div class="text-base font-bold text-emerald-400 font-mono">${incident.confidence}%</div>
          </div>
          <div class="bg-surface-container-high p-4 rounded-xl space-y-1">
            <span class="text-xs font-mono text-outline">PRIORITY SCORE</span>
            <div class="text-base font-bold text-amber-400 font-mono">${incident.priorityScore} / 100</div>
          </div>
        </div>

        <!-- Priority Breakdown & Impact Reasons -->
        <div class="bg-surface-container-high p-5 rounded-xl space-y-3">
          <h4 class="font-bold text-sm text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-amber-400 text-[20px]">analytics</span>
            <span>Risk Assessment & Priority Score Factors</span>
          </h4>
          <ul class="space-y-2 text-xs text-on-surface-variant font-mono">
            ${incident.reasons.map(r => `
              <li class="flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/20">
                <span class="material-symbols-outlined text-[16px] text-amber-400">check_circle</span>
                <span>${r}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Action Footer -->
        <div class="flex flex-col sm:flex-row gap-3 pt-2">
          <button onclick="window.navigateTo('maintenance', { incidentId: '${incident.id}' })" class="flex-1 py-3 bg-primary hover:bg-primary/90 text-on-primary font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
            <span class="material-symbols-outlined text-[18px]">engineering</span>
            <span>PROCEED TO MAINTENANCE DISPATCH</span>
          </button>
          <button onclick="window.navigateTo('map')" class="py-3 px-6 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-semibold rounded-xl border border-outline-variant/30 text-xs flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-[18px]">explore</span>
            <span>LOCATE ON LIVE GIS MAP</span>
          </button>
        </div>

      </div>

    </div>
  `;
}
