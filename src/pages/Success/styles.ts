import styled from 'styled-components'

export const SuccessPageContainer = styled.main`
  * {
    line-height: 130%;
  }

  margin-top: 5rem;
  color: ${(props) => props.theme['--base-text']};

  img {
    height: 293px;
  }
  ul {
    border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;

    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
      border: 1px solid transparent;
      background: linear-gradient(120deg, #dbac2c, #8047f8) border-box;
      mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }
  }
  li {
    display: flex;
    gap: 0.75rem;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme['--yellow-dark']};
  }

  p {
    font-size: 1.25rem;
  }
`
export const SuccessPageInformation = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 32.875rem 30.75rem;
  align-items: start;
  justify-content: space-between;
`
