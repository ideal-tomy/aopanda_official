'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label': string
  size?: 'sm' | 'md' | 'lg'
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ size = 'md', className = '', children, ...props }, ref) => {
    const sizeStyles = {
      sm: 'p-1.5',
      md: 'p-2',
      lg: 'p-3',
    }

    return (
      <motion.button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-lg text-text hover:bg-base-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors ${sizeStyles[size]} ${className}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

IconButton.displayName = 'IconButton'

export default IconButton

