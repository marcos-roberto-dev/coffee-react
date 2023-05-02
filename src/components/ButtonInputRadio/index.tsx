import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

import { ButtonInputRadioContainer } from './styles'

interface ButtonInputRadioProps {
  children: ReactNode
  idLabel: string
  value: string
  registerName: string
}

export function ButtonInputRadio({
  children,
  idLabel,
  registerName,
  value,
}: ButtonInputRadioProps) {
  const { register } = useFormContext()
  return (
    <ButtonInputRadioContainer>
      <input
        type="radio"
        id={idLabel}
        value={value}
        {...register(registerName)}
        style={{ visibility: 'hidden' }}
      />
      <label htmlFor={idLabel}>{children}</label>
    </ButtonInputRadioContainer>
  )
}
