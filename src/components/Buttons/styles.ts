import styled, { css } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const colors = {
  purpleLight: {
    background: defaultTheme['--purple-light'],
    color: defaultTheme['--purple-dark'],
    hover: {
      background: defaultTheme['--purple-dark'],
      color: defaultTheme['--purple-light'],
    },
  },
  yellowLight: {
    background: defaultTheme['--yellow-light'],
    color: defaultTheme['--yellow-dark'],
    hover: {
      background: defaultTheme['--yellow-dark'],
      color: defaultTheme['--yellow-light'],
    },
  },
  yellow: {
    background: defaultTheme['--yellow'],
    color: defaultTheme['--white'],
    hover: {
      background: defaultTheme['--yellow-dark'],
      color: defaultTheme['--white'],
    },
  },
  default: {
    background: defaultTheme['--base-button'],
    color: defaultTheme['--base-text'],
    hover: {
      background: defaultTheme['--base-hover'],
      color: defaultTheme['--base-subtitle'],
    },
  },
}

export interface ButtonPropsStyle {
  variant: 'purpleLight' | 'yellowLight' | 'yellow' | 'default'
  clickable: boolean
  active: boolean
}

export const BaseButton = styled.button<ButtonPropsStyle>`
  background: ${(props) => colors[props.variant].background};
  color: ${(props) => colors[props.variant].color};
  border: none;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: cursor;
  transition: background 0.1s, color 0.1s;
  position: relative;
  width: 100%;

  ${(props) =>
    props.active &&
    css`
      border: ${1}px solid ${props.theme['--purple']};
      background: ${props.theme['--purple-light']};
    `}

  ${(props) =>
    props.clickable &&
    css`
      cursor: pointer;
      &:hover {
        background: ${colors[props.variant].hover.background};
        color: ${colors[props.variant].hover.color};
      }
      &:hover span {
        background: ${colors[props.variant].background};
        color: ${colors[props.variant].color};
      }
    `}

  span {
    background: ${(props) => colors[props.variant].color};
    color: ${(props) => colors[props.variant].background};
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    transition: background 0.1s, color 0.1s;
    font-size: 0.75rem;
    font-weight: bold;
  }
`
export const SmallButton = styled(BaseButton)`
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 130%;
  gap: 0.25rem;
`

export const NormalButton = styled(BaseButton)`
  padding: 0.75rem;
  font-size: 0.875rem;
  line-height: 160%;
  gap: 0.75rem;
  text-align: center;
  font-weight: bold;
`

export const LargeButton = styled(BaseButton)`
  padding: 1rem;
  font-size: 0.75rem;
  line-height: 160%;
  gap: 0.75rem;
  text-align: center;
`
