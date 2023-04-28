import styled from 'styled-components'

export const CheckoutOrderContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  > h2 {
    margin-bottom: 1rem;
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
  }
`