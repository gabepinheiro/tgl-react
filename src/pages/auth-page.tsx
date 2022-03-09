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
      <S.Heading>Authentication</S.Heading>
      <Form>
        <Input placeholder='Name' />
        <Input placeholder='Password' />

        <S.ButtonLinkWrapper>
          <ButtonLink
            as='button'
            color='greenLight'
          >
            Log In <ArrowRightIcon />
          </ButtonLink>
        </S.ButtonLinkWrapper>
      </Form>

      <ButtonLink to='/authentication'><ArrowLeftIcon /> Back</ButtonLink>
    </>
  )
}

export default AuthPage
