export const initialIncidents = [
  {
    id: "EVT-1042",
    title: "Critical Pothole Detected",
    type: "POTHOLE",
    severity: "HIGH",
    confidence: 94,
    bus: "BUS-204",
    location: "Main Road",
    gps: { lat: 21.2514, lng: 81.6296 },
    time: "10:42 AM",
    status: "NEW", // NEW, IN_PROGRESS, RESOLVED
    priorityScore: 92,
    reasons: [
      "High traffic road corridor",
      "Critical depth defect (> 8 cm)",
      "Repeated detections across 4 bus passes",
      "Immediate safety risk to commuters"
    ],
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&auto=format&fit=crop&q=80",
    frames: [
      "10:42:16 AM - Bus 204 Approach",
      "10:42:18 AM - AI Detection Bounding Box",
      "10:42:20 AM - Telemetry Confirmed"
    ]
  },
  {
    id: "EVT-1043",
    title: "Severe Traffic Bottleneck",
    type: "CONGESTION",
    severity: "HIGH",
    confidence: 89,
    bus: "BUS-201",
    location: "Ring Road Flyover",
    gps: { lat: 21.2590, lng: 81.6350 },
    time: "10:48 AM",
    status: "NEW",
    priorityScore: 88,
    reasons: [
      "Avg vehicle speed dropped to 6 km/h",
      "Queue spillback over 800m",
      "Peak hour commuting corridor"
    ],
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "EVT-1044",
    title: "Damaged Traffic Signpost",
    type: "ROAD_DEFECT",
    severity: "MODERATE",
    confidence: 91,
    bus: "BUS-206",
    location: "Central Avenue",
    gps: { lat: 21.2450, lng: 81.6210 },
    time: "10:55 AM",
    status: "IN_PROGRESS",
    priorityScore: 74,
    reasons: [
      "Obstructed yield sign",
      "Moderate traffic corridor"
    ],
    image: "https://images.unsplash.com/photo-1584467735815-f778f274e296?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "EVT-1045",
    title: "Monsoon Waterlogging",
    type: "ROAD_DEFECT",
    severity: "HIGH",
    confidence: 96,
    bus: "BUS-203",
    location: "Station Road Underpass",
    gps: { lat: 21.2560, lng: 81.6180 },
    time: "11:02 AM",
    status: "NEW",
    priorityScore: 95,
    reasons: [
      "Submerged road lane",
      "Underpass flood risk",
      "Bus transit line affected"
    ],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "EVT-1046",
    title: "Surface Cracking & Fissures",
    type: "ROAD_DEFECT",
    severity: "LOW",
    confidence: 88,
    bus: "BUS-204",
    location: "Park Street",
    gps: { lat: 21.2480, lng: 81.6380 },
    time: "11:15 AM",
    status: "RESOLVED",
    priorityScore: 45,
    reasons: [
      "Early stage wear",
      "Low immediate hazard"
    ],
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&auto=format&fit=crop&q=80"
  }
];

export const fleetBuses = [
  { id: "BUS-201", route: "Route 12 - Airport Line", status: "ACTIVE", gps: "21.2590, 81.6350", speed: "28 km/h", camera: "ONLINE", aiStatus: "PROCESSING", driver: "Rajesh Kumar", fps: 30, latency: 14 },
  { id: "BUS-202", route: "Route 08 - Tech Park Express", status: "ACTIVE", gps: "21.2410, 81.6150", speed: "34 km/h", camera: "ONLINE", aiStatus: "PROCESSING", driver: "Sunil Verma", fps: 31, latency: 12 },
  { id: "BUS-203", route: "Route 04 - Station Underpass", status: "ACTIVE", gps: "21.2560, 81.6180", speed: "18 km/h", camera: "ONLINE", aiStatus: "PROCESSING", driver: "Amit Patel", fps: 29, latency: 15 },
  { id: "BUS-204", route: "Route 15 - Main Road Arterial", status: "ACTIVE", gps: "21.2514, 81.6296", speed: "22 km/h", camera: "ONLINE", aiStatus: "PROCESSING", driver: "Vikas Sharma", fps: 30, latency: 13 },
  { id: "BUS-205", route: "Route 02 - Depot Standby", status: "OFFLINE", gps: "21.2300, 81.6100", speed: "0 km/h", camera: "STANDBY", aiStatus: "OFFLINE", driver: "N/A", fps: 0, latency: 0 },
  { id: "BUS-206", route: "Route 22 - Central Boulevard", status: "ACTIVE", gps: "21.2450, 81.6210", speed: "30 km/h", camera: "ONLINE", aiStatus: "PROCESSING", driver: "Dinesh Yadav", fps: 32, latency: 11 },
  { id: "BUS-207", route: "Route 09 - Suburbs Feeder", status: "ACTIVE", gps: "21.2620, 81.6420", speed: "41 km/h", camera: "ONLINE", aiStatus: "PROCESSING", driver: "Manoj Singh", fps: 28, latency: 16 },
  { id: "BUS-208", route: "Route 11 - Maintenance Bay", status: "OFFLINE", gps: "21.2280, 81.6050", speed: "0 km/h", camera: "OFFLINE", aiStatus: "OFFLINE", driver: "N/A", fps: 0, latency: 0 }
];

