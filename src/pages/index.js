import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './index.module.css'
import ParallaxHeader from '../components/ParallaxHeader';
import ParallaxFooter from '../components/ParallaxFooter';
import Parallax from '../components/Parallax';

export default function Home() {
  return (
      <Layout>
        <BrowserOnly>
          {() => {
            if (/Mobi|Android|iPhone/i.test(window.navigator.userAgent)) {
              return (
                <div className={styles.mobileContainer}></div>
              )
            } else {
              return (
                <div className={styles.container}>
                  <ParallaxHeader />
                  <Parallax />
                  <Parallax hasText={true} />
                  <Parallax hasText={true} />
                  <ParallaxFooter />
                </div>
              )
            }
          }}
        </BrowserOnly>
      </Layout>
  );
}
