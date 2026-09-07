import { initEdgeAICameraCanvas } from '../components/EdgeAICamera.js';

export function renderEdgeAiScreen() {
  setTimeout(() => {
    initEdgeAICameraCanvas('cam-front-canvas', 'front');
    initEdgeAICameraCanvas('cam-rear-canvas', 'rear');
    initEdgeAICameraCanvas('cam-left-canvas', 'left');
    initEdgeAICameraCanvas('cam-right-canvas', 'right');
  }, 100);

  return `
    <div class="max-w-7xl mx-auto space-y-6 pb-20">
      
      <!-- Top Banner Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl p-5 shadow-xl">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shadow">
            <span class="material-symbols-outlined text-[22px]">videocam</span>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-xl font-bold text-on-surface">Edge AI Bus Monitor</h2>
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                BUS-204 // ACTIVE NODE
              </span>
            </div>
            <p class="text-xs text-on-surface-variant font-mono">Quad-Camera Real-time Edge Vision Telemetry Stream</p>
          </div>
        </div>

        <!-- On-Bus Edge Badge -->
        <div class="px-4 py-2 bg-indigo-950/60 border border-indigo-500/40 rounded-xl flex items-center gap-2 shadow">
          <span class="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-ping"></span>
          <span class="text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider">AI processing locally on the bus</span>
        </div>
      </div>

      <!-- Live 4-Camera Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <!-- Front Camera -->
        <div class="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-4 space-y-2">
          <div class="flex items-center justify-between font-mono text-xs">
            <span class="text-primary font-bold flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">videocam</span> FRONT CAMERA (ROAD SENSOR)
            </span>
            <span class="text-emerald-400">94% Confidence</span>
          </div>
          <div class="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-outline-variant/20">
            <canvas id="cam-front-canvas" class="w-full h-full object-cover"></canvas>
          </div>
        </div>

        <!-- Rear Camera -->
        <div class="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-4 space-y-2">
          <div class="flex items-center justify-between font-mono text-xs">
            <span class="text-primary font-bold flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">videocam</span> REAR CAMERA (TRAFFIC SENSOR)
            </span>
            <span class="text-emerald-400">91% Confidence</span>
          </div>
          <div class="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-outline-variant/20">
            <canvas id="cam-rear-canvas" class="w-full h-full object-cover"></canvas>
          </div>
        </div>

        <!-- Left Camera -->
        <div class="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-4 space-y-2">
          <div class="flex items-center justify-between font-mono text-xs">
            <span class="text-primary font-bold flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">videocam</span> LEFT FLANK CAMERA
            </span>
            <span class="text-emerald-400">89% Confidence</span>
          </div>
          <div class="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-outline-variant/20">
            <canvas id="cam-left-canvas" class="w-full h-full object-cover"></canvas>
          </div>
        </div>

        <!-- Right Camera -->
        <div class="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-4 space-y-2">
          <div class="flex items-center justify-between font-mono text-xs">
            <span class="text-primary font-bold flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">videocam</span> RIGHT FLANK CAMERA
            </span>
            <span class="text-emerald-400">92% Confidence</span>
          </div>
          <div class="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-outline-variant/20">
            <canvas id="cam-right-canvas" class="w-full h-full object-cover"></canvas>
          </div>
        </div>

      </div>

      <!-- Edge Hardware Telemetry Stats -->
      <div class="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-5 space-y-4">
        <h3 class="font-bold text-sm text-on-surface font-mono uppercase tracking-wider flex items-center gap-2">
          <span class="material-symbols-outlined text-primary text-[20px]">memory</span>
          <span>Bus Edge NPU Hardware Metrics (NVIDIA Jetson Orin Platform)</span>
        </h3>

        <div class="grid grid-cols-2 sm:grid-cols-5 gap-4 font-mono">
          <div class="bg-surface-container-high p-3.5 rounded-xl space-y-1">
            <span class="text-[11px] text-outline">FRAME RATE</span>
            <div class="text-xl font-bold text-emerald-400">30.2 FPS</div>
          </div>
          <div class="bg-surface-container-high p-3.5 rounded-xl space-y-1">
            <span class="text-[11px] text-outline">LATENCY</span>
            <div class="text-xl font-bold text-blue-400">14.1 ms</div>
          </div>
          <div class="bg-surface-container-high p-3.5 rounded-xl space-y-1">
            <span class="text-[11px] text-outline">NPU CPU LOAD</span>
            <div class="text-xl font-bold text-amber-400">42%</div>
          </div>
          <div class="bg-surface-container-high p-3.5 rounded-xl space-y-1">
            <span class="text-[11px] text-outline">NPU GPU LOAD</span>
            <div class="text-xl font-bold text-indigo-400">68%</div>
          </div>
          <div class="bg-surface-container-high p-3.5 rounded-xl space-y-1 col-span-2 sm:col-span-1">
            <span class="text-[11px] text-outline">NETWORK BANDWIDTH</span>
            <div class="text-xl font-bold text-slate-200">1.2 MB/s</div>
          </div>
        </div>
      </div>

    </div>
  `;
}
