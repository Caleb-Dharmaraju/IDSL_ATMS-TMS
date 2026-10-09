export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Platform', href: '/platform' },
  { label: 'Operations', href: '/operations' },
  { label: 'Sensors', href: '/sensors' },
  { label: 'Assets', href: '/assets' },
  { label: 'Tolling', href: '/tolling' },
  { label: 'Governance', href: '/governance' },
  { label: 'Contact', href: '/contact' },
];
