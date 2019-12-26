// External components
import React from 'react';
import { Header } from 'semantic-ui-react';

// Internal components
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import { JDH1, JDH2 } from '../../components/JDH1H2';

// Helper functions, styles, images, etc.
import styles from '../../styles/styles.module.css';

const IDs = () => (
  <Layout>
    <SEO
      title={'IDs'}
      description={
        'What happens after the decimal point in a Johnny.Decimal number.'
      }
    />

    <JDH1>IDs</JDH1>

    <p>
      Let’s get on to the decimal. We have a category—let’s say{' '}
      <span className={styles.johnnyDecimal_boxed}>22 Contracts</span>—and we
      want to store some things there.
    </p>

    <p>
      We create a Johnny.Decimal number by adding a decimal point to our
      category, and starting at number{' '}
      <span className={styles.johnnyDecimal_boxed}>.01</span> . We start at{' '}
      <span className={styles.johnnyDecimal_boxed}>.01</span> and not just{' '}
      <span className={styles.johnnyDecimal_boxed}>.1</span> because of the way
      that computers sort files. Also it’s more consistent, and consistency is
      elegant.
    </p>

    <span
      className={`
        ${styles.johnnyDecimal_boxed}
        ${styles.johnnyDecimal_inlineBlock}
        ${styles.johnnyDecimal_inlineBlock_marginBottom}
      `}
    >
      22.01
    </span>

    <p>Now we just decide what we’re keeping there and give it a nice name.</p>

    <span
      className={`
        ${styles.johnnyDecimal_boxed}
        ${styles.johnnyDecimal_inlineBlock}
        ${styles.johnnyDecimal_inlineBlock_marginBottom}
      `}
    >
      22.01 Cleaning contract
    </span>

    <p>
      Later, we need to store another contract. What to do? Just use the next
      number.
    </p>

    <span
      className={`
        ${styles.johnnyDecimal_boxed}
        ${styles.johnnyDecimal_inlineBlock}
      `}
    >
      22.02 Office lease
    </span>

    <JDH2>That was easy</JDH2>

    <p>
      You create a full Johnny.Decimal number by choosing a category and{' '}
      <strong>looking for the next available number after the decimal.</strong>
    </p>

    <p>
      The thing to remember here is that the number after the decimal has{' '}
      <em>no meaning whatsoever:</em> we just start at{' '}
      <span className={styles.johnnyDecimal_boxed}>.01</span> and work our way
      up.
    </p>

    <JDH2>“What happens when I get to 99?”</JDH2>

    <p>
      You never will. And if you do, the category you defined was almost
      certainly too broad. Split it up.
    </p>

    <JDH2>Give your Johnny.Decimal items simple names</JDH2>

    <p>
      This system lets us give concise names to things, because we already know
      from the number which category they’re in.
    </p>

    <p>
      I created{' '}
      <span className={styles.johnnyDecimal_boxed}>
        22.01 Cleaning contract
      </span>{' '}
      because it’s short and reads well, but you could have gone with{' '}
      <span className={styles.johnnyDecimal_boxed}>22.01 Cleaning</span> if
      you’d preferred. You’re already in a folder called{' '}
      <span className={styles.johnnyDecimal_boxed}>Contracts</span>.
    </p>

    <p>
      <strong>Everything that starts with</strong>{' '}
      <span className={styles.johnnyDecimal_boxed}>22</span>{' '}
      <strong>is a contract</strong>.
    </p>

    <Navigation
      backURL={'/concepts/areas-categories'}
      backTitle={'Areas & categories'}
      forwardURL={'/concepts/saving-files'}
      forwardTitle={'Saving files'}
    />
  </Layout>
);

export default IDs;
