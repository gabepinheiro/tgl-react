import { build, fake } from '@jackfranklin/test-data-bot'
import { User } from './types'

export const createUser = build<User>('User', {
  fields: {
    name: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
    email: '',
  },
  postBuild: (user) => ({
    ...user,
    email: `${user.name.toLowerCase()}+e2e@tgl.com.br`,
  }),
})
