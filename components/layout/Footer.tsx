import Link from 'next/link'

const socialLinks = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@aopanda' },
  { label: 'X (Twitter)', href: 'https://twitter.com/aopanda' },
  { label: 'YouTube', href: 'https://www.youtube.com/@aopanda' },
]

const footerLinks = [
  { label: 'プライバシーポリシー', href: '/privacy' },
  { label: '二次創作ガイドライン', href: '/business#guidelines' },
  { label: 'お問い合わせ', href: '/business' },
]

const Footer = () => {
  return (
    <footer className="bg-base-light border-t border-border mt-section">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-text mb-4">あおぱんだ</h3>
            <p className="text-sm text-text-light">
              TikTok発のキャラクター「あおぱんだ」の公式サイト
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text mb-4">SNS</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-light hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text mb-4">リンク</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-light hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-text-light">
          <p>&copy; {new Date().getFullYear()} ainy合同会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

