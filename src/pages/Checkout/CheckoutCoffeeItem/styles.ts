import styled from 'styled-components'

export const CheckoutCoffeeItemContainer = styled.li`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
  }

  span {
    line-height: 130%;
    font-weight: bold;
  }

  & ~ div {
    margin: 3rem 0;
  }
`

export const CheckoutCoffeeItemControl = styled.div`
  display: flex;
  gap: 0.5rem;
`
