// Arquivo responsável pela autenticação dentro do projeto, toda configuração do NextAuth será aqui

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            name: "NextAuthCredentials",
            credentials: {},
            async authorize(credentials) {
                // Toda parte de autenticação e integração com a API
                console.log(credentials);

                return {
                    name: "Guilherme Pessoa",
                    email: "gcpr@cin.ufpe.br",
                    image: "https://avatars.githubusercontent.com/u/93964438?v=4"

                }
            }
        })
    ],
    secret: process.env.SECRET,
});