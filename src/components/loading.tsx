import styled, { css, keyframes } from 'styled-components'

const loadAnimate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Loading = styled.div`
  ${({ theme }) => css`
    border: 6px solid ${theme.colors.gray250};
    border-radius: 50%;
    border-top: 6px solid ${theme.colors.green};
    width: 100px;
    height: 100px;
    animation: ${loadAnimate} 0.8s linear infinite;
  `}
`
