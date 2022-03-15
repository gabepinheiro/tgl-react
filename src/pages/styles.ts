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
  font-style: italic;

  & > span {
    font-weight: 300;
  }

  ${({ size = 'medium', upcase = false }) => css`
    ${!!size && HeadingModifiers[size]}
    ${upcase && HeadingModifiers.upcase()}
  `}
`

export const ButtonLinkWrapper = styled.div`
  width: max-content;
  padding: 3.4rem;
  margin: 0 auto;
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: ${theme.container};
  `}

  display: grid;
  grid-template-columns: max-content minmax(auto, 1fr) 335px;
  grid-gap: 5.0rem;
`

export const Box = styled.div`
   &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    overflow: hidden;
  }

  &::-webkit-scrollbar-thumb {
    display: inline-block;
    background: #ADC0C4;
    border-radius: 0.4rem;
  }
`

export const Text = styled.p``
