// External components
import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'gatsby';

// Internal components
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import ButtondownEmailForm from '../components/ButtondownEmail';

// Helper functions, styles, images, etc.
import styles from '../styles/styles.module.css';

const Contact = () => (
  <Layout>
    <SEO title={'Contact'} description={'How to get in touch with me.'} />
    <Header size="huge" dividing className={styles.headerHuge_bordered}>
      Contact me
    </Header>
    <p>
      However you like. My name is Johnny Noble.{' '}
      <span role="img" aria-label="Waving hand">
        👋🏻
      </span>
    </p>
    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Email me
    </Header>
    <p>
      At <a href="mailto:hello@johnnydecimal.com">hello@johnnydecimal.com</a>.
    </p>
    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Call me
    </Header>
    <p>
      Yep. Any time. <a href="tel:+61415658257">+61 415 658 257</a> (that’s an
      Australian number).
    </p>
    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Let’s visit!
    </Header>
    <p>I’m in Melbourne, Australia.</p>
    <p>If your business is elsewhere, we can work something out.</p>
    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Tweet me
    </Header>
    <p>
      <a href="https://twitter.com/johnnydecimal">@johnnydecimal</a>.
    </p>
    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Sign up to the mailing list
    </Header>{' '}
    <p>
      It’s <em>very</em> low volume (emails sent in 2019: zero), big update
      notifications only. See this site’s{' '}
      <Link to="/privacy/">privacy policy</Link>.
    </p>
    <ButtondownEmailForm />
    <Navigation />
  </Layout>
);

export default Contact;
