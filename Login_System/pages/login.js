import Link from 'next/link';
import styles from '../styles/Login.module.css';
import LoginCard from '../scr/components/loginCard/loginCard';
import Input from '../scr/components/input/input';
import Buttonlight from '../scr/components/button/buttonlight';
import Buttondark from '../scr/components/button/button';
import MeuComponente from '../scr/components/fundo/logo';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react'; // Importe o useState para gerenciar o estado do formulário
import { process } from 'process';

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  // Defina o estado do formulário para controlar o email e a senha
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Função para atualizar o estado do formulário com os valores dos campos
  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  // Função para lidar com o envio do formulário
  const handleForm = async (event) => {
    event.preventDefault();

    // Você pode acessar formData.email e formData.password aqui para fazer login

    try {
      // Lógica de login aqui

      // Após o login bem-sucedido, você pode redirecionar para a página desejada
      router.push('/dashboard');
    } catch (error) {
      // Lidar com erros de login, se necessário
      console.error(error);
    }
  };

  const handleLoginWithGoogle = async () => {
    await signIn('google', { callbackUrl: process.env.GOOGLE_OAUTH_CALLBACK_URL });
  };

  return (
    <div>
      <div className={styles.background2}>
        <div className={styles.container}>
          <MeuComponente />
        </div>

        <div className={styles.background}>
          <LoginCard title='Welcome Back!'>
            <form className={styles.form} onSubmit={handleForm}>
              <Input
                type="email"
                placeholder="E-mail"
                required
                value={formData.email} // Use o valor do estado aqui
                onChange={(e) => handleFormEdit(e, 'email')}
              />
              <Input
                type="password"
                placeholder="Senha"
                required
                value={formData.password} // Use o valor do estado aqui
                onChange={(e) => handleFormEdit(e, 'password')}
              />
              <Buttondark type="submit">Entrar</Buttondark>
              <Buttonlight onClick={handleLoginWithGoogle}>
                <img src='https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/google-icon.png' width={20} left={10} margin-right={10} />
                Log in with Google
              </Buttonlight>

              <Link className={styles.link} href="/cadastro">Ainda não possui uma conta?</Link>
              {/* {error && <p className={styles.error}>{error}</p>} */}
            </form>
          </LoginCard>
        </div>
      </div>
    </div>
  );
}
