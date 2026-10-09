export interface SensorEntry {
  sensor: string;
  primaryRole: string;
  analyticsContribution: string;
}

export const sensorMatrix: SensorEntry[] = [
  {
    sensor: 'Fixed CCTV / AI Camera',
    primaryRole: 'Continuous surveillance',
    analyticsContribution:
      'Object, event, traffic, asset and safety analytics',
  },
  {
    sensor: 'PTZ',
    primaryRole: 'Long-range verification',
    analyticsContribution: 'Tracking, zoom evidence and situational awareness',
  },
  {
    sensor: 'ANPR Camera',
    primaryRole: 'Vehicle identity',
    analyticsContribution: 'VRN, attributes, class and journey evidence',
  },
  {
    sensor: 'FASTag / RFID',
    primaryRole: 'Electronic journey identity',
    analyticsContribution:
      'Tag, lane, timestamp and transaction association',
  },
  {
    sensor: 'Radar / LiDAR',
    primaryRole: 'Presence, speed, trajectory / 3D sensing',
    analyticsContribution:
      'Low-light support, trajectory and geometry where justified',
  },
  {
    sensor: 'Weather / Visibility',
    primaryRole: 'Environmental context',
    analyticsContribution: 'Rain, wind, temperature, fog and warnings',
  },
  {
    sensor: 'WIM',
    primaryRole: 'Vehicle weight / axle',
    analyticsContribution: 'Weight and axle analytics',
  },
  {
    sensor: 'Power / UPS / Solar',
    primaryRole: 'Energy health',
    analyticsContribution: 'Voltage, current, battery and solar status',
  },
  {
    sensor: 'Network Telemetry',
    primaryRole: 'Connectivity health',
    analyticsContribution: 'Latency, packet loss and link state',
  },
  {
    sensor: 'Environmental',
    primaryRole: 'Optional Authority context',
    analyticsContribution: 'Noise, air quality or defined measurements',
  },
];

export const fusionProcessing = {
  edge: [
    'Low-latency inference, OCR and tracking',
    'Local confidence / correlation rules',
    'Evidence buffering through network interruption',
    'Device health and synchronized timestamps',
  ],
  central: [
    'Cross-zone and corridor-wide correlation',
    'Historical trends and hotspot analysis',
    'Model, threshold and version governance',
    'Data quality scoring and audit references',
  ],
  examples: [
    'Stopped vehicle: AI detection + radar presence + adjacent camera + speed drop.',
    'Toll identity: FASTag + ANPR/VRN + class + lane camera + timestamp.',
  ],
};
