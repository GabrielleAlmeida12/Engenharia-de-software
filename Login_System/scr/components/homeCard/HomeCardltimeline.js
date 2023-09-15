import React from 'react';
import styles from './homeCard.module.css';

export default function HomeCardtimeline({ title, children }) {
  return (
    <div className={styles.cardtimeline}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}
