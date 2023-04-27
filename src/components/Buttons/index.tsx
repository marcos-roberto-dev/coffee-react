import { ReactNode } from 'react'
import { SmallButton } from './styles'
import * as Icon from 'phosphor-react'

interface ButtonProps {
  children?: ReactNode
  size?: 'small' | 'normal' | 'large'
  outline?: boolean
  variant?: 'default' | 'location' | 'shopping'
  tip?: boolean
  clickable?: boolean
}

export function Button({
  children,
  size = 'normal',
  variant = 'default',
  tip = false,
  clickable = true,
  outline = false,
}: ButtonProps) {
  const IconsComponents = {
    location: {
      Component: Icon.MapPin,
      weight: 'fill',
      size: 22,
    },
    shopping: {
      Component: Icon.ShoppingCart,
      weight: 'fill',
      size: 22,
    },
    default: {
      Component: Icon.House,
      weight: 'fill',
      size: 22,
    },
  } as const

  const { Component, ...propsIcons } = IconsComponents[variant]

  return (
    <>
      {size === 'small' && (
        <SmallButton variant={variant}>
          <Component {...propsIcons} />
          {children}
          {tip && <span>1</span>}
        </SmallButton>
      )}
    </>
  )
}
