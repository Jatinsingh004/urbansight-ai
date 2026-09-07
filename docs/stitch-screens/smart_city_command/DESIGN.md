---
name: Smart City Command
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#bfc5e4'
  on-secondary: '#292f48'
  secondary-container: '#424862'
  on-secondary-container: '#b1b7d6'
  tertiary: '#bdc7d9'
  on-tertiary: '#27313f'
  tertiary-container: '#646e7e'
  on-tertiary-container: '#eaf1ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#bfc5e4'
  on-secondary-fixed: '#141a32'
  on-secondary-fixed-variant: '#3f465f'
  tertiary-fixed: '#d9e3f6'
  tertiary-fixed-dim: '#bdc7d9'
  on-tertiary-fixed: '#121c2a'
  on-tertiary-fixed-variant: '#3d4756'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-columns: '12'
  gutter-default: 1rem
  margin-default: 1.5rem
  space-2: 0.25rem
  space-4: 0.5rem
  space-6: 0.75rem
  space-8: 1rem
  space-12: 1.5rem
  space-16: 2rem
  space-24: 3rem
---

## Brand & Style

This design system delivers a professional smart city command center aesthetic tailored for high-stakes operational monitoring. The design style merges corporate enterprise SaaS precision with a high-contrast dark-mode control room environment. 

### Brand Personality & Target Audience
- **Personality:** Authoritative, precise, vigilant, and ultra-reliable.
- **Target Audience:** Municipal operators, emergency responders, system administrators, and city executives who require real-time situational awareness.
- **Emotional Response:** Reassurance, absolute control, and immediate clarity during critical incidents.

### Design Style
A hybrid of **Minimalism** and **High-Contrast Dark Mode**. It relies on deep, light-absorbing dark backgrounds, razor-thin borders, and luminosity-based depth rather than heavy drop shadows. Critical data points are punctuated by vibrant, high-urgency status colors to guide the operator's eye instantly to anomalies.

## Colors

The color palette is engineered for low-light control room environments, reducing eye strain while maximizing the legibility of urgent alerts.

- **Primary Accent (`#2563EB` - Vivid Blue):** Used for primary interactive elements, active states, and system navigation links.
- **Secondary Base (`#0A1128` - Dark Navy):** The foundational canvas color for the application background, establishing the command center atmosphere.
- **Tertiary Surface (`#1F2937` - Charcoal):** Utilized for container backgrounds, sidebar navigation, and distinct UI modules.
- **Critical Alert (`#DC2626` - Red):** Reserved strictly for high-priority incidents, system failures, and emergency overrides.
- **Warning (`#F59E0B` - Amber):** Applied to secondary warnings, threshold approaches, and pending actions.
- **Status Normal (`#10B981` - Green):** Indicates operational stability, resolved incidents, and nominal sensor feeds.
- **Neutral Light (`#F9FAFB` - Crisp White):** Primary text and card background tone ensuring maximum contrast against dark surfaces.

## Typography

Typography balances clean enterprise readability with technical precision. 
- **Inter** serves as the primary typeface for all structural content, data tables, and major headings, ensuring exceptional legibility at small sizes.
- **JetBrains Mono** is assigned to all data labels, telemetry readouts, timestamp markers, and status indicators to maintain strict tabular alignment and a true command center aesthetic.

Scale text down gracefully on mobile viewports, prioritizing data density without causing wrapping anomalies in metric cards.

## Layout & Spacing

The layout utilizes a strict **12-column fluid grid** system optimized for multi-monitor command center dashboards and dense data displays. 

- **Gutters & Margins:** Standardized at 16px (`1rem`) gutters and 24px (`1.5rem`) outer margins to maximize screen real estate while separating distinct telemetry clusters.
- **Information Density:** Spacing tokens lean tight (4px to 16px increments) to support high-density widgets, compact data tables, and rapid visual scanning.
- **Responsive Reflow:** On desktop, the UI anchors to a multi-panel dashboard grid. On tablet, secondary sidebars collapse into drawers. On mobile, multi-column metric groups stack into a single vertical stream while preserving tabular data via horizontal scrolling containers.

## Elevation & Depth

Depth is established primarily through **low-contrast outlines** and tonal surface shifts rather than traditional drop shadows. 

- **Surface Tiers:** Use `#0A1128` for the base canvas, elevating cards and panels to `#1F2937` (Charcoal) with crisp 1px borders (`#374151`) to delineate boundaries.
- **Glowing Status Indicators:** For critical alerts and active operational states, employ subtle, low-opacity ambient glows (e.g., a 4px diffused shadow matching the alert color: red `#DC2626` or amber `#F59E0B`) to draw immediate attention without cluttering the interface.

## Shapes

A strict **Soft** shape language (`roundedness: 1`) is enforced across the interface to maintain a professional, technical enterprise feel. 
- **Radius Scale:** Base UI elements (buttons, inputs, small badges) use a tight `0.25rem` (4px) corner radius. Cards and modal containers scale up to `0.5rem` (8px) or `0.75rem` (12px).
- **Justification:** Sharp 0px corners are avoided to prevent visual fatigue, while heavily rounded pill shapes are reserved exclusively for status tags and category chips, creating a clear functional distinction between structural containers and metadata labels.

## Components

Every component must adhere to the high-density, precise aesthetic of an enterprise command center.

- **Buttons:** Compact and high-contrast. Primary actions use Vivid Blue (`#2563EB`) with crisp white labels. Danger/Emergency actions use Critical Red (`#DC2626`). Include subtle hover state lightening and an instant active press state.
- **Chips & Badges:** Pill-shaped (`rounded-full`) components utilizing JetBrains Mono for telemetry tags, category filters, and live status states (e.g., Normal in green, Warning in amber, Critical in red).
- **Lists:** Dense tabular lists with alternate row shading for scanning ease. Rows feature subtle bottom borders and hover highlights to track cursor position across wide data sets.
- **Checkboxes & Radio Buttons:** Clean, square geometry (4px radius) for checkboxes with high-contrast checkmarks; circular radios featuring distinct inner selection dots.
- **Input Fields:** Dark charcoal backgrounds (`#1F2937`) with 1px structural borders. Focus states transition immediately to Vivid Blue (`#2563EB`) with a crisp 1px focus ring.
- **Cards:** Crisp white or charcoal surface containers displaying sensor streams, map feeds, or camera feeds, framed by thin, low-contrast borders and anchored by monospaced header labels.
- **Additional Command Center Components:** 
  - *Telemetry Gauges:* Circular or linear progress bars with hard threshold color splits (Green to Amber to Red).
  - *Live Feed Panels:* Video or map wrappers featuring a pulsing live indicator dot in the top-left corner.
  - *Incident Ticker:* Scrolling or stacked notification logs optimized for rapid triage.