import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    border-top: 2px solid ${theme.colors.gray250};
  `}
`
