import { ReactNode } from 'react'

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

export interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
  className?: string
}

const Badge = ({ variant = 'default', children, className = '' }: BadgeProps) => {
  const variantStyles = {
    default: 'bg-base-light text-text border-border',
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border-secondary/20',
    success: 'bg-status-success/10 text-status-success border-status-success/20',
    warning: 'bg-status-warning/10 text-status-warning border-status-warning/20',
    danger: 'bg-status-danger/10 text-status-danger border-status-danger/20',
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge

