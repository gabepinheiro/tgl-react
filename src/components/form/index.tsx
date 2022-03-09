import styled, { css } from 'styled-components'

export const Form = styled.form`
  box-shadow: 0px 3px 25px #00000014;
  border-radius: 1.4rem;
  overflow: hidden;

  width: 352px;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray300};
  `}
`
