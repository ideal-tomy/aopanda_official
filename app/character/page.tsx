import SectionHeader from '@/components/ui/SectionHeader'

export default function CharacterPage() {
  return (
    <div className="min-h-screen py-section">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="キャラクター紹介"
          subtitle="あおぱんだの世界観とキャラクター"
        />

        <section className="mt-12 mb-section">
          <h2 className="text-2xl font-bold text-text mb-6">あおぱんだ</h2>
          <div className="bg-base-light rounded-lg p-8">
            <p className="text-text-light mb-4">
            企業理念
『できない理由より、できる方法を探そう。』

Ao Uminoが創業前から自分自身に言い聞かせてきた、大切な言葉です。

時には理由を見つけて逃げてしまいたくなることだってあります。

それでも、途中で投げ出すことだけはせず、今も変わらずコツコツと活動を続けています。

自分のすることが、一人でも多くの未来を明るくできるのなら。

そう信じて、今までも、そしてこれからも、歩き続けます。
            </p>
          </div>
        </section>

        <section className="mb-section">
          <h2 className="text-2xl font-bold text-text mb-6">世界観</h2>
          <div className="bg-base-light rounded-lg p-8">
            <p className="text-text-light mb-4">
            あおぱんだは今日もポジティブ！


明るくお気楽に一歩ずつ進もう！
明日がちょっと明るくなる
そんなアニメをお届けするパンダ。


気持ちってちょっとした事で、
すぐに白から黒へと変わるもの。
落ち込んだり悲しくなったり …そんな時こそ、あおぱんだ！

可愛く、楽しく、面白く！
ぽよぽよの体を目一杯動かして
TikTokで活動中
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

