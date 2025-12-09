import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import LinkButton from '@/components/ui/LinkButton'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              あおぱんだ公式サイト
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
              TikTok発のキャラクター「あおぱんだ」の公式情報発信ハブ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkButton href="/contents" variant="outline" size="lg" className="bg-white text-primary hover:bg-base-light">
                コンテンツを見る
              </LinkButton>
              <LinkButton href="/movie" variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                動画を見る
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Breaking News Ticker */}
      <section className="bg-base-light py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-primary whitespace-nowrap">最新情報</span>
            <div className="flex-1 overflow-hidden">
              <div className="animate-scroll text-sm text-text-light whitespace-nowrap">
                ガチャガチャ発売中！全国の設置店舗情報はGOODSページから
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Navigation Cards */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'NEWS', href: '/news', description: '最新情報' },
              { label: 'GOODS', href: '/goods', description: '商品情報' },
              { label: 'MOVIE', href: '/movie', description: '動画' },
              { label: 'CONTENTS', href: '/contents', description: 'コンテンツ' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-base-white border-2 border-border rounded-lg p-6 text-center hover:border-primary hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-bold text-text mb-2">{item.label}</h2>
                <p className="text-sm text-text-light">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS Digest */}
      <section className="py-section bg-base-light">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="最新情報"
            subtitle="あおぱんだの最新ニュースをお届け"
            ctaLabel="すべて見る"
            ctaHref="/news"
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                href="/news/1"
                thumbnail={{
                  src: '/images/sumple01.png',
                  alt: 'ニュース画像',
                }}
                title="サンプルニュースタイトル"
                subtitle="ニュースの概要がここに入ります。2行まで表示されます。"
                badges={[<Badge key="news">NEWS</Badge>]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* GOODS Pickup */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="商品情報"
            subtitle="ガチャガチャやグッズの最新情報"
            ctaLabel="すべて見る"
            ctaHref="/goods"
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                href="/goods/1"
                thumbnail={{
                  src: '/images/sumple01.png',
                  alt: '商品画像',
                }}
                title="サンプル商品名"
                subtitle="商品の説明がここに入ります。"
                badges={[
                  <Badge key="new" variant="primary">NEW</Badge>,
                  <Badge key="limited" variant="secondary">限定</Badge>,
                ]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MOVIE Pickup */}
      <section className="py-section bg-base-light">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="動画"
            subtitle="TikTokやYouTubeの人気動画"
            ctaLabel="すべて見る"
            ctaHref="/movie"
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                href="/movie/1"
                thumbnail={{
                  src: '/images/sumple01.png',
                  alt: '動画サムネイル',
                }}
                title="サンプル動画タイトル"
                subtitle="動画の説明がここに入ります。"
                badges={[<Badge key="tiktok">TikTok</Badge>]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS CTA */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ビジネスパートナーの皆様へ
            </h2>
            <p className="text-lg mb-8 opacity-90">
              ライセンスや代理店に関するお問い合わせはこちら
            </p>
            <LinkButton href="/business" variant="outline" size="lg" className="bg-white text-primary hover:bg-base-light">
              お問い合わせ
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  )
}
