'use client'

import Link, { LinkProps } from 'next/link'
import { motion } from 'framer-motion'
import { ButtonVariant, ButtonSize } from './Button'

export interface LinkButtonProps extends Omit<LinkProps, 'href'> {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

const LinkButton = ({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: LinkButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantStyles = {
    primary:
      'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary:
      'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    ghost: 'text-primary hover:bg-base-light focus:ring-primary',
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </Link>
    </motion.div>
  )
}

export default LinkButton

