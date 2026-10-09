export interface Principle {
  title: string;
  description: string;
  icon: string;
}

export const designPhilosophy: Principle[] = [
  {
    title: 'One Corridor, One Picture',
    description:
      'A continuously updated view across safety, traffic, tolling, assets and service health.',
    icon: 'eye',
  },
  {
    title: 'Event-Driven',
    description:
      'AI and devices create operational events with owner, status, evidence and clocks, not isolated alerts.',
    icon: 'zap',
  },
  {
    title: 'Auditable',
    description:
      'Geo-referenced, time-synchronized and attributable records support review and accountability.',
    icon: 'clipboard-check',
  },
  {
    title: 'Interoperable',
    description:
      'Open APIs and standards-based interfaces reduce silos and accommodate future systems.',
    icon: 'plug',
  },
  {
    title: 'Human-in-Loop',
    description:
      'Operator validation remains mandatory for enforcement and safety-critical decisions.',
    icon: 'user-check',
  },
  {
    title: 'Outcome-Led O&M',
    description:
      'Availability, response, resolution and repeat-failure measures connect technology to operations.',
    icon: 'target',
  },
];

export const platformPositioning = {
  headline: 'A digital operations technology platform',
  subline: 'Not an equipment-only deployment',
  domains: [
    {
      name: 'Safety',
      capabilities: ['Earlier detection', 'Evidence and response'],
    },
    {
      name: 'Traffic',
      capabilities: ['Live corridor visibility', 'And decisions'],
    },
    {
      name: 'Tolling',
      capabilities: ['Journey integrity', 'And exceptions'],
    },
    {
      name: 'Assets',
      capabilities: ['Health, condition', 'And lifecycle'],
    },
    {
      name: 'Civil Analytics',
      capabilities: ['Defect evidence', 'And prioritization'],
    },
    {
      name: 'Technology O&M',
      capabilities: ['Measurable, auditable', 'Service'],
    },
  ],
  tagline: 'One corridor. One operational picture. One common event model.',
};

export const discoveryBaseline = {
  title: 'Discovery Baseline',
  subtitle: 'Corridor context and validation boundary',
  stats: [
    { value: '158 km', label: 'Corridor' },
    { value: '19', label: 'Plazas / Entry-Exit Locations' },
    { value: '181', label: 'Recorded Lanes' },
  ],
  designBasis: [
    'Confirm carriageway, service-road, interchange, lane and plaza topology.',
    'Verify control centres, communications, power, assets and interfaces.',
    'Freeze quantities, locations, performance parameters and BoQ only after survey.',
  ],
  note: 'Historic figures are discovery assumptions only; current field configuration and system ownership must be verified.',
};
