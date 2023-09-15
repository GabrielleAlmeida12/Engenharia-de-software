import { SessionProvider } from 'next-auth/react';
import { signIn, useSession } from 'next-auth/react'; // Importe os módulos relacionados à autenticação
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;