import styled, { css, DefaultTheme } from 'styled-components'

import { GameButtonProps } from '.'

type WrapperProps = Pick<GameButtonProps, 'color' | 'selected'>

const Modifiers = {
  selected: (color: string, theme: DefaultTheme) => css`
    background-color: ${color};
    color: ${theme.colors.white};
  `,
}

export const Wrapper = styled.button<WrapperProps>`
  padding: 0.8rem 2.6rem;
  border-radius: 100px;
  font-weight: bold;
  font-style: italic;
  font-size: 1.4rem;

  ${({ color, selected, theme }) => css`
    background-color: ${theme.colors.white};
    border: 2px solid ${color};
    color: ${color};

    ${selected && Modifiers.selected(color, theme)};
  `}
`
