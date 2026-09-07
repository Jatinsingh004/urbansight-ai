import { state } from '../state.js';

export function renderLoginScreen() {
  return `
    <div class="max-w-md mx-auto min-h-[80vh] flex flex-col justify-center px-4 py-8">
      <div class="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div class="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

        <!-- Header -->
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center shadow-lg">
            <span class="material-symbols-outlined text-on-primary-container text-[22px]">security</span>
          </div>
          <div>
            <h2 class="text-xl font-bold text-on-surface">Urban Commander Login</h2>
            <p class="text-xs text-on-surface-variant font-mono">Secure Access to Urban Intelligence Node</p>
          </div>
        </div>

        <!-- Form -->
        <form onsubmit="event.preventDefault(); window.navigateTo('home');" class="space-y-4">
          <div>
            <label class="block text-xs font-mono font-medium text-on-surface-variant mb-1.5">OFFICER ID / EMAIL</label>
            <div class="relative">
              <input type="text" value="${state.userProfile.email}" class="w-full bg-surface-container-high border border-outline-variant/50 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary font-mono" placeholder="command@urbansight.ai" required />
              <span class="material-symbols-outlined absolute right-3 top-2.5 text-outline text-[20px]">badge</span>
            </div>
          </div>

          <div>
            <label class="block text-xs font-mono font-medium text-on-surface-variant mb-1.5">SECURITY PASSPHRASE</label>
            <div class="relative">
              <input type="password" value="••••••••••••" class="w-full bg-surface-container-high border border-outline-variant/50 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary font-mono" required />
              <span class="material-symbols-outlined absolute right-3 top-2.5 text-outline text-[20px]">key</span>
            </div>
          </div>

          <div class="flex items-center justify-between text-xs pt-1">
            <label class="flex items-center gap-2 cursor-pointer text-on-surface-variant">
              <input type="checkbox" checked class="rounded border-outline-variant text-primary focus:ring-0 bg-surface-container-high" />
              <span>Remember Device</span>
            </label>
            <a href="#" class="text-primary hover:underline font-mono">Biometric Auth?</a>
          </div>

          <button type="submit" class="w-full py-3 bg-primary hover:bg-primary/90 text-on-primary font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm mt-4">
            <span>ENTER COMMAND CENTER</span>
            <span class="material-symbols-outlined text-[18px]">login</span>
          </button>
        </form>

        <div class="my-6 flex items-center gap-3">
          <div class="flex-1 h-px bg-outline-variant/30"></div>
          <span class="text-[10px] font-mono text-outline uppercase tracking-wider">OR QUICK DEMO</span>
          <div class="flex-1 h-px bg-outline-variant/30"></div>
        </div>

        <button onclick="window.navigateTo('home')" class="w-full py-2.5 bg-surface-container-high hover:bg-surface-container-highest border border-primary/30 text-primary font-mono text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
          <span class="material-symbols-outlined text-[18px]">bolt</span>
          <span>ONE-CLICK DEMO BYPASS</span>
        </button>

        <p class="text-[11px] text-center text-outline mt-6 font-mono">
          UrbanSight AI Node Sector 4 • Encrypted Stream
        </p>
      </div>
    </div>
  `;
}
