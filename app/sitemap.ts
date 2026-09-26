// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.viowfy.com';

  // قائمة المسارات الرئيسية والفرعية في موقعك
  const routes = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/services/business-verification',
    // '/services/provider-selection',
    // '/services/duns-number',
    // '/services/whatsapp-business-api',
    // '/services/whatsapp-apps',
    // '/services/facebook-login',
    // '/services/meta-pixel-capi',
    '/services/support',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}