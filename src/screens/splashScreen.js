export function renderSplashScreen() {
  return `
    <div class="flex flex-col items-center justify-center min-h-[85vh] px-4 text-center relative overflow-hidden">
      <!-- Ambient background glow elements -->
      <div class="absolute w-72 h-72 rounded-full bg-primary/10 blur-[80px] pointer-events-none -top-10"></div>
      <div class="absolute w-60 h-60 rounded-full bg-surface-variant/20 blur-[60px] pointer-events-none bottom-10"></div>
      
      <!-- Interactive touch container -->
      <div class="flex flex-col items-center justify-center w-full cursor-pointer group z-10 max-w-sm mx-auto" onclick="window.navigateTo('login')">
        <!-- Animated AI City Pulse Effect (Logo container) -->
        <div class="relative w-32 h-32 mb-8 flex items-center justify-center">
          <div class="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-75"></div>
          <div class="absolute inset-[-12px] rounded-full border border-primary/20 animate-pulse"></div>
          <div class="absolute inset-0 rounded-full border border-primary/40 border-t-transparent animate-spin" style="animation-duration: 4s;"></div>
          <div class="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center shadow-[0_0_28px_rgba(37,99,235,0.6)] group-hover:scale-105 transition-transform duration-300">
            <span class="material-symbols-outlined text-on-primary-container text-[36px]">radar</span>
          </div>
        </div>
        
        <!-- Typography -->
        <div class="flex flex-col items-center gap-2 mb-8">
          <h1 class="text-3xl font-extrabold text-on-surface tracking-tight">
            URBANSIGHT <span class="text-primary">AI</span>
          </h1>
          <p class="text-base text-on-surface-variant tracking-wide font-medium">
            AI-Powered Mobile Urban Intelligence Platform
          </p>
        </div>
        
        <!-- Touch prompt -->
        <div class="flex items-center gap-3 px-6 py-3 rounded-full bg-surface-container-high text-on-surface border border-primary/30 group-hover:border-primary group-hover:bg-surface-container-highest transition-all duration-300 shadow-xl">
          <span class="font-mono text-xs text-primary font-bold tracking-wider uppercase">Touch to Initialize System</span>
          <span class="material-symbols-outlined text-[18px] text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </div>
      </div>

      <!-- Subtle bottom status indicator -->
      <div class="absolute bottom-6 flex items-center gap-2 font-mono text-xs text-outline">
        <div class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
        <span>SYSTEM ONLINE • SECURE EDGE STREAM</span>
      </div>
    </div>
  `;
}