export const trafficMetrics = {
  averageSpeed: "24.5 km/h",
  congestionIndex: "68%",
  activeVehicles: "14,820",
  peakDelay: "+18 mins",
  hourlyData: [
    { time: "06:00", count: 2100, speed: 45, density: 25 },
    { time: "08:00", count: 8900, speed: 22, density: 78 },
    { time: "10:00", count: 12400, speed: 18, density: 88 },
    { time: "12:00", count: 9800, speed: 28, density: 62 },
    { time: "14:00", count: 10500, speed: 26, density: 65 },
    { time: "16:00", count: 13800, speed: 16, density: 92 },
    { time: "18:00", count: 15200, speed: 14, density: 96 },
    { time: "20:00", count: 8400, speed: 32, density: 48 }
  ],
  hotspots: [
    { location: "Main Road & 4th Cross", level: "CRITICAL", delay: "14 mins" },
    { location: "Ring Road Flyover Junction", level: "HIGH", delay: "10 mins" },
    { location: "Station Road Underpass", level: "HIGH", delay: "9 mins" },
    { location: "Tech Park North Gate", level: "MODERATE", delay: "5 mins" }
  ]
};

export const roadIntelligenceStats = {
  totalDefectsDetected: 142,
  potholesCount: 68,
  waterloggingCount: 19,
  damagedSignsCount: 31,
  fissuresCount: 24,
  highPriorityCount: 18,
  repairedThisMonth: 89,
  averageRepairTimeDays: 1.8
};

export const copilotQA = [
  {
    keywords: ["urgent", "maintenance", "pothole", "defect", "repair"],
    question: "Which roads need urgent maintenance?",
    answer: "Based on real-time mobile edge telemetry from Bus-204 and Bus-203:\n1. **Main Road (EVT-1042)**: High-severity pothole (Priority 92/100) requiring immediate crew dispatch.\n2. **Station Road Underpass (EVT-1045)**: Waterlogging hazard (Priority 95/100).\n3. **Ring Road Flyover**: Surface degradation detected across Lane 2."
  },
  {
    keywords: ["congestion", "traffic", "increasing", "jam", "bottleneck"],
    question: "Where is congestion increasing?",
    answer: "Current traffic density analysis indicates heavy congestion rising at:\n- **Ring Road Flyover Junction**: Speed dropped to 14 km/h (+14 min delay).\n- **Main Road & 4th Cross**: Queue length 650m due to lane restriction.\n- Recommended Action: Reroute Bus Route 12 through Outer Bypass."
  },
  {
    keywords: ["critical", "incidents", "today", "alert", "emergency"],
    question: "Show today's critical incidents.",
    answer: "Today's Top 3 Critical Incidents:\n• **EVT-1042 (10:42 AM)**: Pothole on Main Road (94% confidence, Bus-204).\n• **EVT-1045 (11:02 AM)**: Monsoon Waterlogging at Station Underpass (96% confidence).\n• **EVT-1043 (10:48 AM)**: High Bottleneck on Ring Road Flyover."
  },
  {
    keywords: ["bus", "routes", "delayed", "fleet", "delay"],
    question: "Which bus routes are delayed?",
    answer: "Bus Route Status Report:\n• **Route 15 (BUS-204)**: Delayed by 12 mins near Main Road due to road defect slowing transit.\n• **Route 12 (BUS-201)**: Delayed by 15 mins at Ring Road Flyover.\n• All other active routes (Route 08, 04, 22, 09) operating within target schedule (±3 mins)."
  }
];
