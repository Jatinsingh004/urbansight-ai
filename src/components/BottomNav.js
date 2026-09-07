import { state } from '../state.js';

export function renderBottomNav() {
  const currentScreen = state.activeScreen;
  if (currentScreen === 'splash' || currentScreen === 'login') {
    return '';
  }

  const items = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'map', label: 'Map', icon: 'map' },
    { id: 'alerts', label: 'Alerts', icon: 'warning' },
    { id: 'fleet', label: 'Fleet', icon: 'directions_bus' },
    { id: 'profile', label: 'Profile', icon: 'person' }
  ];

  return `
    <nav class="fixed bottom-0 inset-x-0 z-50 lg:hidden pb-safe bg-surface/95 backdrop-blur-xl border-t border-outline-variant/20 shadow-2xl">
      <div class="flex justify-around items-center h-16 px-2">
        ${items.map(item => {
          const isActive = currentScreen === item.id;
          return `
            <button onclick="window.navigateTo('${item.id}')" class="flex flex-col items-center justify-center gap-1 w-16 h-14 rounded-xl transition-all ${isActive ? 'text-primary font-bold bg-primary/10' : 'text-on-surface-variant hover:text-on-surface'}">
              <span class="material-symbols-outlined text-[22px] ${isActive ? 'scale-110' : ''}">${item.icon}</span>
              <span class="text-[11px] font-mono leading-none">${item.label}</span>
            </button>
          `;
        }).join('')}
      </div>
    </nav>
  `;
}
