import styled from 'styled-components'

export const ButtonInputRadioContainer = styled.div`
  flex: 1;
  display: flex;

  input {
    position: absolute;
  }

  label {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background-color: ${(props) => props.theme['--base-button']};
    border-radius: 6px;

    padding: 1rem;
    font-size: 0.75rem;
    line-height: 160%;
    text-align: center;
    cursor: pointer;
  }

  label:hover {
    background: ${(props) => props.theme['--base-hover']};
    color: ${(props) => props.theme['--base-subtitle']};
  }

  input[type='radio']:checked + label {
    background: ${(props) => props.theme['--purple-light']};
  }
`
