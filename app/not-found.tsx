import Link from 'next/link'
import LinkButton from '@/components/ui/LinkButton'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-text mb-4">
          ページが見つかりません
        </h2>
        <p className="text-text-light mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton href="/" variant="primary" size="lg">
            トップページへ戻る
          </LinkButton>
          <LinkButton href="/contents" variant="outline" size="lg">
            コンテンツを見る
          </LinkButton>
        </div>
      </div>
    </div>
  )
}

