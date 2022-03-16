import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    border-bottom: 2px solid ${theme.colors.gray250};
  `}
  height: 10vh;
  padding: 0 1.8rem;
  z-index: 20;

  button, a {
    transition: color 0.2s ease-in-out;
  }
  button:hover, a:hover {
    color: ${({ theme }) => theme.colors.greenLight};
  }
  `

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.container};
  `}

  height: 100%;
  margin: 0 auto;
  display: flex;
  gap: 7.5rem;
  align-items: center;
  position: relative;
`

export const LogoWrapper = styled.div`
  height: 100%;

  @media (max-width: 468px) {
    position: absolute;
    left:50%;
    transform: translateX(-50%);
  }
`

export const Logo = styled.h1`
  font-style: italic;
  font-size: 4.4rem;
  padding: 0 1rem;
  width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 1.6rem;

  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 0.7rem;
    background-color: ${({ theme }) => theme.colors.greenLight};
    border-radius: 6px;
    position: absolute;
    bottom: -0.35rem;
    left:0
 }
`

export const Navigation = styled.nav`
`

export const NavItems = styled.ul`
  list-style: none;
`

export const NavItem = styled.li``

export const Actions = styled.section`
  display: flex;
  gap: 4.0rem;
`

export const MenuFull = styled.menu<{isOpen: boolean}>`
  ${({ theme, isOpen }) => css`
    background-color: ${theme.colors.white};

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    height: 100vh;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    visibility: ${isOpen ? 'visible' : 'hidden'};

    ${Actions} {
      margin-top: 12rem;
      flex-direction: column;
      gap: 1.6rem;
    }
  `}
`

export const Desktop = styled.div`
  display: none;

  @media (min-width: 468px) {
    display: block;
  }
`

export const Mobile = styled.div`
  display: block;
  cursor: pointer;

  @media (min-width: 468px) {
    display: none;
  }
`

export const IconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top:0;
  left: 0;
  margin: 1.8rem;
`
