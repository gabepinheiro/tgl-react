import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  min-height: 90vh;
`

export const MainContainer = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.container};
    margin: 7.2rem auto;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`
