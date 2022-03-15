import styled, { css } from 'styled-components'

export const Form = styled.form`
  width: 100%;
  box-shadow: 0px 3px 25px #00000014;
  border-radius: 1.4rem;
  overflow: hidden;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray300};
  `}

  @media (min-width: 398px) {
    width: 352px;
  }

`
