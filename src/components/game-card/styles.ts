import styled, { css } from 'styled-components'

type WrapperProps = {
  color: string
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ color }) => css`
    color: ${color};
    border-left: 6px solid ${color};
    border-radius: 4px 0 0 4px;
    padding-left: 1.5rem;
    font-size: 2.0rem;
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
  font-size: 2.0rem;
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
  font-size: 1.7rem;
`

export const GameDate = styled.span`
  ${mixin};
`

export const GameAmount = styled.span`
  ${mixin};
`
