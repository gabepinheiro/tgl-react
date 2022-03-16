import styled, { css } from 'styled-components'

export const ButtonLinkWrapper = styled.div`
  width: max-content;
  padding: 3.4rem;
  margin: 0 auto;
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: ${theme.container};
  `}

  @media (min-width: 468px) {
  }
`

export const ContainerRecentGames = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2.4rem;

  @media (max-width: 468px) {
    .heading {
      margin-top: 2.4rem;
      margin-bottom: 2.4rem;
    }
  }


  @media (min-width: 468px) {
    flex-direction: row;

    & .link-newbet {
      margin-left: auto;
    }

    .heading {
      margin-right: 4.5rem;
    }

    .filterTitle {
      margin-right: 1.6rem;
    }
  }

`

export const ContainerGameButtons = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GameButtonsWrapper = styled.div`
  width: 80rem;
  display: flex;
  gap: 0.8rem;
  overflow-x: scroll;
  padding-bottom: 1rem;
  align-items: center;

  @media (max-width: 468px) {
    margin-bottom: 2.4rem;
  }

  @media (max-width: 468px) {
    justify-content: center;
    width: 100vw;
  }
  `

export const ContainerBets = styled.div`
  margin-top: 4 rem;
  display: flex;
  flex-direction: column;
  gap: 3.0rem;
  height: 45vh;
  overflow-y: scroll;

  text-align: center;
  @media (min-height: 980px) {
    height: 60vh;
    text-align: unset;
  }
`
