// External components
import React from 'react';
import { Header, Image, Divider } from 'semantic-ui-react';
import { Link } from 'gatsby';

// Internal components
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import { JDH1, JDH2 } from '../../components/JDH1H2';

// Helper functions, styles, images, etc.
import styles from '../../styles/styles.module.css';
import finder_14_timesheets_and_expenses from '../../images/Finder__14-timesheets-and-expenses.png';

const ExceptionsToTheRules = () => (
  <Layout>
    <SEO
      title={'Exceptions to the rules'}
      description={'When are we allowed to bend the Johnny.Decimal rules?'}
    />

    <JDH1>Exceptions to the rules</JDH1>

    <p>
      <strong>Where it makes sense to do so</strong>, go ahead and break the
      rules. I won’t judge you.
    </p>

    <JDH2>Storing things with dates in them</JDH2>

    <p>
      An example from my life: I sent weekly timesheets to a company I worked
      for. Category{' '}
      <span className={styles.johnnyDecimal_boxed}>
        14 Timesheets &amp; expenses
      </span>{' '}
      is where I kept them.
    </p>

    <p>
      I thought about creating a new number for each week’s timesheets, but soon
      ended up with a system like this:
    </p>

    <pre
      className={`
      ${styles.johnnyDecimal_boxed}
      ${styles.johnnyDecimal_inlineBlock}
      ${styles.johnnyDecimal_inlineBlock_marginBottom}
    `}
    >
      14.01 Timesheets for 1601<sup>1</sup>
      <br />
      14.02 Timesheets for 1602
      <br />
      ...
      <br />
      14.19 Timesheets for 1619
    </pre>

    <p
      className={`
      ${styles.footnote}
    `}
    >
      <sup>1</sup> I use ‘year-week’ as my date format for this sort of thing,
      so <span className={styles.johnnyDecimal_boxed}>1601</span> was the 1st
      week of 2016. Use whatever works for you.&nbsp;&nbsp;
    </p>

    <p>
      If I had created a new number each week, I’d need to{' '}
      <Link to="/concepts/tracking-your-numbers/">track it</Link>. That’s an
      overhead I didn’t need –{' '}
      <strong>the system is meant to make my life easier.</strong>
    </p>

    <p>
      More importantly, <span className={styles.johnnyDecimal_boxed}>1619</span>{' '}
      is a <em>better</em> way to represent ‘the 19th week of 2016’ than{' '}
      <span className={styles.johnnyDecimal_boxed}>14.19</span>. In this case,
      my numbers were getting in the way.
    </p>

    <JDH2>Folders inside Johnny.Decimal folders</JDH2>

    <p>I told you not to do this. I am not to be trusted.</p>

    <p>Here’s how my timesheets folder looks:</p>

    <Image
      src={finder_14_timesheets_and_expenses}
      bordered
      rounded
      alt="Finder window showing folders within the 14 Timesheets & Expenses folder"
      style={{ width: '293px', marginBottom: '20px' }}
    />

    <p>
      I did this because <strong>it makes more sense this way.</strong>
    </p>

    <p>
      My timesheets are still in one place. I haven’t broken the Johnny.Decimal
      system because everything is still very organised.
    </p>

    <Header size="medium" dividing>
      Emailing my weekly timesheet
    </Header>

    <p>
      When I email my weekly timesheet to the boss, I use the following subject
      line:
    </p>

    <div
      className={`
      ${styles.johnnyDecimal_boxed}
      ${styles.johnnyDecimal_inlineBlock}
      ${styles.johnnyDecimal_inlineBlock_marginBottom}
    `}
    >
      <strong>Subject:</strong> Timesheets and expenses [14.01.1619]
    </div>

    <p>
      I’m extending the ‘
      <Link to="/concepts/managing-email/">
        use Johnny.Decimal numbers in your email subject
      </Link>
      ’ concept by putting the full number, including the{' '}
      <span className={styles.johnnyDecimal_boxed}>yyww</span> bit, in the
      subject. Our number has grown, but{' '}
      <strong>that’s okay because it’s still very structured.</strong>
    </p>

    <p>
      This allows me—or the boss—to find any timesheet instantly. Search in
      Outlook for{' '}
      <span className={styles.johnnyDecimal_boxed}>[14.01.1619]</span> and the{' '}
      <em>only</em> thing that appears is my timesheet for this specific week.
    </p>

    <p>
      This is incredibly useful when I have to remind him to approve it so that
      I can get paid. (He gets far too much email and, unfortunately, I’m the
      only one that sends it to him already categorised.)
    </p>

    <Divider section />

    <JDH1>Archiving files</JDH1>

    <p>
      I need to keep old copies of files. Say it’s a spreadsheet that I’m
      updating, but I want to keep the previous version in case I mess it up.
    </p>

    <p>
      This is also an exception to the ‘you can’t create a folder inside a
      Johnny.Decimal folder’ rule. In this case, feel free to create a folder
      called <span className={styles.johnnyDecimal_boxed}>archive</span> and
      move things in to it.
    </p>

    <Navigation
      backURL={'/concepts/working-at-the-terminal'}
      backTitle={'Working at the terminal'}
      forwardURL={null}
      forwardTitle={null}
    />
  </Layout>
);

export default ExceptionsToTheRules;
