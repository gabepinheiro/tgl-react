import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import PublicPageLayout from '@/layout/public-page'
import { Footer } from './layout/footer'
import { PrivatePage } from './layout/private-page'

const AuthPage = lazy(() => import('@/pages/auth-page'))
const HomePage = lazy(() => import('@/pages/home'))
const NewBetPage = lazy(() => import('@/pages/new-bet'))
const RegisterPage = lazy(() => import('@/pages/register'))
const ResetPasswordPage = lazy(() => import('@/pages/reset-password'))

export function App () {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>

        <Route element={<PublicPageLayout />}>
          <Route path='/authentication' element={<AuthPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
        </Route>

        <Route element={<PrivatePage />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/new-bet' element={<NewBetPage />} />
        </Route>

        <Route path='*' element={<h1>Page not found!</h1>} />
      </Routes>

      <Footer />
    </Suspense>
  )
}
