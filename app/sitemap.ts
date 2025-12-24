import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://habeebulhaque.com' // Replace with actual domain

    const routes = [
        '',
        '/about',
        '/contact',
        '/pricing',
        '/services',
        '/services/seo',
        '/services/ppc',
        '/services/social-media',
        '/services/web-design',
        '/services/content-marketing',
        '/services/email-marketing',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
