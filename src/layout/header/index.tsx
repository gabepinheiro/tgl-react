import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store/hooks'
import { logout } from '@/features/auth-slice'
import { toggleCartOpen } from '@/features/ui-slice'

import { ButtonLink } from '@/components/button-link'
import { CustomLink } from '@/components/custom-link'

import {
  AiOutlineArrowRight as ArrowRightIcon,
  AiOutlineMenu as MenuIcon,
} from 'react-icons/ai'
import { GrClose as CloseIcon } from 'react-icons/gr'
import { BsFillCartFill as CartIcon } from 'react-icons/bs'

import * as S from './styles'

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

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
                <CustomLink to='/'>Home</CustomLink>
              </S.NavItem>
            </S.NavItems>
          </S.Navigation>
        </S.Desktop>

        <S.Desktop style={{
          marginLeft: 'auto',
        }}
        >
          <S.Actions>
            <CustomLink to='/account'>Account</CustomLink>
            <ButtonLink
              onClick={handleLogout}
            >
              Log out <ArrowRightIcon />
            </ButtonLink>
          </S.Actions>
        </S.Desktop>

        <S.Mobile>
          <CartIcon
            className='cart-icon'
            size={27}
            onClick={() => dispatch(toggleCartOpen())}
          />
        </S.Mobile>

      </S.Container>
      <S.Mobile>
        <S.MenuFull aria-hidden={!isOpenMenu} isOpen={isOpenMenu}>
          <S.IconWrapper onClick={handleToggleOpenMenu}>
            <CloseIcon size={24} />
          </S.IconWrapper>
          <S.Navigation>
            <S.NavItems>
              <S.NavItem>
                <CustomLink to='/' onClick={handleToggleOpenMenu}>Home</CustomLink>
              </S.NavItem>
            </S.NavItems>
          </S.Navigation>
          <S.Actions>
            <CustomLink to='/account'>Account</CustomLink>
            <ButtonLink
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
