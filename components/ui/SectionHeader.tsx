import { ReactNode } from 'react'
import LinkButton from './LinkButton'

export interface SectionHeaderProps {
  title: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

const SectionHeader = ({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  className = '',
}: SectionHeaderProps) => {
  return (
    <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${className}`}>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-text-light text-sm md:text-base">{subtitle}</p>
        )}
      </div>
      {ctaLabel && ctaHref && (
        <div className="flex-shrink-0">
          <LinkButton href={ctaHref} variant="outline" size="md">
            {ctaLabel}
          </LinkButton>
        </div>
      )}
    </div>
  )
}

export default SectionHeader

