import React from 'react';
import styles from './index.module.css';
import { getRandomAphorism } from '../../utils/random';

export default function Parallax({ hasText }) {
  return (
    <div
      className={styles.parallax}
      style={{
        backgroundImage: `url(https://picsum.photos/1600/900.webp?random=${~~(Math.random() * 10)}&grayscale)`,
      }}
    >
      {
        hasText && (
          <div className={styles.content}>
            <div className={styles.text}>
              {getRandomAphorism()}
            </div>
          </div>
        )
      }
    </div>
  );
}
