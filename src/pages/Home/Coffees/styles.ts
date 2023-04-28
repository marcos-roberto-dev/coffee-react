import styled from 'styled-components'

export const CoffeesContainer = styled.section`
  margin-bottom: 9.8125rem;
  overflow: hidden;
  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
  }
`

export const CoffeeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  gap: 2.5rem 2rem;
  margin-top: 3.375rem;
`

export const CoffeItem = styled.div`
  width: 16rem;
  background: ${(props) => props.theme['--base-card']};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 1.25rem;
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;

  img {
    width: 7.5rem;
    position: absolute;
    top: -1rem;
  }
`

export const CoffeContentText = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
    margin-top: 1rem;
  }

  span {
    line-height: 130%;
    text-align: center;
  }

  span:first-child {
    background: ${(props) => props.theme['--yellow-light']};
    color: ${(props) => props.theme['--yellow-dark']};
    font-size: 0.625rem;
    padding: 0.25rem 0.5rem;
    border-radius: 5rem;
    font-weight: bold;
  }

  span:last-child {
    margin-top: 0.5rem;
    color: ${(props) => props.theme['--base-label']};
    font-size: 0.875rem;
    line-height: 130%;
  }
`
export const CoffeFooter = styled.footer`
  display: flex;
  margin-top: 2.0625rem;
  gap: 1.4375rem;
  align-items: center;
`
export const CoffeePrice = styled.div`
  span {
    font-size: 0.875rem;
  }
  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: bolder;
  }
`

export const CoffeeControlShip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    background: transparent;
    width: 100%;
    border: 0;
    outline: none;
    text-align: center;
    font-weight: bold;
  }

  button {
    background: none;
    border: none;
    outline: none;
    display: flex;
    cursor: pointer;
    color: ${(props) => props.theme['--purple-dark']};
  }

  > button:last-child {
    background-color: ${(props) => props.theme['--purple-dark']};
    color: ${(props) => props.theme['--white']};
    padding: 0.5rem;
    border-radius: 0.375rem;
  }

  div:first-child {
    background-color: ${(props) => props.theme['--base-button']};
    display: flex;
    gap: 0.25rem;
    align-items: center;
    padding: 0.75rem 0.5rem;
    justify-content: space-between;
    width: 4.5rem;
    height: 2.375rem;
    border-radius: 0.375rem;
  }
`
