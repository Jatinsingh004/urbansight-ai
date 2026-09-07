import { roadIntelligenceStats } from '../mockData.js';
import { state } from '../state.js';

export function renderRoadIntelScreen() {
  const potholes = state.incidents.filter(i => i.type === 'POTHOLE');
  const defects = state.incidents.filter(i => i.type === 'ROAD_DEFECT');

  return `
    <div class="max-w-7xl mx-auto space-y-6 pb-20">
      
      <!-- Top Banner Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl p-5 shadow-xl">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shadow">
            <span class="material-symbols-outlined text-[22px]">add_road</span>
          </div>
          <div>
            <h2 class="text-xl font-bold text-on-surface">Road Surface Intelligence Node</h2>
            <p class="text-xs text-on-surface-variant font-mono">Automated Infrastructure Wear & Defect Aggregation</p>
          </div>
        </div>

        <button onclick="window.navigateTo('map')" class="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 shadow">
          <span class="material-symbols-outlined text-[18px]">view_comfy</span>
          <span>VIEW DEFECT HEATMAP</span>
        </button>
      </div>

      <!-- Stats Metric Cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
        <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 space-y-1">
          <span class="text-xs text-outline">POTHOLES DETECTED</span>
          <div class="text-2xl font-extrabold text-red-400">${roadIntelligenceStats.potholesCount}</div>
          <div class="text-[11px] text-slate-400">18 Critical Depth</div>
        </div>

        <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 space-y-1">
          <span class="text-xs text-outline">WATERLOGGING SITES</span>
          <div class="text-2xl font-extrabold text-blue-400">${roadIntelligenceStats.waterloggingCount}</div>
          <div class="text-[11px] text-slate-400">Monsoon Season Watch</div>
        </div>

        <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 space-y-1">
          <span class="text-xs text-outline">DAMAGED SIGNS</span>
          <div class="text-2xl font-extrabold text-amber-400">${roadIntelligenceStats.damagedSignsCount}</div>
          <div class="text-[11px] text-slate-400">31 Yield & Stop Signs</div>
        </div>

        <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 space-y-1">
          <span class="text-xs text-outline">REPAIRED THIS MONTH</span>
          <div class="text-2xl font-extrabold text-emerald-400">${roadIntelligenceStats.repairedThisMonth}</div>
          <div class="text-[11px] text-emerald-400">Avg Repair: ${roadIntelligenceStats.averageRepairTimeDays} days</div>
        </div>
      </div>

      <!-- Defect Classification Queue -->
      <div class="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-5 space-y-4">
        <h3 class="font-bold text-sm text-on-surface font-mono uppercase tracking-wider flex items-center gap-2">
          <span class="material-symbols-outlined text-primary text-[20px]">format_list_bulleted</span>
          <span>Pothole & Surface Wear Priority Queue</span>
        </h3>

        <div class="space-y-3">
          ${[...potholes, ...defects].map(item => `
            <div class="bg-surface-container-high p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-outline-variant/20">
              <div class="space-y-1">
                <div class="flex items-center gap-2 font-mono text-xs">
                  <span class="font-bold text-red-400">${item.id}</span>
                  <span class="text-slate-400">• ${item.location}</span>
                  <span class="px-2 py-0.5 rounded bg-surface-container text-amber-400 text-[10px] font-bold">
                    PRIORITY ${item.priorityScore}
                  </span>
                </div>
                <h4 class="font-bold text-sm text-on-surface">${item.title}</h4>
              </div>

              <div class="flex items-center gap-2">
                <button onclick="window.navigateTo('incident', { incidentId: '${item.id}' })" class="px-3 py-1.5 bg-primary/20 hover:bg-primary text-primary hover:text-on-primary font-bold rounded-lg text-xs transition-colors">
                  Inspect
                </button>
                <button onclick="window.navigateTo('maintenance', { incidentId: '${item.id}' })" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors">
                  Assign Team
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}
