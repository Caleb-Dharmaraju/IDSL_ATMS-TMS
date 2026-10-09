import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

const routes = [
  '/',
  '/platform',
  '/operations',
  '/sensors',
  '/assets',
  '/tolling',
  '/governance',
  '/implementation',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
