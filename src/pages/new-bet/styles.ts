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

export const ContainerCart = styled.div<{isCartOpen: boolean}>`
  ${({ isCartOpen }) => css`
    @media (max-width: 468px) {
      width: 100%;
      height: 100%;
      visibility: ${isCartOpen ? 'visible' : 'hidden'};
      display: ${isCartOpen ? 'block' : 'none'};
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      .close-cart {
        border: 0;
        background-color: transparent;
        outline: none;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        margin: 1.6rem;
        color: red;
        z-index: 999;
      }
    }
  `}

  @media (min-width: 468px) {
    display: block;
    .close-cart {
      display: none;
    }
  }
`
