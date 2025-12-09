export type ContentType = 'game' | 'manga' | 'anime' | 'other'
export type MediaType = 'App Store' | 'Kindle' | 'YouTube' | 'TikTok' | 'Other'
export type Region = 'JP' | 'US' | 'Global'

export interface ContentItem {
  id: string
  title: string
  subtitle?: string
  type: ContentType
  media: MediaType
  year: number
  region: Region
  thumbnail: string
  externalLink?: string
  tags?: string[]
  createdAt: string
  updatedAt: string
}

export interface NewsItem {
  id: string
  title: string
  content: string
  category: string
  tags: string[]
  thumbnail?: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}

export interface GoodsItem {
  id: string
  name: string
  description?: string
  price?: number
  releaseDate?: string
  images: string[]
  purchaseLinks?: Array<{ label: string; url: string }>
  locationLinks?: Array<{ label: string; url: string }>
  tags: string[]
  inStock: boolean
  createdAt: string
  updatedAt: string
}

export interface MovieItem {
  id: string
  title: string
  description?: string
  platform: 'TikTok' | 'YouTube'
  videoId: string
  thumbnail?: string
  viewCount?: number
  tags: string[]
  publishedAt: string
  createdAt: string
  updatedAt: string
}

export interface SocialLink {
  id: string
  platform: string
  url: string
  icon?: string
  description?: string
  region?: Region
  language?: string
  displayOrder: number
  qrCode?: string
}

