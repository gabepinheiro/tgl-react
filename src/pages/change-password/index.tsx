import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '@/services/api'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import {
  Form,
  Input,
  ButtonLink,
  Heading,
} from '@/components'

import {
  AiOutlineArrowRight as ArrowRightIcon,
  AiOutlineArrowLeft as ArrowLeftIcon,
} from 'react-icons/ai'

type FormInputs = {
  password: string
  confirmPassword: string
}

const schema = yup.object({
  password: yup.string()
    .required('Nova senha é obrigatória')
    .min(6, 'Password must be at 3 char long'),
  confirmPassword: yup.string()
    .required('Senha de confirmação é obrigatória')
    .oneOf([yup.ref('password')], 'As senhas não correspondem.'),
}).required()

function ChangePasswordPage () {
  const navigate = useNavigate()
  const token = api.defaults.headers.common.Authorization

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    formErrors.password && toast.error(formErrors.password.message)
    formErrors.confirmPassword && toast.error(formErrors.confirmPassword.message)
  }, [formErrors])

  const onSubmit = async ({ password }: FormInputs) => {
    const token = api.defaults.headers.common.Authorization
    try {
      await api.post(`/reset/${token}`, {
        password,
      })

      toast.success('Sua senha foi alterada com sucesso.')

      navigate('/authentication')
    } catch (error) {
      const err = error as AxiosError
      if (err.response) {
        return toast.error(err.response.data.message)
      }

      toast.error(err.message)
    }
  }

  if (!token) {
    return <Navigate to='/reset-password' />
  }

  return (
    <>
      <Heading size='large'>Change Password</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type='password' placeholder='New password' {...register('password')} />
        <Input type='password' placeholder='Confirm password' {...register('confirmPassword')} />

        <ButtonLink
          color='greenLight'
          size='large'
        >
          Change <ArrowRightIcon />
        </ButtonLink>
      </Form>

      <ButtonLink size='large' onClick={() => navigate(-1)}>
        <ArrowLeftIcon /> Back
      </ButtonLink>
    </>
  )
}

export default ChangePasswordPage
