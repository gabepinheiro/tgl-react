import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AxiosError } from 'axios'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { User } from '@/features/auth-slice'
import { api } from '@/services/api'
import { toast } from 'react-toastify'

import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { Loading } from '@/components/loading'
import { Form } from '@/components/form'
import { Input } from '@/components/input'
import { MdSaveAlt as SaveIcon } from 'react-icons/md'

import * as S from './styles'

type FormInputs = {
  name: string
  email: string
}

const schema = yup.object({
  name: yup.string()
    .required('Nome é obrigatório'),
  email: yup.string()
    .required('Email é obrigatória'),
}).required()

function AccountPage () {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showEditAccount, setShowEdit] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors: formErrors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    const fetchMyAccount = async () => {
      try {
        const res = await api.get<User>('/user/my-account')
        setUser(res.data)
      } catch (error) {

      } finally {
        setIsLoading(false)
      }
    }

    fetchMyAccount()
  }, [])

  useEffect(() => {
    if (user) {
      setValue('name', user.name)
      setValue('email', user.email)
    }
  }, [user, setValue])

  useEffect(() => {
    formErrors.name && toast.error(formErrors.name.message)
    formErrors.email && toast.error(formErrors.email.message)
  }, [formErrors])

  const handleToggleShowEditAccount = () => {
    setShowEdit(state => !state)
  }

  const onSubmit = async ({ name, email }: FormInputs) => {
    setIsLoading(true)
    try {
      const res = await api.put<User>('/user/update', {
        name,
        email,
      })

      setUser(res.data)
      toast.success('Conta atualizada com sucesso')
      setShowEdit(false)
    } catch (error) {
      const err = error as AxiosError
      if (err.response) {
        return toast.error(err.response.data.message)
      }

      toast.error(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <S.Content>
      <Heading upcase>Olá, <span>{user?.name}</span></Heading>
      <Button onClick={handleToggleShowEditAccount}>Editar conta</Button>
      {showEditAccount && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input type='text' placeholder='Name' {...register('name')} />
          <Input type='text' placeholder='Email' {...register('email')} />

          <Button>Save <SaveIcon /></Button>
        </Form>
      )}
    </S.Content>
  )
}

export default AccountPage
