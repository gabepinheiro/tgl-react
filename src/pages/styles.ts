import styled, { css } from 'styled-components'

type HeadingProps = {
  size?: 'medium' | 'large'
}

const HeadingModifiers = {
  medium: () => css`
    font-size: 2.4rem;
  `,
  large: () => css`
    font-size: 3.5rem;
  `,
}

export const Heading = styled.h2<HeadingProps>`
  ${({ size = 'medium' }) => css`
    ${!!size && HeadingModifiers[size]}
  `}
  font-style: italic;
`

export const ButtonLinkWrapper = styled.div`
  width: max-content;
  padding: 3.4rem;
  margin: 0 auto;
`
