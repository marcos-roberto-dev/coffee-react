import styled from 'styled-components'
import { defaultTheme } from '../../../styles/themes/default'

const colors = {
  shopping: defaultTheme['--yellow-dark'],
  timer: defaultTheme['--yellow'],
  package: defaultTheme['--base-text'],
  coffee: defaultTheme['--purple'],
}

interface IconWithLabelProps {
  variant: 'shopping' | 'timer' | 'package' | 'coffee'
}

export const HeroContainer = styled.section`
  margin-top: 5.875rem;
  margin-bottom: 6.75rem;
  display: flex;
  gap: 3.5rem;
  position: relative;

  > div:last-child {
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 20rem;
      height: 15rem;
      position: absolute;
      top: 4rem;
      right: 3rem;
      border-radius: 50%;
      box-shadow: -5rem 0 6rem 2rem ${(props) => props.theme['--yellow-light']};
    }

    &::after {
      content: '';
      display: block;
      width: 10rem;
      height: 10rem;
      position: absolute;
      top: 4rem;
      right: 3rem;
      border-radius: 50%;
      box-shadow: -3.5rem -0.275rem 5rem 2rem ${(props) => props.theme['--yellow']};
      z-index: -1;
    }
  }

  img {
    width: 29.75rem;
    display: block;
    position: relative;
  }
`

export const HeroTextContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 130%;
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
  }
`

export const HeroIconsContainer = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 1.25rem 2.5rem;
`

export const IconWithLabel = styled.div<IconWithLabelProps>`
  font-size: 1rem;
  line-height: 130%;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    background: ${(props) => colors[props.variant]};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
`
