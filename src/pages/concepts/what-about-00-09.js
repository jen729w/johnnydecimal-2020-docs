// External components
import React from 'react';
import { Header, Divider } from 'semantic-ui-react';
import { Link } from 'gatsby';

// Internal components
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import { JDH1, JDH2 } from '../../components/JDH1H2';

// Helper functions, styles, images, etc.
import styles from '../../styles/styles.module.css';

const WhatAbout0009 = () => (
  <Layout>
    <SEO
      title={'What about 00-09?'}
      description={'Why haven’t we used 00-09 so far?'}
    />

    <JDH1>What about 00-09?</JDH1>

    <p>
      You may be wondering why we started our areas at{' '}
      <span className={styles.johnnyDecimal_boxed}>10-19</span> and not{' '}
      <span className={styles.johnnyDecimal_boxed}>00-09</span>, and our
      categories at <span className={styles.johnnyDecimal_boxed}>11</span>{' '}
      rather than <span className={styles.johnnyDecimal_boxed}>10</span>.
    </p>

    <JDH2>We reserve these for the system</JDH2>

    <p>
      Sometimes you want to keep information <em>about the system</em>, in the
      system. <strong>I call this ‘Management &amp; Meta’.</strong>
    </p>

    <p>
      <a href="https://en.wikipedia.org/wiki/Meta">Meta</a> basically means
      ‘self-referential’. It’s about itself. Get it? If not, don’t stress.
    </p>

    <Divider section />

    <JDH1>00-09 is about the system itself</JDH1>

    <p>
      I always reserve these numbers for a special area called{' '}
      <span className={styles.johnnyDecimal_boxed}>
        00-09 Management &amp; Meta
      </span>
      . Inevitably I want to store some information in my Johnny.Decimal system{' '}
      <em>about my Johnny.Decimal system</em>. That goes here.
    </p>

    <p>
      For example, I have to save{' '}
      <Link to="/concepts/keeping-notes/">text notes</Link> in a folder on my
      disk. That folder has to live somewhere, and it lives in a category in{' '}
      <span className={styles.johnnyDecimal_boxed}>00-09</span>.
    </p>

    <p>
      One of the text notes I keep at work serves as a quick-reference index to
      my Johnny.Decimal system. It’s called{' '}
      <span className={styles.johnnyDecimal_boxed}>00.00 Index</span>.
    </p>

    <JDH2>10, 20, 30 … 90 are about those categories</JDH2>

    <p>
      In the example we’ve been using,{' '}
      <span className={styles.johnnyDecimal_boxed}>20-29</span> was{' '}
      <span className={styles.johnnyDecimal_boxed}>Administration</span> but our
      first category was{' '}
      <span className={styles.johnnyDecimal_boxed}>
        21 Company registration
      </span>
      . What happened to <span className={styles.johnnyDecimal_boxed}>20</span>?
    </p>

    <p>
      We reserve these numbers for ‘management &amp; meta’ information{' '}
      <em>about the category</em>. Although I hardly ever use them, it’s rare
      that I have more than nine categories in an area. I don’t miss the wasted
      number.
    </p>

    <Divider section />

    <JDH1>Confused? Don’t worry</JDH1>

    <p>If you want to use the zeros, use them. It doesn’t matter.</p>

    <Navigation
      backURL={'/concepts/managing-email'}
      backTitle={'Managing email'}
      forwardURL="/concepts/working-at-the-terminal"
      forwardTitle="Working at the terminal"
    />
  </Layout>
);

export default WhatAbout0009;
