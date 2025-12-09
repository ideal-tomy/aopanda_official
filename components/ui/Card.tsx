import { ReactNode, HTMLAttributes } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export type CardAspectRatio = 'card' | 'card-portrait'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  href?: string
  thumbnail?: {
    src: string
    alt: string
    aspectRatio?: CardAspectRatio
  }
  title: string
  subtitle?: string
  badges?: ReactNode[]
  footer?: ReactNode
  className?: string
}

const Card = ({
  href,
  thumbnail,
  title,
  subtitle,
  badges,
  footer,
  className = '',
  ...props
}: CardProps) => {
  const aspectRatioClass = thumbnail?.aspectRatio === 'card-portrait' 
    ? 'aspect-card-portrait' 
    : 'aspect-card'

  const cardContent = (
    <>
      {thumbnail && (
        <div className={`relative w-full overflow-hidden rounded-t-lg ${aspectRatioClass}`}>
          <Image
            src={thumbnail.src}
            alt={thumbnail.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-text line-clamp-2 mb-2">{title}</h3>
        {subtitle && (
          <p className="text-sm text-text-light line-clamp-2 mb-3">{subtitle}</p>
        )}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {badges.map((badge, index) => (
              <span key={index}>{badge}</span>
            ))}
          </div>
        )}
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </>
  )

  const baseStyles =
    'bg-base-white rounded-lg border border-border overflow-hidden transition-shadow hover:shadow-lg focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2'

  if (href) {
    return (
      <Link
        href={href}
        className={`block ${baseStyles} ${className}`}
      >
        {cardContent}
      </Link>
    )
  }

  return (
    <div className={`${baseStyles} ${className}`} {...props}>
      {cardContent}
    </div>
  )
}

export default Card

