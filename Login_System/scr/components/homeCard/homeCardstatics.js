import React from 'react';
import styles from './homeCard.module.css';

export default function HomeCardStatics({ title, children }) {
  return (
    <div className={styles.cardstatics}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}