import { Outlet } from 'react-router-dom'
import { Header } from '../header'

import * as S from './styles'

export const PrivatePage = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.MainContainer>
        <Outlet />
      </S.MainContainer>
    </S.Wrapper>
  )
}
