import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  position: sticky;
  top: 0;
  background: ${(props) => props.theme['--background']};
  z-index: 2;

  img {
    height: 2.625rem;
  }
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`
