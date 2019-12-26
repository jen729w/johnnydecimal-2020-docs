// External components
import React from 'react';
import { Header, Grid, Image, Divider } from 'semantic-ui-react';

// Internal components
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import { JDH1, JDH2 } from '../../components/JDH1H2';

// Helper functions, styles, images, etc.
import styles from '../../styles/styles.module.css';
import outlook_folder_structure_1232_expanded from '../../images/Outlook__folder-structure-12-32-expanded.png'; // eslint-disable-line max-len

const ManagingEmail = () => (
  <Layout>
    <SEO
      title={'Managing email'}
      description={'How to use the Johnny.Decimal system to manage your email.'}
    />

    <JDH1>Managing email</JDH1>

    <p>
      This won’t make you <em>enjoy</em> email, but maybe you’ll hate it a
      little less.
    </p>

    <JDH2>Make your Subject: work for you</JDH2>

    <p>
      There must be some sort of medical condition to describe the terrible
      dyslexia that overcomes people when they type email subjects. Here’s a
      real example from an old job:
    </p>

    <div
      className={`
      ${styles.johnnyDecimal_boxed}
      ${styles.johnnyDecimal_inlineBlock}
      ${styles.johnnyDecimal_emailSubject}
      ${styles.johnnyDecimal_inlineBlock_marginBottom}
    `}
    >
      <strong>Subject:</strong> EXTERNAL: RE: PO410192251
      -LUE-2016-04-28-MEL-Additional-Transformation-Cabling
    </div>

    <p>Seriously. What the hell?</p>

    <Header size="medium" dividing>
      Put the Johnny.Decimal number in the subject line
    </Header>

    <p>
      This might sound mad, but it works. Just put the relevant number in the
      subject line, and here’s the special sauce: put it in [square brackets].
      So, my subject line becomes:
    </p>

    <div
      className={`
      ${styles.johnnyDecimal_boxed}
      ${styles.johnnyDecimal_inlineBlock}
      ${styles.johnnyDecimal_emailSubject}
      ${styles.johnnyDecimal_inlineBlock_marginBottom}
    `}
    >
      <strong>Subject:</strong> EXTERNAL: RE: PO410192251
      -LUE-2016-04-28-MEL-Additional-Transformation-Cabling{' '}
      <strong>[72.02]</strong>
    </div>

    <Header size="medium" dividing>
      Why? Search is why
    </Header>

    <p>
      You want to find that email related to the additional cabling. You either:
    </p>

    <ul>
      <li>
        know off the top of your head that{' '}
        <span className={styles.johnnyDecimal_boxed}>72.02</span> is the number
        you need, because you’ve used it a lot, or
      </li>
      <li>
        use your index to look up the Johnny.Decimal number for ‘structured
        cabling’ if you don’t remember it.
      </li>
    </ul>

    <p>
      If the email isn’t already in your{' '}
      <span className={styles.johnnyDecimal_boxed}>72.02</span> folder, just
      search for <span className={styles.johnnyDecimal_boxed}>[72.02]</span>.
    </p>

    <p>
      The brackets around the numbers in the subject help your email’s search
      function pinpoint exactly what you want. The text ‘72.02’ might appear in
      a spreadsheet, or in someone’s phone number. The text ‘[72.02]’ almost
      certainly does not.
    </p>

    <p>
      This has never failed me.{' '}
      <strong>
        People ask me about an email and when I find it five seconds later, they
        say to me, “wow … how did you do that?”.
      </strong>
    </p>

    <JDH2>“But I write useful Subject: lines!”</JDH2>

    <p>
      That might be the case. <em>You</em> do. But nobody else does.
    </p>

    <p>
      With this system you can{' '}
      <strong>add your own tag to someone else’s email.</strong> And because
      it’s plain text in the subject line, it’ll follow the email around and
      return to you. In my experience, nobody notices it’s there.
    </p>

    <Divider section />

    <JDH1>Putting things in folders</JDH1>

    <p>
      Since we typically move a <em>lot</em> of emails in to folders, we want to
      minimise clicking.
    </p>

    <Grid stackable doubling columns={2} className={styles.grid_twoColumn}>
      <Grid.Column>
        <Image
          src={outlook_folder_structure_1232_expanded}
          bordered
          rounded
          style={{ width: '293px' }}
          alt="Outlook window showing folder structure"
        />
      </Grid.Column>
      <Grid.Column>
        <p>
          In my email client, I don’t create a folder for each area and then a
          folder for each category within it. I create folders for my categories
          at the top level. Do whatever works for you.
        </p>
      </Grid.Column>
    </Grid>

    <p>
      Also, in case it isn’t obvious, you don’t need to create a folder for
      every Johnny.Decimal number <em>just because</em>. If you don’t get email
      related to that item, don’t create a folder.
    </p>

    <Navigation
      backURL={'/concepts/developing-your-own-system'}
      backTitle={'Developing your own system'}
      forwardURL="/concepts/what-about-00-09"
      forwardTitle="What about 00-09?"
    />
  </Layout>
);

export default ManagingEmail;
