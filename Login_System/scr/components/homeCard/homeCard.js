import React from 'react';
import styles from './homeCard.module.css';

export default function HomeCard({ title, children }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}

