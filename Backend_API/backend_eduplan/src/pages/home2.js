import React from 'react';
import styles from '../../styles/home2.module.css';
import NavbarWhite from '../../components/navbar/navbarbranca';
import { useRouter } from 'next/router';

export default function Home2() {
  const currentDate = new Date().toLocaleDateString();
  
  return (
    <div className={styles.background}>
      <div className={styles.background2}>
        <NavbarWhite />
        <div className={styles.activityContainer}>
          <h1 className={styles.activityTitle}>Adicionar Plano de Estudos</h1>
          <a>
            <button className={styles.activityButton}>+</button>
          </a>
        </div>
      </div>
    </div>
  );
}
