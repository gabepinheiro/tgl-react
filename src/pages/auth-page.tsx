import { FormEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { login, selectAuth, setIsFetching, setError } from '@/features/auth-slice'
import { toast } from 'react-toastify'

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

  useEffect(() => {
    if (user) {
      toast.success(`Seja bem vindo, ${user.name}`)
      dispatch(setIsFetching(false))
      navigate('/')
    }
  }, [user, dispatch, navigate])

  useEffect(() => {
    if (error) {
      toast.error(`${error.message}`, {
        onClose () {
          dispatch(setError(null))
          dispatch(setIsFetching(false))
        },
      })
    }
  }, [error, dispatch])

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
            disabled={isFetching}
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
