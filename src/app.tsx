import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { LazyLoad } from '@/components/lazy-load'

import { PublicPage, PrivatePage, Footer } from '@/layout'

import {
  AuthPage,
  HomePage,
  NewBetPage,
  RegisterPage,
  ResetPasswordPage,
  ChangePasswordPage,
  AccountPage,
} from '@/pages'

export function App () {
  return (
    <Suspense fallback={<LazyLoad />}>
      <Routes>

        <Route element={<PublicPage />}>
          <Route path='/authentication' element={<AuthPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
          <Route path='/change-password' element={<ChangePasswordPage />} />
        </Route>

        <Route element={<PrivatePage />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/new-bet' element={<NewBetPage />} />
          <Route path='/account' element={<AccountPage />} />
        </Route>

        <Route path='*' element={<h1>Page not found!</h1>} />
      </Routes>

      <Footer />
    </Suspense>
  )
}
