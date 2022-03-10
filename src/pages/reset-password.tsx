import { Form } from '@/components/form'
import { Input } from '@/components/input'
import { ButtonLink } from '@/components/button-link'

import {
  AiOutlineArrowRight as ArrowRightIcon,
  AiOutlineArrowLeft as ArrowLeftIcon,
} from 'react-icons/ai'

import * as S from './styles'

function ResetPasswordPage () {
  return (
    <>
      <S.Heading size='large'>Reset password</S.Heading>
      <Form>
        <Input placeholder='Email' />

        <S.ButtonLinkWrapper>
          <ButtonLink
            as='button'
            color='greenLight'
            size='large'
          >
            Send link <ArrowRightIcon />
          </ButtonLink>
        </S.ButtonLinkWrapper>
      </Form>
      <ButtonLink
        as='button'
        size='large'
      >
        <ArrowLeftIcon /> Back
      </ButtonLink>
    </>
  )
}

export default ResetPasswordPage
