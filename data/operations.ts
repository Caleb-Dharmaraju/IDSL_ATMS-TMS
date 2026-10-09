export interface OperationsSection {
  id: string;
  title: string;
  subtitle: string;
  items: { title: string; description: string }[];
}

export const videoSurveillance: OperationsSection = {
  id: 'video',
  title: 'Video Surveillance',
  subtitle: 'Operational video: coverage, evidence and health',
  items: [
    {
      title: 'Fixed + PTZ Coverage',
      description:
        'Continuous observation with long-range verification, presets, tours and tracking support.',
    },
    {
      title: 'Recording + Evidence',
      description:
        'Live view, retrieval, controlled export, retention and evidentiary access.',
    },
    {
      title: 'Camera Health',
      description:
        'Blur, obstruction, tamper, scene change, stream loss and storage-health monitoring.',
    },
  ],
};

export const videoFlow = [
  'Zone Design',
  'Live / Record',
  'Verify',
  'Export Evidence',
  'Health / Audit',
];

export interface AISafetyUseCase {
  title: string;
  description: string;
}

export const aiSafetyUseCases: AISafetyUseCase[] = [
  {
    title: 'Incident',
    description:
      'Stopped vehicle, suspected collision, abnormal trajectory, sudden congestion.',
  },
  {
    title: 'Unsafe Movement',
    description:
      'Wrong-way, wrong lane, illegal lane change and shoulder driving.',
  },
  {
    title: 'Roadside Hazards',
    description: 'Debris, fallen objects, smoke/fire and spill indicators.',
  },
  {
    title: 'Vulnerable Users',
    description:
      'Pedestrian, animal and prohibited presence on the controlled corridor.',
  },
  {
    title: 'Asset Damage',
    description:
      'Barrier, sign, delineator, lighting, median and roadside damage indicators.',
  },
  {
    title: 'Visibility + VIDES',
    description:
      'Fog, rain-related visibility and configured behavioural analytics.',
  },
];

export const eventLifecycle = [
  { step: '01', label: 'Detect', detail: 'Candidate observation' },
  { step: '02', label: 'Qualify', detail: 'Confidence, persistence, zone' },
  { step: '03', label: 'Geo-locate', detail: 'Camera, chainage, lane' },
  { step: '04', label: 'Validate', detail: 'Evidence and class review' },
  { step: '05', label: 'Dispatch', detail: 'Resource, VMS, clocks' },
  { step: '06', label: 'Close', detail: 'Action and evidence' },
  { step: '07', label: 'Learn', detail: 'Hotspots and model review' },
];

export const trafficMetrics = {
  primary: [
    { label: 'Count', detail: 'Lane / section volume' },
    { label: 'Class', detail: 'Vehicle composition' },
    { label: 'Speed', detail: 'Profiles and abnormality' },
    { label: 'Occupancy', detail: 'Lane utilization' },
  ],
  secondary: [
    { label: 'Queues', detail: 'Length and spillback' },
    { label: 'Travel Time', detail: 'Section delay' },
    { label: 'Heatmaps', detail: 'Time-distance patterns' },
    { label: 'Events', detail: 'Congestion alerts' },
  ],
};

export const atmsScope = [
  { title: 'Video', detail: 'Live, PTZ, presets, recording, export' },
  { title: 'GIS', detail: 'Corridor, chainage, event and asset layers' },
  { title: 'VMS / VASD', detail: 'Author, approve, schedule, trigger, audit' },
  {
    title: 'Incident Response',
    detail: 'Validate, dispatch, escalate and close',
  },
  {
    title: 'Traffic Monitoring',
    detail: 'Count, class, speed, occupancy, queues',
  },
  { title: 'Travel Time', detail: 'Section baseline and abnormal delay' },
  {
    title: 'Device Management',
    detail: 'Availability, configuration, versions, alarms',
  },
  {
    title: 'Resource Management',
    detail: 'Patrol allocation, ETA and task status',
  },
  {
    title: 'Reporting',
    detail: 'Safety, traffic, asset and service reports',
  },
  {
    title: 'Integrations',
    detail: 'Toll, Authority, emergency, API and mobile',
  },
];

export const commandControl = {
  items: [
    {
      title: 'Severity Event Queue',
      description:
        'Prioritized record with linked cameras, location, evidence and SOP.',
    },
    {
      title: 'Operator Consoles',
      description:
        'Role-based safety, traffic, toll, O&M and supervisor views.',
    },
    {
      title: 'Resource Tracking',
      description:
        'Closest available patrol, ETA, acknowledgement, arrival and status.',
    },
    {
      title: 'VMS Approvals',
      description:
        'Templates, authorization, scheduling, event triggers and audit history.',
    },
    {
      title: 'Executive Dashboard',
      description:
        'Management KPIs and trends, separate from operator transaction screens.',
    },
  ],
  flow: ['Detect', 'Validate', 'Dispatch', 'Act / Inform', 'Close / Report'],
};
