import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
`

export const MainContainer = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.container};
    margin: 7.2rem auto;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 468px) {
      margin: 3.8rem auto;
    }
  `}
`
