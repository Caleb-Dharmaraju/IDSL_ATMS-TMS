export const tollingConcept = [
  { step: '01', label: 'Entry Event' },
  { step: '02', label: 'Journey Identity' },
  { step: '03', label: 'Exit Event' },
  { step: '04', label: 'Distance & Tariff' },
  { step: '05', label: 'Settlement' },
  { step: '06', label: 'Reconciliation' },
];

export const identificationStack = [
  {
    layer: 'FASTag / RFID',
    description: 'Primary electronic journey identity and transaction reference where mandated.',
  },
  {
    layer: 'ANPR / VRN',
    description: 'Independent vehicle identity, fallback correlation and exception evidence.',
  },
  {
    layer: 'Vehicle Classification',
    description: 'Observed class verification and support for applicable tariff category.',
  },
  {
    layer: 'Lane & Audit Cameras',
    description: 'Time-synchronized visual evidence for transaction review, recovery and disputes.',
  },
  {
    layer: 'Transaction Engine',
    description: 'Entry–exit journey match, distance/tariff logic, transaction and reconciliation references.',
  },
  {
    layer: 'Exception Engine',
    description: 'Unread, mismatch, duplicate, timeout, outage and dispute workflows with full audit trail.',
  },
];

export const journeyStateMachine = [
  { step: '01', label: 'Entry Detected' },
  { step: '02', label: 'FASTag Read' },
  { step: '03', label: 'ANPR Captured' },
  { step: '04', label: 'Classification' },
  { step: '05', label: 'Entry Validation' },
  { step: '06', label: 'Journey Token' },
  { step: '07', label: 'Exit' },
  { step: '08', label: 'Correlation' },
  { step: '09', label: 'Distance / Tariff' },
  { step: '10', label: 'Transaction' },
  { step: '11', label: 'Exceptions' },
  { step: '12', label: 'Settlement Interface' },
  { step: '13', label: 'Evidence Archive' },
];

export interface ExceptionEntry {
  exception: string;
  detection: string;
  handling: string;
}

export const exceptionControl: ExceptionEntry[] = [
  { exception: 'FASTag Unread', detection: 'No valid RFID read', handling: 'ANPR/VRN + image → journey recovery queue' },
  { exception: 'ANPR Unread', detection: 'OCR confidence below threshold', handling: 'FASTag + image/manual validation' },
  { exception: 'Tag/VRN Mismatch', detection: 'Identity conflict', handling: 'Confidence rules + operator review' },
  { exception: 'Class Mismatch', detection: 'Observed/configured class differs', handling: 'Image/video evidence + review' },
  { exception: 'Missing Exit/Entry', detection: 'Unpaired journey event', handling: 'Timeout, recovery or investigation workflow' },
  { exception: 'Duplicate', detection: 'Repeated transaction fingerprint', handling: 'Duplicate suppression + audit' },
  { exception: 'Wrong Direction', detection: 'Trajectory/direction mismatch', handling: 'Event correlation + review' },
  { exception: 'Dispute', detection: 'User/operator challenge', handling: 'Evidence package + auditable disposition' },
  { exception: 'Outage', detection: 'Field event not transmitted', handling: 'Local buffering + delayed reconciliation' },
];

export const revenueAssuranceMetrics = [
  { label: 'Journey Match', detail: 'Entry–exit matching and unmatched ageing' },
  { label: 'Read Success', detail: 'FASTag and ANPR confidence/read rates' },
  { label: 'Class Consistency', detail: 'Observed versus configured vehicle class' },
  { label: 'Exception Location', detail: 'By plaza, lane, device and time' },
  { label: 'Repeat Patterns', detail: 'Repeated vehicle, device or lane exceptions' },
  { label: 'Transaction Latency', detail: 'Event-to-transaction processing delay' },
  { label: 'Settlement Ageing', detail: 'Pending settlement and reconciliation queues' },
  { label: 'Manual Intervention', detail: 'Operator touch rate and dispositions' },
  { label: 'Evidence Quality', detail: 'Completeness of identity and visual references' },
  { label: 'Recovery Control', detail: 'Buffered-event replay and duplicate control' },
];
