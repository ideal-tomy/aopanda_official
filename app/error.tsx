'use client'

import { useEffect } from 'react'
import LinkButton from '@/components/ui/LinkButton'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-status-danger mb-4">エラー</h1>
        <h2 className="text-2xl font-semibold text-text mb-4">
          問題が発生しました
        </h2>
        <p className="text-text-light mb-8">
          申し訳ございません。予期しないエラーが発生しました。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton href="/" variant="primary" size="lg">
            トップページへ戻る
          </LinkButton>
          <button
            onClick={reset}
            className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            もう一度試す
          </button>
        </div>
      </div>
    </div>
  )
}

