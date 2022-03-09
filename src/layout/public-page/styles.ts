import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.container};
  `}

  margin: 0 auto;
  display: flex;
  height: 90vh;

  & > * {
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > *:last-child {
    flex-direction: column;
    gap: 2.6rem;
  }
`

export const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 6.5rem;
  font-style: italic;
  font-weight: bold;

  span.text-lottery {
    text-transform: uppercase;
    font-size: 8.3rem;
  }

  ${({ theme }) => css`
    span.text-for {
      color: white;
      background-color: ${theme.colors.greenLight};
      border-radius: 100px;
      padding: 0.6rem 5.6rem;
      font-size: 2.2rem;
      margin-top: 3.0rem;
      margin-bottom: 2.0rem;
    }
  `}
`

export const Box = styled.section``
