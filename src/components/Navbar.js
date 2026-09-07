import { state } from '../state.js';

export function renderNavbar() {
  const currentScreen = state.activeScreen;
  const isSplash = currentScreen === 'splash';
  const isLogin = currentScreen === 'login';

  if (isSplash || isLogin) {
    return ''; // Hide main navbar on splash and login
  }

  const activeIncidentsCount = state.incidents.filter(i => i.status === 'NEW').length;

  return `
    <header class="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl border-b border-outline-variant/20 pt-safe">
      <div class="max-w-7xl mx-auto h-16 px-4 md:px-6 flex items-center justify-between">
        
        <!-- Left: Brand Logo & Title -->
        <div class="flex items-center gap-3 cursor-pointer" onclick="window.navigateTo('home')">
          <div class="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            <span class="material-symbols-outlined text-on-primary-container text-[20px] animate-pulse">radar</span>
          </div>
          <div class="flex flex-col">
            <span class="text-headline-sm font-bold tracking-tight text-on-surface flex items-center gap-1.5">
              URBANSIGHT <span class="text-primary font-extrabold">AI</span>
              <span class="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-mono bg-primary/20 text-primary border border-primary/30">EDGE v4.2</span>
            </span>
            <span class="text-[11px] font-mono text-outline hidden md:block">MOBILE URBAN INTELLIGENCE PLATFORM</span>
          </div>
        </div>

        <!-- Desktop Navigation Bar Links -->
        <nav class="hidden lg:flex items-center gap-1 bg-surface-container-low p-1.5 rounded-full border border-outline-variant/30 text-xs font-medium">
          <button onclick="window.navigateTo('home')" class="px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${currentScreen === 'home' ? 'bg-primary text-on-primary font-bold shadow' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}">
            <span class="material-symbols-outlined text-[16px]">dashboard</span> Command
          </button>
          <button onclick="window.navigateTo('map')" class="px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${currentScreen === 'map' ? 'bg-primary text-on-primary font-bold shadow' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}">
            <span class="material-symbols-outlined text-[16px]">map</span> Live Map
          </button>
          <button onclick="window.navigateTo('alerts')" class="px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${currentScreen === 'alerts' ? 'bg-primary text-on-primary font-bold shadow' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}">
            <span class="material-symbols-outlined text-[16px]">warning</span> Alerts (${activeIncidentsCount})
          </button>
          <button onclick="window.navigateTo('edge-ai')" class="px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${currentScreen === 'edge-ai' ? 'bg-primary text-on-primary font-bold shadow' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}">
            <span class="material-symbols-outlined text-[16px]">videocam</span> Edge AI
          </button>
          <button onclick="window.navigateTo('road-intel')" class="px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${currentScreen === 'road-intel' ? 'bg-primary text-on-primary font-bold shadow' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}">
            <span class="material-symbols-outlined text-[16px]">add_road</span> Road Intel
          </button>
          <button onclick="window.navigateTo('fleet')" class="px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${currentScreen === 'fleet' ? 'bg-primary text-on-primary font-bold shadow' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}">
            <span class="material-symbols-outlined text-[16px]">directions_bus</span> Fleet
          </button>
          <button onclick="window.navigateTo('traffic')" class="px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${currentScreen === 'traffic' ? 'bg-primary text-on-primary font-bold shadow' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}">
            <span class="material-symbols-outlined text-[16px]">analytics</span> Traffic
          </button>
          <button onclick="window.navigateTo('maintenance')" class="px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${currentScreen === 'maintenance' ? 'bg-primary text-on-primary font-bold shadow' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}">
            <span class="material-symbols-outlined text-[16px]">build</span> Maintenance
          </button>
          <button onclick="window.navigateTo('copilot')" class="px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${currentScreen === 'copilot' ? 'bg-primary text-on-primary font-bold shadow' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}">
            <span class="material-symbols-outlined text-[16px]">smart_toy</span> Copilot
          </button>
        </nav>

        <!-- Right Controls & User Profile -->
        <div class="flex items-center gap-2.5">
          <button onclick="window.navigateTo('alerts')" class="relative w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-on-surface transition-colors" title="Alert Notifications">
            <span class="material-symbols-outlined text-[20px]">notifications</span>
            ${activeIncidentsCount > 0 ? `<span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-error text-on-error font-mono text-[10px] font-bold flex items-center justify-center animate-bounce">${activeIncidentsCount}</span>` : ''}
          </button>

          <button onclick="window.navigateTo('profile')" class="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary hover:opacity-90 transition-opacity shadow-md" title="Profile & Settings">
            <span class="material-symbols-outlined text-[20px]">person</span>
          </button>
        </div>

      </div>
    </header>
  `;
}
