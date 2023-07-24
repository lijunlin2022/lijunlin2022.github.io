import React from 'react';
import styles from './index.module.css';
import { getRandomAphorism } from '../../utils/random';

const ParallaxHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {getRandomAphorism()}
      </div>
    </div>
  )
}

export default ParallaxHeader;