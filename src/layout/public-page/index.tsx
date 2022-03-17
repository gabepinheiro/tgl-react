import { Outlet, Navigate, useLocation } from 'react-router-dom'

import * as S from './styles'

export const PublicPage = () => {
  const location = useLocation()

  const tokenFromLocalStorage = localStorage.getItem('@tgl/authentication')
  if (location.pathname === '/authentication') {
    if (tokenFromLocalStorage) {
      return <Navigate to='/' />
    }
  }

  return (
    <S.Container>
      <S.Box>
        <S.Heading>
          <span>The</span>
          <span>Greatest</span>
          <span>App</span>
          <span className='text-for'>for</span>
          <span className='text-lottery'>Lottery</span>
        </S.Heading>
      </S.Box>
      <S.Box>
        <Outlet />
      </S.Box>
    </S.Container>
  )
}
