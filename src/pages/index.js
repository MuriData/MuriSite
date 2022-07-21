import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx("container", styles.landingContainer)}>
        <div className={styles.landingColeft}>
          <div className={styles.muri}></div> 
        </div>
        <div className={styles.landingCoRight}>
          <h1 className="hero__title">The True Revolution of Decentralized Data Indexing</h1>
          <hr></hr>
          <p>Powered by MuriData</p>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Go!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="MuriData - As the future of Indexing.">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
