import { state } from './state.js';
import { renderNavbar } from './components/Navbar.js';
import { renderBottomNav } from './components/BottomNav.js';

import { renderSplashScreen } from './screens/splashScreen.js';
import { renderLoginScreen } from './screens/loginScreen.js';
import { renderHomeScreen } from './screens/homeScreen.js';
import { renderMapScreen } from './screens/mapScreen.js';
import { renderAlertsScreen } from './screens/alertsScreen.js';
import { renderIncidentScreen } from './screens/incidentScreen.js';
import { renderEdgeAiScreen } from './screens/edgeAiScreen.js';
import { renderRoadIntelScreen } from './screens/roadIntelScreen.js';
import { renderFleetScreen } from './screens/fleetScreen.js';
import { renderTrafficScreen } from './screens/trafficScreen.js';
import { renderMaintenanceScreen } from './screens/maintenanceScreen.js';
import { renderCopilotScreen } from './screens/copilotScreen.js';
import { renderProfileScreen } from './screens/profileScreen.js';

// Define Window Globals for easy inline onclick bindings
window.navigateTo = function(screenName, params = {}) {
  state.setScreen(screenName, params);
};

window.assignTeam = function(incidentId) {
  state.assignMaintenanceTeam(incidentId);
  window.navigateTo('maintenance', { incidentId });
};

window.sendCopilotQuery = function(query) {
  state.addCopilotMessage(query);
};

window.handleCopilotFormSubmit = function() {
  const input = document.getElementById('copilot-input-field');
  if (input && input.value.trim()) {
    state.addCopilotMessage(input.value.trim());
    input.value = '';
  }
};

window.resetData = function() {
  if (confirm('Reset all local storage state and restart demo session?')) {
    state.resetAllData();
    window.navigateTo('splash');
  }
};

function renderApp() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  const currentScreen = state.activeScreen;

  let screenContent = '';
  switch (currentScreen) {
    case 'splash':
      screenContent = renderSplashScreen();
      break;
    case 'login':
      screenContent = renderLoginScreen();
      break;
    case 'home':
      screenContent = renderHomeScreen();
      break;
    case 'map':
      screenContent = renderMapScreen();
      break;
    case 'alerts':
      screenContent = renderAlertsScreen();
      break;
    case 'incident':
      screenContent = renderIncidentScreen();
      break;
    case 'edge-ai':
      screenContent = renderEdgeAiScreen();
      break;
    case 'road-intel':
      screenContent = renderRoadIntelScreen();
      break;
    case 'fleet':
      screenContent = renderFleetScreen();
      break;
    case 'traffic':
      screenContent = renderTrafficScreen();
      break;
    case 'maintenance':
      screenContent = renderMaintenanceScreen();
      break;
    case 'copilot':
      screenContent = renderCopilotScreen();
      break;
    case 'profile':
      screenContent = renderProfileScreen();
      break;
    default:
      screenContent = renderHomeScreen();
  }

  appContainer.innerHTML = `
    ${renderNavbar()}
    <main class="w-full px-4 sm:px-6 ${currentScreen === 'splash' || currentScreen === 'login' ? 'pt-4' : 'pt-20'} flex-grow">
      ${screenContent}
    </main>
    ${renderBottomNav()}
  `;

  // Auto scroll chat window if on copilot screen
  if (currentScreen === 'copilot') {
    setTimeout(() => {
      const chatWin = document.getElementById('copilot-chat-window');
      if (chatWin) chatWin.scrollTop = chatWin.scrollHeight;
    }, 100);
  }
}

// Initial Render & State Listener
state.subscribe(renderApp);
document.addEventListener('DOMContentLoaded', renderApp);
