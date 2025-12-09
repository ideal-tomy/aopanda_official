import Link from 'next/link'
import Badge from '@/components/ui/Badge'

const socialLinks = [
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@aopanda',
    icon: '🎵',
    description: '最新のショート動画',
  },
  {
    name: 'X (Twitter)',
    href: 'https://twitter.com/aopanda',
    icon: '🐦',
    description: '最新情報を配信',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@aopanda',
    icon: '📺',
    description: '長尺動画やアニメ',
  },
  {
    name: 'Kindle無料マンガ',
    href: 'https://www.amazon.co.jp/kindle',
    icon: '📚',
    description: '無料で読めるマンガ',
  },
  {
    name: 'Aopanda Party',
    href: 'https://aopanda-party.com',
    icon: '🎉',
    description: 'ファンコミュニティ',
  },
]

export default function LinksPage() {
  return (
    <div className="min-h-screen py-section">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text mb-4">リンク集</h1>
          <p className="text-text-light">
            あおぱんだの公式SNSや関連リンクを集めました
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-base-white border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{link.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text mb-2">
                    {link.name}
                  </h3>
                  <p className="text-sm text-text-light mb-4">
                    {link.description}
                  </p>
                  <Badge variant="primary">外部リンク</Badge>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

