// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // أي مسار لا تريد أرشفته (اختياري)
    },
    sitemap: 'https://www.viowfy.com/sitemap.xml',
  };
}