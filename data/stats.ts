export interface Stat {
  value: string;
  label: string;
}

export const corridorStats: Stat[] = [
  { value: '158 km', label: 'Corridor Length' },
  { value: '19', label: 'Plazas & Entry-Exit Locations' },
  { value: '181', label: 'Recorded Lanes' },
  { value: '12', label: 'Connected Workstreams' },
];
