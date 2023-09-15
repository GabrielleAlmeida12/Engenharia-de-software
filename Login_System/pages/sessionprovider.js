import { SessionProvider } from 'next-auth/react'
import { Provider as AuthProvider } from 'next-auth/client'

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <AuthProvider session={pageProps.session}>
        <Component {...pageProps} />
      </AuthProvider>
    </SessionProvider>
  )
}

