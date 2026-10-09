export interface Workstream {
  id: string;
  label: string;
  coreScope: string;
  operationalOutput: string;
  icon: string;
}

export const workstreams: Workstream[] = [
  {
    id: 'A',
    label: 'Video Surveillance',
    coreScope: 'Fixed/PTZ, recording, evidence, health',
    operationalOutput: 'Live view and verifiable evidence',
    icon: 'video',
  },
  {
    id: 'B',
    label: 'AI Safety / VIDES',
    coreScope: 'Incident and unsafe-behaviour analytics',
    operationalOutput: 'Prioritized event and workflow',
    icon: 'brain',
  },
  {
    id: 'C',
    label: 'Traffic Intelligence',
    coreScope: 'Count, class, speed, occupancy, queues, travel time',
    operationalOutput: 'KPIs, heatmaps, congestion events',
    icon: 'traffic-cone',
  },
  {
    id: 'D',
    label: 'ATMS',
    coreScope: 'GIS, event, VMS, response and integration',
    operationalOutput: 'Unified corridor operations',
    icon: 'monitor',
  },
  {
    id: 'E',
    label: 'Sensors',
    coreScope: 'Radar/LiDAR, weather, WIM, power, network',
    operationalOutput: 'Contextual sensor data',
    icon: 'radar',
  },
  {
    id: 'F',
    label: 'Asset Intelligence',
    coreScope: 'Registry, GIS, health, condition, lifecycle',
    operationalOutput: 'Asset master and lifecycle plan',
    icon: 'hard-hat',
  },
  {
    id: 'G',
    label: 'Civil Analytics',
    coreScope: 'Defect detection and verification',
    operationalOutput: 'Ticket, severity and evidence',
    icon: 'scan-search',
  },
  {
    id: 'H',
    label: 'Closed Tolling',
    coreScope: 'FASTag, ANPR, journey and class logic',
    operationalOutput: 'Entry/exit match and exception',
    icon: 'receipt',
  },
  {
    id: 'I',
    label: 'Revenue Assurance',
    coreScope: 'Mismatch, duplicate, dispute, reconciliation',
    operationalOutput: 'Evidence-led exception queue',
    icon: 'shield-check',
  },
  {
    id: 'J',
    label: 'Technology O&M',
    coreScope: 'Monitoring, ticketing, mobile workforce',
    operationalOutput: 'Work orders and service reporting',
    icon: 'wrench',
  },
  {
    id: 'K',
    label: 'Data Platform',
    coreScope: 'Event bus, history, APIs, dashboards, audit',
    operationalOutput: 'Common operational data layer',
    icon: 'database',
  },
  {
    id: 'L',
    label: 'Cybersecurity',
    coreScope: 'Identity, segmentation, logging, remote access',
    operationalOutput: 'Security controls and audit trail',
    icon: 'lock',
  },
];
