import { ReactNode, ButtonHTMLAttributes } from 'react'

import { LargeButton, NormalButton, SmallButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  size?: 'small' | 'normal' | 'large'
  active?: boolean
  variant?: 'default' | 'purpleLight' | 'yellowLight' | 'yellow'
  tip?: boolean
  clickable?: boolean
  contentTip?: number
}

export function Button({
  children,
  size = 'normal',
  variant = 'default',
  tip = false,
  clickable = true,
  active = false,
  contentTip,
  ...rest
}: ButtonProps) {
  return (
    <>
      {size === 'small' && (
        <SmallButton
          variant={variant}
          clickable={clickable}
          active={active}
          {...rest}
        >
          {children}
          {tip && <span>{contentTip}</span>}
        </SmallButton>
      )}
      {size === 'normal' && (
        <NormalButton
          variant={variant}
          clickable={clickable}
          active={active}
          {...rest}
        >
          {children}
          {tip && <span>{contentTip}</span>}
        </NormalButton>
      )}
      {size === 'large' && (
        <LargeButton
          variant={variant}
          clickable={clickable}
          active={active}
          {...rest}
        >
          {children}
          {tip && <span>{contentTip}</span>}
        </LargeButton>
      )}
    </>
  )
}
