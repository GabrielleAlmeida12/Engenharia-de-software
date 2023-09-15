import styles from '../styles/Home.module.css'
import HomeCard from '../scr/components/homeCard/homeCard'
import HomeCardStatics from '../scr/components/homeCard/homeCardstatics'
import MeuComponente from '../scr/components/fundo/logo'
import Buttonadd from '../scr/components/button/buttonadd'
import DataAtual from '../scr/components/data/data'
import HomeCardtimeline from '../scr/components/homeCard/HomeCardltimeline'
import Navbar from '../scr/components/navbar/navbar'
           
export default function Home() {
    return (

        <div className={styles.background2}>
        <div className={styles.container}>
            <Navbar/>
            <MeuComponente></MeuComponente>
        </div>
        <div className={styles.background}>
           <HomeCard>
            <div className={styles.cardContent}>
                <div className={styles.andamento}>
                Em Andamento
                </div>
                <Buttonadd>+</Buttonadd>
            </div>
            <DataAtual></DataAtual>
            </HomeCard>

            <div className={styles.containerstatic} >
                <div className={styles.estatisticas}>
                    Estatísticas
                </div>
                <HomeCardStatics></HomeCardStatics>
                <div className={styles.estatisticas}>
                    Linha do Tempo
                </div>
                <HomeCardtimeline></HomeCardtimeline>
            </div>
        </div>
        </div>
    );
    }