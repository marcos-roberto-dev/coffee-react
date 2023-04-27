import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

const colors = {
  location: {
    background: defaultTheme['--purple-light'],
    color: defaultTheme['--purple-dark'],
  },
  shopping: {
    background: defaultTheme['--yellow-light'],
    color: defaultTheme['--yellow-dark'],
  },
  default: {
    background: defaultTheme['--base-button'],
    color: defaultTheme['--base-text'],
  },
}

interface ButtonProps {
  variant: 'default' | 'location' | 'shopping'
}

export const BaseButton = styled.button<ButtonProps>`
  background: ${(props) => colors[props.variant].background};
  color: ${(props) => colors[props.variant].color};
  border: none;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.1s, color 0.1s;
  position: relative;

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
  }

  &:hover {
    background: ${(props) => colors[props.variant].color};
    color: ${(props) => colors[props.variant].background};
  }

  &:hover span {
    background: ${(props) => props.theme['--yellow']};
    color: ${(props) => colors[props.variant].background};
  }
`
export const SmallButton = styled(BaseButton)`
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 130%;
  gap: 0.25rem;
`
