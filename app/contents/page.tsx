'use client'

import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import HorizontalList from '@/components/ui/HorizontalList'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

type ContentType = 'all' | 'game' | 'manga' | 'anime' | 'other'

const mockContents = [
  {
    id: 1,
    title: 'あおぱんだゲーム',
    subtitle: 'スマホゲーム',
    type: 'game' as const,
    media: 'App Store',
    year: 2024,
    region: 'JP',
    thumbnail: '/images/sumple01.png',
  },
  {
    id: 2,
    title: 'あおぱんだマンガ',
    subtitle: 'Kindle無料マンガ',
    type: 'manga' as const,
    media: 'Kindle',
    year: 2024,
    region: 'JP',
    thumbnail: '/images/sumple01.png',
  },
  {
    id: 3,
    title: 'あおぱんだアニメ試作',
    subtitle: 'ショートアニメ',
    type: 'anime' as const,
    media: 'YouTube',
    year: 2024,
    region: 'Global',
    thumbnail: '/images/sumple01.png',
  },
]

const contentSections = [
  { title: 'ゲーム', type: 'game' as ContentType },
  { title: '漫画', type: 'manga' as ContentType },
  { title: 'アニメ', type: 'anime' as ContentType },
  { title: 'その他', type: 'other' as ContentType },
]

export default function ContentsPage() {
  const [selectedFilter, setSelectedFilter] = useState<ContentType>('all')

  const filteredContents = mockContents.filter(
    (content) => selectedFilter === 'all' || content.type === selectedFilter
  )

  return (
    <div className="min-h-screen py-section">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text mb-4">コンテンツ</h1>
          <p className="text-text-light">
            あおぱんだの制作コンテンツを紹介します
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={selectedFilter === 'all' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter('all')}
          >
            すべて
          </Button>
          {contentSections.map((section) => (
            <Button
              key={section.type}
              variant={selectedFilter === section.type ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter(section.type)}
            >
              {section.title}
            </Button>
          ))}
        </div>

        {/* Content Sections */}
        {contentSections.map((section) => {
          const sectionContents = mockContents.filter(
            (content) => content.type === section.type
          )

          if (sectionContents.length === 0) return null

          return (
            <section key={section.type} className="mb-section">
              <SectionHeader
                title={section.title}
                subtitle={`${section.title}コンテンツ一覧`}
                ctaLabel="すべて見る"
                ctaHref={`/contents?type=${section.type}`}
              />
              <div className="mt-6">
                <HorizontalList
                  columns={{ mobile: 1, tablet: 2, desktop: 3 }}
                  showArrows={true}
                >
                  {sectionContents.map((content) => (
                    <Card
                      key={content.id}
                      href={`/contents/${content.id}`}
                      thumbnail={{
                        src: content.thumbnail,
                        alt: content.title,
                        aspectRatio: 'card',
                      }}
                      title={content.title}
                      subtitle={content.subtitle}
                      badges={[
                        <Badge key="media" variant="primary">
                          {content.media}
                        </Badge>,
                        <Badge key="year">{content.year}</Badge>,
                        <Badge key="region">{content.region}</Badge>,
                      ]}
                      footer={
                        <div className="flex gap-2">
                          <Button variant="primary" size="sm" className="flex-1">
                            詳細を見る
                          </Button>
                        </div>
                      }
                    />
                  ))}
                </HorizontalList>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

