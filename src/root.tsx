import { App } from '@/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { GlobalStyles } from '@/styles/globals'

export function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  )
}
