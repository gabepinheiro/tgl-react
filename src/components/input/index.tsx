import styled, { css } from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 3.4rem 3.0rem;
  border:0;
  outline: none;

  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray300};

    &, &::placeholder {
      font-size: 1.6rem;
      color: ${theme.colors.gray400};
      font-weight: bold;
      font-style: italic;
    }

    &:focus {
      border-color: ${theme.colors.greenLight};
      &::placeholder {
        color: transparent;
      }
    }
  `}
`
