import { initialIncidents, copilotQA } from './mockData.js';

class AppState {
  constructor() {
    this.listeners = [];
    this.init();
  }

  init() {
    // Load persisted state or fallback
    const savedIncidents = localStorage.getItem('urbansight_incidents');
    this.incidents = savedIncidents ? JSON.parse(savedIncidents) : initialIncidents;

    const savedScreen = localStorage.getItem('urbansight_screen');
    this.activeScreen = savedScreen || 'splash';

    this.selectedIncidentId = localStorage.getItem('urbansight_selected_incident') || 'EVT-1042';

    const savedMessages = localStorage.getItem('urbansight_copilot_messages');
    this.copilotMessages = savedMessages ? JSON.parse(savedMessages) : [
      {
        sender: 'ai',
        text: 'Hello Commander. UrbanSight AI Edge Intelligence Copilot is online. How can I assist urban operations today?',
        time: '10:40 AM'
      }
    ];

    this.userProfile = {
      name: 'Commander Alex Vance',
      role: 'Chief Urban Intelligence Officer',
      city: 'Smart City Command Sector 4',
      badgeId: 'UC-9042',
      email: 'alex.vance@urbansight.ai',
      notificationsEnabled: true,
      autoDispatch: false,
      edgeTelemetryIntervalSec: 2
    };
  }

  saveIncidents() {
    localStorage.setItem('urbansight_incidents', JSON.stringify(this.incidents));
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
  }

  setScreen(screenName, params = {}) {
    this.activeScreen = screenName;
    localStorage.setItem('urbansight_screen', screenName);
    if (params.incidentId) {
      this.selectedIncidentId = params.incidentId;
      localStorage.setItem('urbansight_selected_incident', params.incidentId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.notify();
  }

  getIncident(id) {
    return this.incidents.find(i => i.id === (id || this.selectedIncidentId)) || this.incidents[0];
  }

  updateIncidentStatus(id, newStatus) {
    const idx = this.incidents.findIndex(i => i.id === id);
    if (idx !== -1) {
      this.incidents[idx].status = newStatus;
      this.saveIncidents();
      this.notify();
    }
  }

  assignMaintenanceTeam(id) {
    this.updateIncidentStatus(id, 'IN_PROGRESS');
  }

  resolveIncident(id) {
    this.updateIncidentStatus(id, 'RESOLVED');
  }

  addCopilotMessage(userText) {
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this.copilotMessages.push({
      sender: 'user',
      text: userText,
      time: timeNow
    });

    // Find AI response
    const lower = userText.toLowerCase();
    const match = copilotQA.find(qa => qa.keywords.some(k => lower.includes(k)));
    const responseText = match ? match.answer : `Analyzing query against local city model...\nCurrently monitored: 8 active bus cameras, 142 road defects, and 5 traffic hotspots. For specific maintenance routing, query "Which roads need urgent maintenance?"`;

    setTimeout(() => {
      this.copilotMessages.push({
        sender: 'ai',
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      localStorage.setItem('urbansight_copilot_messages', JSON.stringify(this.copilotMessages));
      this.notify();
    }, 600);

    localStorage.setItem('urbansight_copilot_messages', JSON.stringify(this.copilotMessages));
    this.notify();
  }

  resetAllData() {
    localStorage.clear();
    this.init();
    this.notify();
  }
}

export const state = new AppState();
