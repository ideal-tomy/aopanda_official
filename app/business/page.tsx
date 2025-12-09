import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import LinkButton from '@/components/ui/LinkButton'

export default function BusinessPage() {
  return (
    <div className="min-h-screen py-section">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="ビジネスパートナーの皆様へ"
          subtitle="ライセンスや代理店に関するお問い合わせ"
        />

        <section className="mt-12 mb-section">
          <h2 className="text-2xl font-bold text-text mb-6">お問い合わせ</h2>
          <div className="bg-base-light rounded-lg p-8">
            <p className="text-text-light mb-6">
              ライセンス、代理店、その他ビジネスに関するお問い合わせは、以下のフォームからお願いいたします。
            </p>
            <LinkButton href="/business/contact" variant="primary" size="lg">
              お問い合わせフォームへ
            </LinkButton>
          </div>
        </section>

        <section className="mb-section">
          <h2 className="text-2xl font-bold text-text mb-6">実績・事例</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <Card
                key={i}
                thumbnail={{
                  src: '/images/sumple01.png',
                  alt: '実績画像',
                }}
                title="サンプル実績タイトル"
                subtitle="実績の説明がここに入ります。"
              />
            ))}
          </div>
        </section>

        <section className="mb-section">
          <h2 className="text-2xl font-bold text-text mb-6">
            二次創作ガイドライン
          </h2>
          <div className="bg-base-light rounded-lg p-8">
            <div className="prose prose-sm max-w-none">
              <h3 className="text-lg font-semibold mb-4">ガイドライン</h3>
              <p className="text-text-light mb-4">
                あおぱんだの二次創作に関するガイドラインです。
              </p>
              <ul className="list-disc list-inside text-text-light space-y-2">
                <li>個人利用・非営利目的での利用は自由です</li>
                <li>商用利用の場合は事前にご連絡ください</li>
                <li>公序良俗に反する利用は禁止です</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

