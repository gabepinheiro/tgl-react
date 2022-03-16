import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.container};
  `}

  min-height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding:3.2rem;
  gap: 6rem;
  text-align: center;

  & > * {
    display: flex;
  }
  & > *:last-child {
    flex-direction: column;
    gap: 2.6rem;
  }

  @media (min-width: 468px) {
    height: 90vh;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    & > * {
      width: 100%;
      height: 100%;
      flex: 1;
      justify-content: center;
      align-items: center;
    }
  }
`

export const Heading = styled.h1`
   font-size: 3.5rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   font-style: italic;
   font-weight: bold;

   span.text-lottery {
    text-transform: uppercase;
    font-size: 5.2rem;
  }

  ${({ theme }) => css`
    span.text-for {
      color: white;
      background-color: ${theme.colors.greenLight};
      border-radius: 100px;
      padding: 0.6rem 5.6rem;
      font-size: 2.2rem;
      margin-top: 2rem;
      margin-bottom: 1.2rem;
    }
  `}

  @media (min-width: 398px) {
    font-size: 6.5rem;
    span.text-lottery {
      font-size: 8.3rem;
    }
  }
`

export const Box = styled.section``
