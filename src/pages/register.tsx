import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '@/services/api'
import axios from 'axios'

import { Form } from '@/components/form'
import { Input } from '@/components/input'
import { ButtonLink } from '@/components/button-link'

import {
  AiOutlineArrowRight as ArrowRightIcon,
  AiOutlineArrowLeft as ArrowLeftIcon,
} from 'react-icons/ai'
import { toast } from 'react-toastify'

import * as S from './styles'

type OnSubmitEvent = FormEvent<HTMLFormElement> & {
  currentTarget: {
    name: HTMLInputElement,
    email: HTMLInputElement,
    password: HTMLInputElement
  }
}

function RegisterPage () {
  const navigate = useNavigate()

  const handleSubmit = async (e: OnSubmitEvent) => {
    e.preventDefault()
    const { name, email, password } = e.currentTarget

    try {
      const res = await api.post('/user/create', {
        name: name.value,
        email: email.value,
        password: password.value,
      })

      toast.success('Registro realizado com sucesso!', {
        onClose: () => {
          navigate('/authentication')
        },
      })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error.message)
      }
    }
  }

  return (
    <>
      <S.Heading size='large'>Registration</S.Heading>
      <Form onSubmit={handleSubmit}>
        <Input type='text' placeholder='Name' id='name' />
        <Input type='email' placeholder='Email' id='email' />
        <Input type='password' placeholder='Password' id='password' />

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
