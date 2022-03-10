import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'color' |'variant'>

const Modifiers = {
  color: {
    green: (theme: DefaultTheme) => css`
      background-color: ${theme.colors.green};
    `,
  },
  variant: {
    outline: () => css`
      background-color: transparent;
      border: 1px solid currentColor;
    `,
  },
}

export const Wrapper = styled.button<WrapperProps>`
  border:0;
  border-radius:10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2.8rem;
  padding: 1.6rem 2.6rem;
  font-size: 1.6rem;
  font-weight: bold;

  ${({ theme, color, variant }) => css`
    color: ${variant
      ? theme.colors[color!]
      : theme.colors.white};

    ${!!color && Modifiers.color[color](theme)};
    ${!!variant && Modifiers.variant[variant]};

    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateY(-4px);
    }
    &:active {
      transform: translateY(-1px);
    }
  `}
`
