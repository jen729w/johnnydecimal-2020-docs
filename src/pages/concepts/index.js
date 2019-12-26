// External components
import React from 'react';
import { Header, List } from 'semantic-ui-react';
import { Link } from 'gatsby';

// Internal components
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import { JDH1, JDH2 } from '../../components/JDH1H2';

// Helper functions, styles, images, etc.
import styles from '../../styles/styles.module.css';

const Concepts = () => (
  <Layout>
    <SEO
      title={'Concepts'}
      description={'A link to all of the Johnny.Decimal concepts pages.'}
    />

    <JDH1>Concepts</JDH1>

    <p>
      In this section I will walk you through all of the core concepts in
      detail.
    </p>

    <p>
      I <strong>strongly</strong> recommend that you read the core concepts
      section end-to-end, in the order shown below, at least once. This will
      give you a solid grasp of the system; you may then choose to use
      individual sections like a reference manual.
    </p>

    <p>
      As you read it, you’ll have questions. Hold your horses and keep reading –
      I believe I have addressed most of them, but because this is a linear
      thing it might take me a few pages to get there.
    </p>

    <p>
      The basic idea of Johnny.Decimal is very simple, but its power comes when
      you truly understand it. Reading this should give you that understanding;
      if you still have questions, or if I have not made something clear, please{' '}
      <Link to="/contact/">get in touch</Link> and I will help you.
    </p>

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Core
    </Header>

    <p>
      You should be familiar with this section before you attempt to start your
      own Johnny.Decimal system.
    </p>

    <List bulleted>
      <List.Item>
        <Link to="/concepts/areas-categories/">Areas & categories</Link>
      </List.Item>
      <List.Item>
        <Link to="/concepts/ids/">IDs</Link>
      </List.Item>
      <List.Item>
        <Link to="/concepts/saving-files/">Saving files</Link>
      </List.Item>
      <List.Item>
        <Link to="/concepts/keeping-notes/">Keeping notes</Link>
      </List.Item>
      <List.Item>
        <Link to="/concepts/tracking-your-numbers/">Tracking your numbers</Link>
      </List.Item>
      <List.Item>
        <Link to="/concepts/developing-your-own-system/">
          Developing your own system
        </Link>
      </List.Item>
    </List>

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Advanced
    </Header>

    <p>
      You do not need to know everything in this section initially, but you will
      find it useful as you become more familiar with the system.
    </p>

    <List bulleted>
      <List.Item>
        <Link to="/concepts/managing-email/">Managing email</Link>
      </List.Item>
      <List.Item>
        <Link to="/concepts/what-about-00-09/">What about 00-09?</Link>
      </List.Item>
      <List.Item>
        <Link to="/concepts/working-at-the-terminal/">
          Working at the terminal
        </Link>
      </List.Item>
      <List.Item>
        <Link to="/concepts/exceptions-to-the-rules/">
          Exceptions to the rules
        </Link>
      </List.Item>
    </List>

    <Navigation
      backURL={null}
      backTitle={null}
      forwardURL={'/concepts/areas-categories'}
      forwardTitle={'Areas & categories'}
    />
  </Layout>
);

export default Concepts;
