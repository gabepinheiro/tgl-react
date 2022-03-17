import styled, { css } from 'styled-components'

export const Form = styled.form`
  width: 100%;
  box-shadow: 0px 3px 25px #00000014;
  border-radius: 1.4rem;
  overflow: hidden;

  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray300};
  `}

  a {
    text-decoration: none;
    display: block;
    text-align: right;
    margin: 2.6rem 2rem 0 0;
    font-style: italic;
    color: #C1C1C1;
    font-size: 1.7rem;
  }

  button {
    margin: 4.4rem 0;
  }

  @media (min-width: 398px) {
    width: 352px;
  }

`
