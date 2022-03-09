import { ButtonLink } from '@/components/button-link'

import {
  AiOutlineArrowRight as ArrowRightIcon,
} from 'react-icons/ai'

import * as S from './styles'

export const Header = () => {
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
          <ButtonLink as='button'>Log out <ArrowRightIcon /></ButtonLink>
        </S.Actions>
      </S.Container>
    </S.Wrapper>
  )
}
