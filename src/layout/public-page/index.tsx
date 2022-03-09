import { Outlet } from 'react-router-dom'

import * as S from './styles'

const PublicPage = () => {
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

export default PublicPage
