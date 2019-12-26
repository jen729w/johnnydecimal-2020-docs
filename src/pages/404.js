// External components
import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'gatsby';

// Internal components
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import { JDH1, JDH2 } from '../components/JDH1H2';

// Helper functions, styles, images, etc.
import styles from '../styles/styles.module.css';

const NotFound = () => (
  <Layout>
    <SEO title={'404'} description={'Johnny.Decimal’s 404 page.'} />
    <JDH1>04.04</JDH1>

    <p className={styles.footnote}>
      Strictly speaking, not an RFC 7231 compliant error code.
    </p>

    <p>
      How ironic; a site dedicated to numbers, and you’re seeing one. Entirely
      the wrong one – 404 is the error code which means we couldn’t find what
      you were looking for.
    </p>

    <p>
      If you think there should be something here – like if you clicked a link
      on this site and arrived here – please{' '}
      <Link to="/contact/">contact me</Link> and I’ll fix it.
      Thanks!&nbsp;&nbsp;:-)
    </p>

    <Navigation />
  </Layout>
);

export default NotFound;
