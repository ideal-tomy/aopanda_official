import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export default function GoodsPage() {
  return (
    <div className="min-h-screen py-section">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="商品情報"
          subtitle="ガチャガチャやグッズの最新情報"
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card
              key={i}
              href={`/goods/${i}`}
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
    </div>
  )
}

