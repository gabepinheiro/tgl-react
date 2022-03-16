import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store/hooks'
import { logout } from '@/features/auth-slice'

import { ButtonLink } from '@/components/button-link'

import {
  AiOutlineArrowRight as ArrowRightIcon,
  AiOutlineMenu as MenuIcon,
} from 'react-icons/ai'
import { GrClose as CloseIcon } from 'react-icons/gr'

import * as S from './styles'

export const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleToggleOpenMenu = () => {
    setIsOpenMenu(state => !state)
  }

  const handleLogout = () => {
    localStorage.removeItem('@tgl/authentication')
    dispatch(logout())
    navigate('/authentication')
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Mobile>
          <MenuIcon size={24} onClick={handleToggleOpenMenu} />
        </S.Mobile>
        <S.LogoWrapper>
          <S.Logo>TGL</S.Logo>
        </S.LogoWrapper>

        <S.Desktop>
          <S.Navigation>
            <S.NavItems>
              <S.NavItem>
                <ButtonLink to='/'>Home</ButtonLink>
              </S.NavItem>
            </S.NavItems>
          </S.Navigation>
        </S.Desktop>

        <S.Desktop style={{
          marginLeft: 'auto',
        }}
        >
          <S.Actions>
            <ButtonLink to='/account'>Account</ButtonLink>
            <ButtonLink
              as='button'
              onClick={handleLogout}
            >
              Log out <ArrowRightIcon />
            </ButtonLink>
          </S.Actions>
        </S.Desktop>

      </S.Container>
      <S.Mobile>
        <S.MenuFull aria-hidden={!isOpenMenu} isOpen={isOpenMenu}>
          <S.IconWrapper onClick={handleToggleOpenMenu}>
            <CloseIcon size={24} />
          </S.IconWrapper>
          <S.Navigation>
            <S.NavItems>
              <S.NavItem>
                <ButtonLink to='/' onClick={handleToggleOpenMenu}>Home</ButtonLink>
              </S.NavItem>
            </S.NavItems>
          </S.Navigation>
          <S.Actions>
            <ButtonLink to='/account'>Account</ButtonLink>
            <ButtonLink
              as='button'
              onClick={handleLogout}
            >
              Log out <ArrowRightIcon />
            </ButtonLink>
          </S.Actions>
        </S.MenuFull>
      </S.Mobile>
    </S.Wrapper>
  )
}
