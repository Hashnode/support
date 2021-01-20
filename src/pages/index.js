import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Getting Started',
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        <li><a href = "link">Using Hashnode</a></li>
        <li><a href = "link">Hashnode Glossary</a></li>
        <li><a href = "link">Create Personal Blog</a></li>
        <li><a href = "link">Bug Reports and Feature Requests</a></li>

      </>
    ),
  },
  {
    title: 'Mapping to Custom Domain',
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
       <li><a href = "link">Introduction</a></li>
        <li><a href = "link">From GoDaddy</a></li>
        <li><a href = "link">From Cloudfare</a></li>
        <li><a href = "link">From Namecheap</a></li>
      </>
    ),
  },
  {
    title: 'Writing and Editing',
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
    
        <li><a href = "link">Write and Article</a></li>
        <li><a href = "link">Cover Photo</a></li>
        <li><a href = "link">Markdown Guidelines</a></li>
        <li><a href = "link">Edit</a></li>
      
      </>
    ),
  },{
    title: 'Getting Started',
    description: (
      <>
        <li><a href = "link">Using Hashnode</a></li>
        <li><a href = "link">Hashnode Glossary</a></li>
        <li><a href = "link">Create Personal Blog</a></li>
        <li><a href = "link">Bug Reports and Feature Requests</a></li>

      </>
    ),
  },
  {
    title: 'Mapping to Custom Domain',
    description: (
      <>
       <li><a href = "link">Introduction</a></li>
        <li><a href = "link">From GoDaddy</a></li>
        <li><a href = "link">From Cloudfare</a></li>
        <li><a href = "link">From Namecheap</a></li>
      </>
    ),
  },
  {
    title: 'Writing and Editing',
    description: (
      <>
    
        <li><a href = "link">Write and Article</a></li>
        <li><a href = "link">Cover Photo</a></li>
        <li><a href = "link">Markdown Guidelines</a></li>
        <li><a href = "link">Edit</a></li>
      
      </>
    ),
  },
];

function Feature({ title, description}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Welcome to Hashnode Support">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
