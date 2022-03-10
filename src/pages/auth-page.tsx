import { Form } from '@/components/form'
import { Input } from '@/components/input'
import { ButtonLink } from '@/components/button-link'

import {
  AiOutlineArrowRight as ArrowRightIcon,
  AiOutlineArrowLeft as ArrowLeftIcon,
} from 'react-icons/ai'

import * as S from './styles'

function AuthPage () {
  return (
    <>
      <S.Heading size='large'>Authentication</S.Heading>
      <Form>
        <Input placeholder='Name' />
        <Input placeholder='Password' />

        <S.ButtonLinkWrapper>
          <ButtonLink
            as='button'
            color='greenLight'
            size='large'
          >
            Log In <ArrowRightIcon />
          </ButtonLink>
        </S.ButtonLinkWrapper>
      </Form>

      <ButtonLink
        to='/authentication'
        size='large'
      >
        <ArrowLeftIcon /> Back
      </ButtonLink>
    </>
  )
}

export default AuthPage
