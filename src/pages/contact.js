// External components
import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'gatsby';

// Internal components
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import { JDH1, JDH2 } from '../components/JDH1H2';
import ButtondownEmailForm from '../components/ButtondownEmail';

// Helper functions, styles, images, etc.
import styles from '../styles/styles.module.css';

const Contact = () => (
  <Layout>
    <SEO title={'Contact'} description={'How to get in touch with me.'} />
    <JDH1>Contact me</JDH1>
    <p>
      However you like. My name is Johnny Noble.{' '}
      <span role="img" aria-label="Waving hand">
        👋🏻
      </span>
    </p>
    <JDH2>Email me</JDH2>
    <p>
      At <a href="mailto:hello@johnnydecimal.com">hello@johnnydecimal.com</a>.
    </p>
    <JDH2>Call me</JDH2>
    <p>
      Yep. Any time. <a href="tel:+61415658257">+61 415 658 257</a> (that’s an
      Australian number).
    </p>
    <JDH2>Let’s visit!</JDH2>
    <p>I’m in Melbourne, Australia.</p>
    <p>If your business is elsewhere, we can work something out.</p>
    <JDH2>Tweet me</JDH2>
    <p>
      <a href="https://twitter.com/johnnydecimal">@johnnydecimal</a>.
    </p>
    <JDH2>Sign up to the mailing list</JDH2>{' '}
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
