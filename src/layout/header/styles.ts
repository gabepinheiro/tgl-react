import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    border-bottom: 2px solid ${theme.colors.gray250};
  `}
  height: 8.0rem;

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
    height: 100%;
    margin: 0 auto;
    display: flex;
    gap: 7.5rem;
    align-items: center;
  `}
`

export const Logo = styled.h1`
  color: var(--text-title);
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
  margin-left: auto;
`
