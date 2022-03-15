import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store/hooks'

import { ButtonLink } from '@/components/button-link'
import { logout } from '@/features/auth-slice'

import {
  AiOutlineArrowRight as ArrowRightIcon,
} from 'react-icons/ai'

import * as S from './styles'

export const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('@tgl/authentication')
    dispatch(logout())
    navigate('/authentication')
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo>TGL</S.Logo>
        <S.Navigation>
          <S.NavItems>
            <S.NavItem>
              <ButtonLink to='/'>Home</ButtonLink>
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
      </S.Container>
    </S.Wrapper>
  )
}
