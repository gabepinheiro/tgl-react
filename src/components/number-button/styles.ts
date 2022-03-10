import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 50%;
  border:0;
  font-size: 2.0rem;
  font-weight: bold;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: #ADC0C4;
  `}
`
