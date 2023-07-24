import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css'
import ParallaxHeader from '../components/ParallaxHeader';
import ParallaxFooter from '../components/ParallaxFooter';
import Parallax from '../components/Parallax';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <ParallaxHeader />
        <Parallax />
        <Parallax hasText={true} />
        <Parallax hasText={true} />
        <ParallaxFooter />
      </div>
    </Layout>
  );
}
