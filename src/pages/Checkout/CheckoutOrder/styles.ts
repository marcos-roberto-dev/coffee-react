import styled from 'styled-components'

export const CheckoutOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  > h2 {
    margin-bottom: 1rem;
  }
`
export const CheckoutHeaderContent = styled.div`
  display: flex;
  align-items: start;
  line-height: 130%;
  gap: 0.5rem;

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['--base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['--base-text']};
  }
`

export const FormCard = styled.div`
  width: 40rem;
`
export const FormInputs = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      color: ${(props) => props.theme['--yellow-dark']};
      font-size: 0.875rem;
    }
  }

  input {
    background: ${(props) => props.theme['--base-input']};
    color: ${(props) => props.theme['--base-label']};
    border: none;
    padding: 0.75rem;
    border-radius: 0.25rem;
  }

  input:nth-child(2) {
    grid-column: span 3;
  }

  input:nth-child(4) {
    grid-column: span 2;
  }
`

export const SelectedKindPayment = styled.div`
  header {
    display: flex;
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 0.75rem;

    li {
      flex: 1;
    }
  }

  > div {
    display: block;
    margin-top: 0.5rem;
    color: ${(props) => props.theme['--yellow-dark']};
  }
`
