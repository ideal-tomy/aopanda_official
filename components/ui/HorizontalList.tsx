'use client'

import { ReactNode } from 'react'
import Carousel from './Carousel'

export interface HorizontalListProps {
  children: ReactNode[]
  showArrows?: boolean
  className?: string
  itemClassName?: string
  columns?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
}

const HorizontalList = ({
  children,
  showArrows = true,
  className = '',
  itemClassName = '',
  columns = { mobile: 1, tablet: 2, desktop: 3 },
}: HorizontalListProps) => {
  const getItemWidth = () => {
    if (typeof window === 'undefined') return '100%'
    
    const width = window.innerWidth
    if (width >= 1024 && columns.desktop) {
      return `calc((100% - ${(columns.desktop - 1) * 1}rem) / ${columns.desktop})`
    }
    if (width >= 768 && columns.tablet) {
      return `calc((100% - ${(columns.tablet - 1) * 1}rem) / ${columns.tablet})`
    }
    return columns.mobile === 1 ? '100%' : `calc((100% - ${(columns.mobile! - 1) * 1}rem) / ${columns.mobile})`
  }

  return (
    <div className={className}>
      <div
        className="flex overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory gap-4 pb-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={`flex-shrink-0 snap-start ${itemClassName}`}
            style={{ width: getItemWidth() }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HorizontalList

