import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => css`
    width: ${theme.container};
  `}

  margin-top: 3.8rem;


  @media (min-width: 468px) {
    display: flex;
    gap: 50px;

    & > *:first-child {
      flex: 1;
    }

    & > *:last-child {
      flex: max-content 0 0;
    }
  }
`

export const ContainerNewBet = styled.div`
  @media (max-width: 468px) {
    text-align: center;
  }
`

export const ContainerChooseGame = styled.div`
  margin-top: 3.3rem;
  margin-bottom: 2.4rem;
`

export const ContainerGameButtons = styled.div`
  display: flex;
  gap: 1.8rem;
  overflow-x: scroll;
  padding-bottom: 1rem;
  width: 1000px;

  @media (max-width: 468px) {
    justify-content: center;
    width: 100vw;
  }
`

export const BetDescription = styled.div`
  margin-bottom: 2.6rem;

  @media (max-width: 468px) {
    padding: 0 2.4rem;
  }
`

export const ContainerNumbers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 4.0rem;

  @media (max-width: 468px) {
    overflow-y: scroll;
    height: 33vh;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;

  @media (min-width: 468px){
    .btn-add-to-cart {
      margin-left: auto;
    }
  }

  @media (max-width: 468px) {
    justify-content: center;
  }
`

export const ContainerCart = styled.div`
  width: 100%;
  display: none;

  @media (min-width: 468px) {
    display: block;
  }
`
