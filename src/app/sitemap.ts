import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://monaiq.info',
      lastModified: new Date(),
    }
  ]
}