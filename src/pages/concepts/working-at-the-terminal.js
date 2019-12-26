// External components
import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import { Link } from 'gatsby';

// Internal components
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import { JDH1, JDH2 } from '../../components/JDH1H2';

// Helper functions, styles, images, etc.
import styles from '../../styles/styles.module.css';
import terminal_cd_id3427 from '../../images/Terminal__cd-id3427.gif';
import terminal_bash_function from '../../images/Terminal__bash-function.png';

const Terminal = () => (
  <Layout>
    <SEO
      title={'Working at the terminal'}
      description={
        'How the Johnny.Decimal system makes terminal/command line use easier.'
      }
    />

    <JDH1>Working at the terminal</JDH1>

    <p>
      The structured nature of the Johnny.Decimal numbering system lets you move
      to any folder with the minimum number of keystrokes using tab completion.
    </p>

    <p>
      At each level, you know with certainty that{' '}
      <strong>there will be no conflicting items.</strong>
    </p>

    <Image
      src={terminal_cd_id3427}
      bordered
      rounded
      alt="GIF showing changing directory in the Terminal using tab completion"
      style={{ width: '640px' }}
    />

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Script your way around
    </Header>

    <p>
      Easier still, use a simple bash script to change to any directory
      immediately. Put this in your{' '}
      <span className={styles.johnnyDecimal_boxed}>.bashrc</span> (
      <a href="https://gist.github.com/jen729w/cab3a02bce70dab7a4567d460d5c36e2">
        plain text version here
      </a>
      ).
    </p>

    <Image
      src={terminal_bash_function}
      bordered
      rounded
      alt="Screenshot of macOS Terminal showing bash function declaration"
      style={{ width: '488px', marginBottom: '20px' }}
    />

    <p>
      And now change to any directory with{' '}
      <span className={styles.johnnyDecimal_boxed}>$ cjd 34.27</span>.
    </p>

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Got any more?
    </Header>

    <p>
      I’d love to build a collection of useful scripts here.{' '}
      <Link to="/contact/">Send me yours</Link> and I’ll create a repository.
    </p>

    <Navigation
      backURL={'/concepts/what-about-00-09'}
      backTitle={'What about 00-09?'}
      forwardURL="/concepts/exceptions-to-the-rules"
      forwardTitle="Exceptions to the rules"
    />
  </Layout>
);

export default Terminal;
