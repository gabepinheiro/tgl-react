import styled, { css } from 'styled-components'

type WrapperProps = {
  color: string
  size: 'medium' | 'large'
}

const Modifiers = {
  medium: () => css`
    font-size: 1.6rem;
    padding: 1rem 1.2rem;
    border-left: 4px solid currentColor;

    ${GameCardContent} {
      gap: 0.6rem;
    }
  `,
  large: () => css`
    padding-left: 1.5rem;
    font-size: 2.0rem;
    border-left: 6px solid currentColor;
  `,
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ color, size }) => css`
    color: ${color};
    border-radius: 4px 0 0 4px;

    ${!!size && Modifiers[size]}
  `}
`

export const GameCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const GameName = styled.p`
  font-weight: bold;
  font-style: italic;
  color: currentColor;
`

export const GameNumbers = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    font-weight: bold;
    font-style: italic;
  `}
`

const mixin = css`
  color: ${({ theme }) => theme.colors.gray500};
`

export const GameDate = styled.span`
  ${mixin};
`

export const GameAmount = styled.span`
  ${mixin};
`
