import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode,
} from 'react'

import { To } from 'react-router-dom'

import { ButtonLinkStyled } from './styles'

type ButtonLinkTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type Props = {
  children: ReactNode
  color?: 'black' | 'greenLight'
  size?: 'medium' | 'large'
  as?: ElementType
  to?: To
} & ButtonLinkTypes

export const ButtonLink = ({
  children,
  color = 'black',
  size = 'medium',
  ...props
}: Props) => {
  return (
    <ButtonLinkStyled
      as={!props.to ? 'button' : props.as}
      color={color}
      size={size}
      {...props}
    >
      {children}
    </ButtonLinkStyled>
  )
}
