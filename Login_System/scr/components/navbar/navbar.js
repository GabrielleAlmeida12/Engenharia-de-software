import React from 'react';
import styles from './navbar.module.css'

export default function Navbar() {
  return <nav className={styles.nav}>
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
  </nav>
   
}

