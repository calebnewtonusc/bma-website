import type { MetadataRoute } from "next"

const base = "https://bluemodernadvisory.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                                    lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/gtm`,                           lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/agents`,                        lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/togari`,                        lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/coaching`,                      lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/case-studies`,                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/case-studies/private-equity-fund`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/case-studies/vertical-saas-tam`,   lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/case-studies/health-network-intel`,lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/about`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/content`,                       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.6 },
    { url: `${base}/contact`,                       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
  ]
}
