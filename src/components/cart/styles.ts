import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  max-width: 335px;
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
  margin-bottom: 3.5rem;
`

export const Content = styled.div`
  border-radius: 1.0rem 1.0rem 0 0;
  padding: 3.2rem 2.0rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`

export const CartItems = styled.ul`
  list-style: none;
  max-height: 350px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.4rem;
    overflow: hidden;
  }

  &::-webkit-scrollbar-thumb {
    background: #ADC0C4;
    border-radius: 0.4rem;
  }
`

export const CartItem = styled.li`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  overflow-wrap: break-word;
  &:not(:last-child) {
    margin-bottom: 3.2rem;
  }
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

export const ButtonDelete = styled.button`
  border: 0;
  background-color: transparent;

  svg {
    color: #868686;
  }

  &:hover {
    svg {
      color: red;
    }
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

export const GameNameAmountWrapper = styled.div`
  display: flex;
  gap: 1.4rem;
`
