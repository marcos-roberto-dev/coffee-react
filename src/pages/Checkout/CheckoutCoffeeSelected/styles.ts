import styled from 'styled-components'

export const CheckoutCoffeeSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border-radius: 0.375rem 2.25rem 0.375rem 2.25rem; */

  > h2 {
    margin-bottom: 1rem;
  }
`

export const CheckoutCoffeeListContainer = styled.div`
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  overflow: hidden;

  > div > div {
    margin-top: 1.5rem;
  }
`

export const CheckoutSeparatorItem = styled.div`
  border: 1px solid ${(props) => props.theme['--base-button']};
`

export const CheckoutAmount = styled.div`
  margin: 1.5rem 0;
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['--base-text']};
  }

  h4 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['--base-subtitle']};
  }
`
