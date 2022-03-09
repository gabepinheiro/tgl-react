import { ReactNode } from 'react'
import { Header } from '../header'

import * as S from './styles'

type PrivatePageProps = {
  element: ReactNode
}

export const PrivatePage = ({ element }: PrivatePageProps) => {
  return (
    <S.Wrapper>
      <Header />
      {element}
    </S.Wrapper>
  )
}
