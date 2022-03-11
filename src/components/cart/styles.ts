import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  border-radius: 1.0rem;
  overflow-wrap: break-word;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray200};
    border: 1px solid #E2E2E2;
  `}
`

export const Heading = styled.h2`
  font-size: 2.4rem;
  font-style: italic;
  text-transform: uppercase;
`

export const Content = styled.div`
  border-radius: 1.0rem 1.0rem 0 0;
  padding: 3.2rem 2.0rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`

export const TotalAmount = styled.h3`
  font-size: 2.4rem;
  margin-top: 4rem;
  text-transform: uppercase;
  font-style: italic;

  span {
    font-weight: 300;
    font-style: normal;
  }
`

export const ButtonSaveWrapper = styled.div`
  width: max-content;
  margin: 2.7rem auto;

  button {
    ${({ theme }) => css`
      color: ${theme.colors.green};
    `}
  }
`
