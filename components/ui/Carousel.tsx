'use client'

import { useRef, useState, useEffect, ReactNode } from 'react'
import { motion } from 'framer-motion'
import IconButton from './IconButton'

export interface CarouselProps {
  children: ReactNode[]
  showArrows?: boolean
  showDots?: boolean
  className?: string
  itemClassName?: string
  autoScroll?: boolean
  autoScrollInterval?: number
}

const Carousel = ({
  children,
  showArrows = true,
  showDots = false,
  className = '',
  itemClassName = '',
  autoScroll = false,
  autoScrollInterval = 5000,
}: CarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    updateScrollButtons()
    container.addEventListener('scroll', updateScrollButtons)

    return () => {
      container.removeEventListener('scroll', updateScrollButtons)
    }
  }, [children])

  useEffect(() => {
    if (!autoScroll) return

    const interval = setInterval(() => {
      if (scrollContainerRef.current && canScrollRight) {
        scrollContainerRef.current.scrollBy({
          left: scrollContainerRef.current.clientWidth,
          behavior: 'smooth',
        })
      }
    }, autoScrollInterval)

    return () => clearInterval(interval)
  }, [autoScroll, autoScrollInterval, canScrollRight])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return

    const scrollAmount = scrollContainerRef.current.clientWidth
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return

    const itemWidth = scrollContainerRef.current.clientWidth
    scrollContainerRef.current.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth',
    })
    setCurrentIndex(index)
  }

  return (
    <div className={`relative ${className}`}>
      {showArrows && (
        <>
          {canScrollLeft && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
              <IconButton
                aria-label="前へスクロール"
                onClick={() => scroll('left')}
                className="bg-base-white shadow-lg hover:bg-base-light"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </IconButton>
            </div>
          )}
          {canScrollRight && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
              <IconButton
                aria-label="次へスクロール"
                onClick={() => scroll('right')}
                className="bg-base-white shadow-lg hover:bg-base-light"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </IconButton>
            </div>
          )}
        </>
      )}

      <div
        ref={scrollContainerRef}
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
            style={{ width: 'calc(100vw - 2rem)' }}
          >
            {child}
          </div>
        ))}
      </div>

      {showDots && (
        <div className="flex justify-center gap-2 mt-4">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-primary'
                  : 'bg-border hover:bg-primary/50'
              }`}
              aria-label={`スライド ${index + 1} へ移動`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel

