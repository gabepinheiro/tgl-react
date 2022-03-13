import { selectAuth } from '@/features/auth-slice'
import { useAppSelector } from '@/store/hooks'
import { Outlet, Navigate } from 'react-router-dom'
import { Header } from '../header'

import * as S from './styles'

export const PrivatePage = () => {
  const { isAuthenticated } = useAppSelector(selectAuth)

  const tokenFromLocalStorage = localStorage.getItem('@tgl/authentication')
  if (!tokenFromLocalStorage && !isAuthenticated) {
    return <Navigate to='/authentication' />
  }

  return (
    <S.Wrapper>
      <Header />
      <S.MainContainer>
        <Outlet />
      </S.MainContainer>
    </S.Wrapper>
  )
}
