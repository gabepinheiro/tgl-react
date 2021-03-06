import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { login, selectAuth, setIsFetching, setError } from '@/features/auth-slice'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'

import {
  Heading,
  Form,
  Input,
  ButtonLink,
  CustomLink,
} from '@/components'

import { AiOutlineArrowRight as ArrowRightIcon } from 'react-icons/ai'

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
      <Heading size='large'>Authentication</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type='email' placeholder='Email' {...register('email')} />
        <Input type='password' placeholder='Password' {...register('password')} />

        <Link to='/reset-password'>I forget my password</Link>

        <ButtonLink
          color='greenLight'
          size='large'
          disabled={isFetching}
        >
          Log In <ArrowRightIcon />
        </ButtonLink>
      </Form>

      <CustomLink
        to='/register'
        size='large'
      >
        Sign Up  <ArrowRightIcon />
      </CustomLink>
    </>
  )
}

export default AuthPage
