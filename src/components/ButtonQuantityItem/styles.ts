import styled from 'styled-components'

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
