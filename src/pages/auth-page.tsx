import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { login, selectAuth, setIsFetching, setError } from '@/features/auth-slice'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'

import { Form } from '@/components/form'
import { Input } from '@/components/input'
import { ButtonLink } from '@/components/button-link'

import {
  AiOutlineArrowRight as ArrowRightIcon,
  AiOutlineArrowLeft as ArrowLeftIcon,
} from 'react-icons/ai'

import * as S from './styles'

type FormInputs = {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().email().required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
}).required()

function AuthPage () {
  const { user, isFetching, error: errorAuth } = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    if (user) {
      toast.success(`Seja bem vindo, ${user.name}`)
      dispatch(setIsFetching(false))
      navigate('/')
    }
  }, [user, dispatch, navigate])

  useEffect(() => {
    if (errorAuth) {
      toast.error(`${errorAuth.message}`, {
        onClose () {
          dispatch(setError(null))
          dispatch(setIsFetching(false))
        },
      })
    }
  }, [errorAuth, dispatch])

  useEffect(() => {
    formErrors.email && toast.error(formErrors.email.message)
    formErrors.password && toast.error(formErrors.password.message)
  }, [formErrors])

  const onSubmit = (data: FormInputs) => {
    const { email, password } = data
    dispatch(login({
      email,
      password,
    }))
  }

  return (
    <>
      <S.Heading size='large'>Authentication</S.Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type='email' placeholder='Email' {...register('email')} />
        <Input type='password' placeholder='Password' {...register('password')} />

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
        to='/register'
        size='large'
      >
        Sign Up  <ArrowRightIcon />
      </ButtonLink>
    </>
  )
}

export default AuthPage
