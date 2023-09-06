import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Login.module.css'
import LoginCard from '../scr/components/loginCard/loginCard'
import Input from '../scr/components/input/input'
import Buttonlight from '../scr/components/button/buttonlight'
import Buttondark from '../scr/components/button/button'
import MeuComponente from '../scr/components/fundo/logo'

export default function LoginPage(){
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState('')
    const router = useRouter()

    const handleFormEdit = (event, name) => {
        setFormData({
            ...formData,  //Os 3 pontos copiam todas as informações do formData
            [name]: event.target.value
        })
    }

    const handleForm = async (event) => { // Validar quando o form for enviado
        try{
            event.preventDefault() // Previnir que a página seja recarregada
            const response = await fetch(`/api/user/login`, {method: 'POST',
            body: JSON.stringify(formData)}) // Vai chamar a API, frontend se conectando com o backend

            const json = await response.json()
            if (response.status !== 200) throw new Error(json) //201 é de criar coisas novas, no login não vou criar nada

            // Função setCookie vai criar um cookie que vai armazenar a informação no nosso navegador
            setCookie('authorization', json)
            router.push('/')

        } catch (err){
            setError(err.message)
            
        }
    }



    return(
    

        <div>
            <div className={styles.background2}>
                <div className={styles.container}> 
                    <MeuComponente></MeuComponente>
                </div>

                     
                <div className={styles.background}>
                   
                    
                    <LoginCard title='Welcome Back!'>
                        <form className={styles.form} onSubmit={handleForm}>
                    
                            <Input type="email" placeholder="E-mail" value={formData.email} required onChange={(e) => {handleFormEdit(e, 'email')}}/>
                            <Input type="password" placeholder="Senha" value={formData.password} required onChange={(e) => {handleFormEdit(e, 'password')}}/> 
                            <Buttondark>Entrar</Buttondark>
                            <Buttonlight>
                                <img src='https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/google-icon.png' width={20} left={10} margin-right={10}></img>
                                 Log in with Google
                            </Buttonlight>
                            <Link className={styles.link}href="/cadastro">Ainda não possui uma conta?</Link>
                            {error && <p className={styles.error}>{error}</p>}
                        </form>
                    </LoginCard>
                </div>
            </div>
        </div>
    )
}
