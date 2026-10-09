export const implementationPhases = [
  { step: '01', label: 'Discovery', detail: 'Survey, audit, current-state study' },
  { step: '02', label: 'Architecture', detail: 'HLD/LLD, data, integration, cyber' },
  { step: '03', label: 'Pilot', detail: 'Representative zones and calibrated use cases' },
  { step: '04', label: 'Rollout', detail: 'Field integration, command centre, training' },
  { step: '05', label: 'Stabilisation', detail: 'Tuning, baselines, SOPs, operational trial' },
  { step: '06', label: 'O&M / Optimisation', detail: 'Managed service, lifecycle and new use cases' },
];

export const acceptanceEvidence = [
  'FAT',
  'SAT',
  'Integration',
  'Performance',
  'AI Validation',
  'Failover',
  'Cybersecurity',
  'Operational Trial',
  'Authority Approval',
];

export const deliverables = [
  { phase: 'Discover', items: ['Project plan', 'Survey and inventory', 'Current-system assessment', 'Gap analysis'] },
  { phase: 'Design', items: ['HLD/LLD', 'Network/cyber design', 'AI catalogue', 'Camera/sensor plan', 'ATMS, toll and revenue designs'] },
  { phase: 'Data & Integration', items: ['GIS/asset master', 'API/ICD', 'Command-centre and mobile O&M design'] },
  { phase: 'Assure & Operate', items: ['Test/acceptance plan', 'Training', 'SOPs', 'PM plan', 'DR/hardening plans', 'KPI/SLA framework', 'AI reports'] },
];

export const mitigations = [
  { risk: 'Legacy Interfaces', mitigation: 'Early discovery, API gateway, controlled adapters' },
  { risk: 'Image Quality / AI Error', mitigation: 'Baseline survey, monitoring, calibration, human validation' },
  { risk: 'Network / Power', mitigation: 'Buffering, redundancy, telemetry and preventive action' },
  { risk: 'Toll Mismatch', mitigation: 'FASTag + ANPR + class + audit evidence correlation' },
  { risk: 'Cyber Exposure', mitigation: 'Segmentation, MFA, hardening, logging and response' },
  { risk: 'Civil Ambiguity / Adoption', mitigation: 'Engineering referral, roles, training and phased SOPs' },
];

export const deliveryRoles = [
  'Programme leadership',
  'Solution, ATMS, AI, toll, asset/O&M and network/cyber leads',
  'Control room',
  'Field engineers',
  'Data/BI',
];

export const nextSteps = [
  { step: '01', label: 'Current-State Assessment' },
  { step: '02', label: 'Asset & Integration Study' },
  { step: '03', label: 'Authority-Approved Requirements' },
  { step: '04', label: 'Pilot Definition' },
  { step: '05', label: 'Detailed Design' },
];
