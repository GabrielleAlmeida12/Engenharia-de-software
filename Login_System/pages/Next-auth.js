import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider === 'google') {
        // Você pode adicionar código personalizado aqui se necessário
        return true; // Autenticado com sucesso
      }
      return false;
    },
  },
  // Adicione outras configurações conforme necessário
});
