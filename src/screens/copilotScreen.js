import { state } from '../state.js';

export function renderCopilotScreen() {
  const messages = state.copilotMessages;

  return `
    <div class="max-w-4xl mx-auto space-y-4 pb-20">
      
      <!-- Copilot Header -->
      <div class="flex items-center justify-between bg-surface-container-low border border-outline-variant/30 rounded-2xl p-4 shadow-xl">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shadow">
            <span class="material-symbols-outlined text-[22px]">smart_toy</span>
          </div>
          <div>
            <h2 class="text-xl font-bold text-on-surface flex items-center gap-2">
              UrbanSight AI Copilot
              <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-primary/20 text-primary font-bold">LLM-v4.2</span>
            </h2>
            <p class="text-xs text-on-surface-variant font-mono">Mobile Urban Operations Conversational Intelligence</p>
          </div>
        </div>

        <button onclick="window.navigateTo('home')" class="px-3 py-1.5 bg-surface-container-high text-on-surface text-xs font-mono rounded-xl border border-outline-variant/30">
          Back
        </button>
      </div>

      <!-- Suggested Quick Prompt Pills (Required by user prompt) -->
      <div class="space-y-2">
        <span class="text-xs font-mono text-outline uppercase tracking-wider">Suggested Intelligence Queries:</span>
        <div class="flex flex-wrap gap-2">
          <button onclick="window.sendCopilotQuery('Which roads need urgent maintenance?')" class="px-3 py-1.5 bg-surface-container-low hover:bg-surface-container-high text-primary border border-primary/30 rounded-full text-xs font-mono transition-all">
            "Which roads need urgent maintenance?"
          </button>
          <button onclick="window.sendCopilotQuery('Where is congestion increasing?')" class="px-3 py-1.5 bg-surface-container-low hover:bg-surface-container-high text-purple-300 border border-purple-500/30 rounded-full text-xs font-mono transition-all">
            "Where is congestion increasing?"
          </button>
          <button onclick="window.sendCopilotQuery('Show today\'s critical incidents.')" class="px-3 py-1.5 bg-surface-container-low hover:bg-surface-container-high text-red-300 border border-red-500/30 rounded-full text-xs font-mono transition-all">
            "Show today's critical incidents."
          </button>
          <button onclick="window.sendCopilotQuery('Which bus routes are delayed?')" class="px-3 py-1.5 bg-surface-container-low hover:bg-surface-container-high text-amber-300 border border-amber-500/30 rounded-full text-xs font-mono transition-all">
            "Which bus routes are delayed?"
          </button>
        </div>
      </div>

      <!-- Chat History Window -->
      <div id="copilot-chat-window" class="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-5 min-h-[400px] max-h-[550px] overflow-y-auto space-y-4 shadow-2xl">
        ${messages.map(msg => {
          const isUser = msg.sender === 'user';
          return `
            <div class="flex gap-3 ${isUser ? 'flex-row-reverse' : ''}">
              <div class="w-8 h-8 rounded-full ${isUser ? 'bg-primary text-on-primary' : 'bg-primary-container text-on-primary-container'} flex items-center justify-center shrink-0 text-xs font-mono font-bold shadow">
                <span class="material-symbols-outlined text-[18px]">${isUser ? 'person' : 'smart_toy'}</span>
              </div>
              
              <div class="max-w-[80%] ${isUser ? 'bg-primary text-on-primary rounded-2xl rounded-tr-none' : 'bg-surface-container-high text-on-surface border border-outline-variant/30 rounded-2xl rounded-tl-none'} p-4 shadow space-y-1">
                <div class="text-xs ${isUser ? 'text-on-primary/80' : 'text-slate-300'} whitespace-pre-line leading-relaxed font-sans">
                  ${msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                </div>
                <div class="text-[10px] font-mono ${isUser ? 'text-on-primary/60 text-right' : 'text-outline'}">
                  ${msg.time}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Chat Input Field -->
      <form onsubmit="event.preventDefault(); window.handleCopilotFormSubmit();" class="flex gap-2 bg-surface-container-low p-2 rounded-2xl border border-outline-variant/30 shadow-xl">
        <input id="copilot-input-field" type="text" placeholder="Ask UrbanSight AI Copilot anything about city infrastructure..." class="flex-1 bg-surface-container-high border border-outline-variant/30 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary font-sans" required />
        <button type="submit" class="px-5 py-3 bg-primary hover:bg-primary/90 text-on-primary font-bold rounded-xl shadow transition-all flex items-center gap-1 text-sm font-mono">
          <span>SEND</span>
          <span class="material-symbols-outlined text-[18px]">send</span>
        </button>
      </form>

    </div>
  `;
}
