import styled, { css } from 'styled-components'

type HeadingProps = {
  size?: 'medium' | 'large'
  upcase?: boolean
}

const HeadingModifiers = {
  medium: () => css`
    font-size: 2.4rem;
  `,
  large: () => css`
    font-size: 3.5rem;
  `,
  upcase: () => css`
    text-transform: uppercase;
  `,
}

export const Heading = styled.h2<HeadingProps>`
  ${({ size = 'medium', upcase = false }) => css`
    ${!!size && HeadingModifiers[size]}
    ${upcase && HeadingModifiers.upcase()}
  `}
  font-style: italic;
`

export const ButtonLinkWrapper = styled.div`
  width: max-content;
  padding: 3.4rem;
  margin: 0 auto;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: max-content 2fr 1fr;
  grid-gap: 4.5rem;
`

export const Box = styled.div``

export const Text = styled.p``
