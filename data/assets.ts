export const assetHierarchy = [
  'Corridor',
  'Section',
  'Facility',
  'Subsystem',
  'Asset',
  'Component',
];

export const assetMasterData = [
  { title: 'Asset Master Data', items: ['ID, model, serial and firmware', 'GIS, chainage, direction and lane', 'Owner, criticality, warranty and spares', 'Maintenance and failure history'] },
  { title: 'Configurable Health Score', items: ['Availability + alarms + age + image quality + network + power + failure frequency + maintenance history'] },
  { title: 'Actionable Lifecycle', items: ['Preventive maintenance priority', 'Repeat-failure intervention', 'Replacement planning', 'Ticket, technician, spare and evidence linkage'] },
];

export const roleBoundary = {
  idsl: [
    'Digital inspection and capture',
    'Analytics and geo-tagged evidence',
    'Priority / ticket recommendation',
    'Reinspection and closure verification',
  ],
  civilAgency: [
    'Engineering assessment and decision',
    'Physical civil rectification',
    'Construction activity',
    'Routine manual maintenance',
  ],
};

export interface DefectEntry {
  area: string;
  analytics: string;
  output: string;
}

export const defectScopeI: DefectEntry[] = [
  { area: 'Pavement', analytics: 'Pothole indicators, cracks, rutting / surface distress indicators', output: 'Geo-tagged defect record' },
  { area: 'Shoulder', analytics: 'Obstruction, erosion indicators, debris', output: 'Defect ticket' },
  { area: 'Median', analytics: 'Vegetation, damage, obstruction', output: 'Maintenance priority' },
  { area: 'Crash Barrier', analytics: 'Missing / damaged / impact indicators', output: 'Damage evidence' },
  { area: 'Delineators', analytics: 'Missing / damaged / visibility condition', output: 'Replacement list' },
  { area: 'Signs', analytics: 'Missing, tilted, obscured, damaged, visibility condition', output: 'Asset defect' },
];

export const defectScopeII: DefectEntry[] = [
  { area: 'Road Markings', analytics: 'Visibility / wear indicators where imaging permits', output: 'Inspection trigger' },
  { area: 'Lighting', analytics: 'Lamp outage / illumination anomaly with suitable imaging / telemetry', output: 'Lighting defect' },
  { area: 'Drainage', analytics: 'Standing-water / waterlogging indicators, recurring locations', output: 'Drainage inspection trigger' },
  { area: 'Encroachment', analytics: 'Objects / persons / vegetation entering controlled zones', output: 'Exception / event' },
  { area: 'Structures', analytics: 'Visual anomaly flags for detailed inspection', output: 'Inspection referral' },
];

export const defectLifecycle = [
  { step: '01', label: 'Capture' },
  { step: '02', label: 'AI/Manual Detection' },
  { step: '03', label: 'Geo-tag' },
  { step: '04', label: 'Classify' },
  { step: '05', label: 'Severity' },
  { step: '06', label: 'Assign' },
  { step: '07', label: 'Rectify' },
  { step: '08', label: 'Reinspect' },
  { step: '09', label: 'Close' },
  { step: '10', label: 'Trend' },
];

export const engineeringQualification = [
  { step: '01', label: 'Digital or manual flag with evidence' },
  { step: '02', label: 'Qualified inspection and field assessment' },
  { step: '03', label: 'Engineering decision and approved treatment' },
  { step: '04', label: 'Rectification, reinspection and closeout' },
];
