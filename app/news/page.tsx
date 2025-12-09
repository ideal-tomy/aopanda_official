import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export default function NewsPage() {
  return (
    <div className="min-h-screen py-section">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="最新情報"
          subtitle="あおぱんだの最新ニュースをお届けします"
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card
              key={i}
              href={`/news/${i}`}
                thumbnail={{
                  src: '/images/sumple01.png',
                  alt: 'ニュース画像',
                }}
              title="サンプルニュースタイトル"
              subtitle="ニュースの概要がここに入ります。2行まで表示されます。"
              badges={[
                <Badge key="category">カテゴリ</Badge>,
                <Badge key="date" variant="primary">2024.01.01</Badge>,
              ]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

