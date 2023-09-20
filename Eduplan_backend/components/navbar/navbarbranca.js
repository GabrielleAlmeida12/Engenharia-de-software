import React from 'react';
import styles from './navbar.module.css'

export default function NavbarWhite() {
  return <nav className={styles.navwhite}>

    
    <div className={styles.logonav}>
      <img src="/imagens/Logo.png" alt="Minha Imagem" />
    </div>

    <div className={styles.containernav}>
    <ul>
      <li>
        <a href='/home'>Home</a>
      </li>
      <li>
        <a href='/'>Perfil</a>
      </li>
      <li>
        <a href='/'>Estatísticas</a>
      </li>
      <li>
        <a href='/'>Linha do tempo</a>
      </li>
    </ul>
    </div>
  </nav>
   
}



