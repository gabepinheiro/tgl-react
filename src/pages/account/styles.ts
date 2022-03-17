import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => css`
    width: ${theme.container};
  `}


  h2 {
    margin-bottom: 2.2rem;
    span {
      text-transform: capitalize;
    }
  }

  button {
    margin-bottom: 3.2rem;
  }

  form {
    text-align: center;
  }

  @media (max-width: 468px) {
    text-align: center;
    padding-line: 3.2rem;
    padding-block: 3.2rem;
  }
`
