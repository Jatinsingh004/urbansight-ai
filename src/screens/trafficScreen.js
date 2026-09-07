import { trafficMetrics } from '../mockData.js';

export function renderTrafficScreen() {
  setTimeout(() => {
    initChartJS();
  }, 100);

  return `
    <div class="max-w-7xl mx-auto space-y-6 pb-20">
      
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl p-5 shadow-xl">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shadow">
            <span class="material-symbols-outlined text-[22px]">analytics</span>
          </div>
          <div>
            <h2 class="text-xl font-bold text-on-surface">Traffic Density & Delay Analytics</h2>
            <p class="text-xs text-on-surface-variant font-mono">Real-time Vehicle Count Trends & Bottleneck Diagnostics</p>
          </div>
        </div>

        <span class="px-3 py-1.5 rounded-xl bg-purple-500/20 text-purple-300 font-mono text-xs font-bold border border-purple-500/30">
          CONGESTION INDEX: ${trafficMetrics.congestionIndex}
        </span>
      </div>

      <!-- Key Metrics -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
        <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 space-y-1">
          <span class="text-xs text-outline">AVG VEHICLE SPEED</span>
          <div class="text-2xl font-extrabold text-blue-400">${trafficMetrics.averageSpeed}</div>
          <div class="text-[11px] text-slate-400">-4.2 km/h during peak</div>
        </div>

        <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 space-y-1">
          <span class="text-xs text-outline">MONITORED VEHICLES</span>
          <div class="text-2xl font-extrabold text-emerald-400">${trafficMetrics.activeVehicles}</div>
          <div class="text-[11px] text-slate-400">Recorded across 8 routes</div>
        </div>

        <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 space-y-1">
          <span class="text-xs text-outline">PEAK BOTTLENECK DELAY</span>
          <div class="text-2xl font-extrabold text-amber-400">${trafficMetrics.peakDelay}</div>
          <div class="text-[11px] text-amber-400">Ring Road Flyover Corridor</div>
        </div>

        <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 space-y-1">
          <span class="text-xs text-outline">AI SIGNAL SYNC</span>
          <div class="text-2xl font-extrabold text-purple-400">OPTIMIZED</div>
          <div class="text-[11px] text-emerald-400">Adaptive Signal Timing</div>
        </div>
      </div>

      <!-- Chart Container -->
      <div class="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-5 space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-sm text-on-surface font-mono uppercase tracking-wider flex items-center gap-2">
            <span class="material-symbols-outlined text-purple-400 text-[20px]">show_chart</span>
            <span>24-Hour Traffic Volume & Average Speed Trend</span>
          </h3>
          <span class="text-xs font-mono text-outline">LIVE MODEL SIMULATION</span>
        </div>

        <div class="w-full h-72">
          <canvas id="trafficChartCanvas"></canvas>
        </div>
      </div>

      <!-- Hotspot Bottlenecks -->
      <div class="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-5 space-y-4">
        <h3 class="font-bold text-sm text-on-surface font-mono uppercase tracking-wider flex items-center gap-2">
          <span class="material-symbols-outlined text-amber-400 text-[20px]">report_problem</span>
          <span>Active Route Bottlenecks & Delay Diagnostics</span>
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
          ${trafficMetrics.hotspots.map(h => `
            <div class="bg-surface-container-high p-4 rounded-xl flex items-center justify-between border border-outline-variant/20">
              <div>
                <h4 class="font-bold text-sm text-on-surface">${h.location}</h4>
                <p class="text-slate-400 text-[11px]">Estimated Corridor Delay: ${h.delay}</p>
              </div>
              <span class="px-2.5 py-1 rounded font-bold uppercase ${h.level === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}">
                ${h.level}
              </span>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

function initChartJS() {
  if (typeof Chart === 'undefined') return;

  const canvas = document.getElementById('trafficChartCanvas');
  if (!canvas) return;

  if (canvas._chart_instance) {
    canvas._chart_instance.destroy();
  }

  const ctx = canvas.getContext('2d');
  const labels = trafficMetrics.hourlyData.map(d => d.time);
  const counts = trafficMetrics.hourlyData.map(d => d.count);
  const speeds = trafficMetrics.hourlyData.map(d => d.speed);

  canvas._chart_instance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Vehicle Count',
          data: counts,
          borderColor: '#a855f7',
          backgroundColor: 'rgba(168, 85, 247, 0.1)',
          fill: true,
          tension: 0.4,
          yAxisID: 'y'
        },
        {
          label: 'Avg Speed (km/h)',
          data: speeds,
          borderColor: '#38bdf8',
          backgroundColor: 'rgba(56, 189, 248, 0.1)',
          fill: false,
          tension: 0.4,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#94a3b8', font: { family: 'JetBrains Mono' } }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#c084fc', font: { family: 'JetBrains Mono' } }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: { drawOnChartArea: false },
          ticks: { color: '#38bdf8', font: { family: 'JetBrains Mono' } }
        }
      },
      plugins: {
        legend: {
          labels: { color: '#e2e8f0', font: { family: 'JetBrains Mono', size: 11 } }
        }
      }
    }
  });
}
