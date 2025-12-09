import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export default function MoviePage() {
  return (
    <div className="min-h-screen py-section">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="動画"
          subtitle="TikTokやYouTubeの人気動画"
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card
              key={i}
              href={`/movie/${i}`}
                thumbnail={{
                  src: '/images/sumple01.png',
                  alt: '動画サムネイル',
                }}
              title="サンプル動画タイトル"
              subtitle="動画の説明がここに入ります。"
              badges={[
                <Badge key="platform">TikTok</Badge>,
                <Badge key="views" variant="primary">100万回再生</Badge>,
              ]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

