import { MouseEvent } from 'react'
import { Form } from '@/components/form'
import { Input } from '@/components/input'
import { ButtonLink } from '@/components/button-link'

import {
  AiOutlineArrowRight as ArrowRightIcon,
  AiOutlineArrowLeft as ArrowLeftIcon,
} from 'react-icons/ai'

import * as S from './styles'

function RegisterPage () {
  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Submit form!')
  }

  return (
    <>
      <S.Heading size='large'>Registration</S.Heading>
      <Form onSubmit={handleSubmit}>
        <Input placeholder='Name' />
        <Input placeholder='Email' />
        <Input placeholder='Password' />

        <S.ButtonLinkWrapper>
          <ButtonLink
            as='button'
            color='greenLight'
            size='large'
          >
            Register <ArrowRightIcon />
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

export default RegisterPage
