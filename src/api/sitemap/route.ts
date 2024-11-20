
import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://www.harleys.com'
  const pages = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/foundation', changefreq: 'weekly', priority: 0.8 },
    { url: '/coming-soon', changefreq: 'monthly', priority: 0.5 },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
        <url>
          <loc>${baseUrl}${page.url}</loc>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `).join('')}
    </urlset>
  `

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}