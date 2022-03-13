import { FormEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { login, selectAuth } from '@/features/auth-slice'

import { Form } from '@/components/form'
import { Input } from '@/components/input'
import { ButtonLink } from '@/components/button-link'

import {
  AiOutlineArrowRight as ArrowRightIcon,
  AiOutlineArrowLeft as ArrowLeftIcon,
} from 'react-icons/ai'

import * as S from './styles'

type OnSubmitEvent = FormEvent<HTMLFormElement> & {
  currentTarget: {
    email: HTMLInputElement
    password: HTMLInputElement
  }
}

function AuthPage () {
  const { user, isFetching, error } = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  console.log(user)

  useEffect(() => {
    if (user) {
      return navigate('/')
    }
  }, [user, navigate])

  useEffect(() => {
    if (error && !isFetching) {
      return alert(error.message)
    }
  }, [error, isFetching])

  const handleSubmit = (e: OnSubmitEvent) => {
    e.preventDefault()
    const { email, password } = e.currentTarget

    dispatch(login({
      email: email.value,
      password: password.value,
    }))
  }

  return (
    <>
      <S.Heading size='large'>Authentication</S.Heading>
      <Form onSubmit={handleSubmit}>
        <Input type='email' placeholder='Email' name='email' />
        <Input type='password' placeholder='Password' name='password' />

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
