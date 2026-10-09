export const aiGovernanceDomains = [
  { domain: 'Safety', scope: 'Incidents, hazards, prohibited presence' },
  { domain: 'Traffic', scope: 'Count, class, queue, speed, travel time' },
  { domain: 'Enforcement', scope: 'Configured rule events; human validation' },
  { domain: 'Asset', scope: 'Image quality, damage and condition flags' },
  { domain: 'Civil', scope: 'Pavement and roadside defect indicators' },
  { domain: 'Toll', scope: 'OCR, class, journey and exceptions' },
  { domain: 'O&M', scope: 'Failure prediction and repeat clustering' },
  { domain: 'Decision AI', scope: 'Risk, hotspots and response support' },
];

export const aiAssuranceControls = [
  'Model/version registry, deployment owner and rollback procedure',
  'Precision, recall, false positives and false negatives by use case',
  'Performance by weather, time, scene and camera location',
  'Controlled thresholds, confidence bands and change approval',
  'Human validation for high-impact decisions',
  'Field ground-truth sampling, drift review and documented limitations',
];

export const managedOMTiers = [
  { tier: 'L1', label: 'Acknowledge', description: 'Alarm triage, basic diagnostics and ticket creation', mode: '24×7' },
  { tier: 'L2', label: 'Restore Remotely', description: 'Configuration, application and service recovery', mode: '24×7' },
  { tier: 'L3 / OEM', label: 'Advanced Diagnosis', description: 'Advanced diagnosis, defects and vendor escalation', mode: '' },
  { tier: 'Field', label: 'Field Repair', description: 'Replace, repair, align, clean and restore connectivity/power', mode: '' },
];

export const managedOMExtras = [
  { title: 'Problem & Change', description: 'Root cause, repeat-failure elimination and controlled change' },
  { title: 'Reporting', description: 'Operational, service, quality and management reporting' },
];

export const mobileWorkforceSteps = [
  { step: '01', label: 'Identify Asset', detail: 'QR/NFC or asset ID, history, priority and task SOP' },
  { step: '02', label: 'GIS Navigation', detail: 'Asset context' },
  { step: '03', label: 'Assign Work Order', detail: 'Continuity' },
  { step: '04', label: 'Execute Checklist', detail: 'Offline capture with controlled synchronization after recovery' },
  { step: '05', label: 'Before/After Evidence', detail: 'Spares and material consumption linked to the work order' },
  { step: '06', label: 'Supervisor Approval', detail: 'Geo/time stamps, approvals, escalation and immutable evidence' },
  { step: '07', label: 'Digital Handover', detail: 'Accountability' },
];

export const securityDomains = [
  { title: 'Segment', description: 'Separate field, OT/control, enterprise and internet-facing zones' },
  { title: 'Control Access', description: 'Least privilege, RBAC, MFA and logged secure remote access' },
  { title: 'Protect Data', description: 'Encryption where applicable; retention and access controls for video, ANPR and transactions' },
  { title: 'Harden & Monitor', description: 'Secure configuration, centralized logs, vulnerability and patch governance' },
  { title: 'Recover', description: 'Backup/DR, redundant critical servers, links, power paths and time synchronization' },
  { title: 'Respond', description: 'Incident response procedures, escalation, evidence and periodic drills' },
];

export interface KPIDomain {
  domain: string;
  metrics: string;
}

export const executiveKPIs: KPIDomain[] = [
  { domain: 'Safety', metrics: 'Detection, validation, response, closure, hotspots' },
  { domain: 'Traffic', metrics: 'Volume, speed, congestion, travel time' },
  { domain: 'AI', metrics: 'Validation, false alarms, confidence, drift' },
  { domain: 'Technology', metrics: 'Availability, MTBF, MTTR, network, power' },
  { domain: 'Assets', metrics: 'Health, critical unavailability, ageing' },
  { domain: 'Civil Analytics', metrics: 'Detected, verified, closed, ageing, repeats' },
  { domain: 'Tolling', metrics: 'Journey match, reads, exceptions, success' },
  { domain: 'Revenue Assurance', metrics: 'Unmatched, disputes, ageing, intervention' },
  { domain: 'O&M', metrics: 'Service performance, PM, repeats, workforce' },
];
