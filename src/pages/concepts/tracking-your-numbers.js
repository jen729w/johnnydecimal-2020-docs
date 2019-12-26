/* eslint-disable max-len */
// External components
import React from 'react';
import { Grid, Image, Divider } from 'semantic-ui-react';
import { Link } from 'gatsby';

// Internal components
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import { JDH1, JDH2 } from '../../components/JDH1H2';

// Helper functions, styles, images, etc.
import styles from '../../styles/styles.module.css';
import googleSheets_simple_company from '../../images/GoogleSheets__simple-company.png';
import ButtondownEmailForm from '../../components/ButtondownEmail';

const TrackingNumbers = () => (
  <Layout>
    <SEO
      title={'Tracking your numbers'}
      description={
        'How and why we track our Johnny.Decimal numbers in a centralised database.'
      }
    />

    <JDH1>Tracking your numbers</JDH1>

    <p>
      When you’re assigning new Johnny.Decimal numbers to different types of
      files and objects, you need to know that the number is unique.
    </p>

    <p>
      You don’t want to have to look in your file system, your email, and your
      notes application to check what the next available number in a category
      is: <strong>you need a central index.</strong>
    </p>

    <JDH2>It’s an index, not an inventory</JDH2>

    <p>
      The purpose of this index is not to record the individual contents of
      every single Johnny.Decimal item: it is only to record the IDs that you
      have assigned.
    </p>

    <p>Your database needs to record this level of information:</p>

    <pre
      className={`
            ${styles.johnnyDecimal_boxed}
            ${styles.johnnyDecimal_inlineBlock}`}
    >
      <span>
        {`10-19 My area
   11 My category
      11.01 My first ID
      11.02 My second ID`}
      </span>
    </pre>

    <br />

    <p style={{ marginTop: '1em' }}>
      You don’t need to track what is <em>in</em> each of your JD folders:
    </p>

    <pre
      className={`
            ${styles.johnnyDecimal_boxed}
            ${styles.johnnyDecimal_inlineBlock}`}
    >
      <span>
        {`10-19 My area
   11 My category
      11.01 My first ID`}
        <br />
        {`            `}
        <span style={{ textDecoration: 'line-through' }}>Document.doc</span>
        <br />
        {`            `}
        <span style={{ textDecoration: 'line-through' }}>Picture.jpg</span>
        <br />
        {`            `}
        <span style={{ textDecoration: 'line-through' }}>Spreadsheet.xls</span>
        <br />
        {`      11.02 My second ID`}
      </span>
    </pre>

    <JDH2>Your file system is not your index</JDH2>

    <p>
      You might think that your folder structure—in Finder or Windows
      Explorer—is this index, but it isn’t.
    </p>

    <p>
      You will create Johnny.Decimal numbers to save things that aren’t files.
      That might be <Link to="/concepts/managing-email/">an email</Link>,{' '}
      <Link to="/concepts/keeping-notes/">a note</Link>, a physical object, or
      anything else. These numbers must be tracked centrally.
    </p>

    <JDH2>Searching for things</JDH2>

    <p>
      When you’re saving all sorts of items in your system, you won’t always
      remember where they are. Did you save the office contract in your email,
      or your shared drive? You might look in your drive, not see the contract,
      and think you didn’t save it.
    </p>

    <p>
      <strong>
        The whole point of the Johnny.Decimal system is to remove this
        frustration.
      </strong>
    </p>

    <p>
      Having a central index allows you to search for items by title, or filter
      your entire list by area or category. This lets you see, immediately, what
      you’ve saved.
    </p>

    <p>
      If your system also tells you where that item <em>is,</em> then all the
      better.
    </p>

    <JDH1>What do we use?</JDH1>

    <p>
      I’ll be honest, there isn’t a great solution to this yet. I’m in the
      process of writing one<sup>1</sup>, but until then we have to make do with
      other tools.
    </p>

    <div className={styles.footnote}>
      <p>
        <sup>1.</sup>&nbsp;Follow{' '}
        <a href="https://blog.johnnydecimal.com">the blog</a> for
        updates.&nbsp;&nbsp;
      </p>
    </div>

    <JDH2>Use your notes</JDH2>

    <p>
      Simply create a blank note in{' '}
      <Link to="/concepts/keeping-notes">your note system</Link> for each new
      number that you create. This has worked well for me in the past. It’s
      quick, searchable, and uses a system you already have.
    </p>

    <p>
      It also has the side-effect of encouraging you to use your notes, which
      will make you more efficient.
    </p>

    <JDH2>AirTable (or any other database)</JDH2>

    <p>
      You can use any database system you like.{' '}
      <a href="https://airtable.com/invite/r/wcs73zWf">Airtable</a>
      <sup>2</sup> is a <em>great</em> online database which I use for all sorts
      of things.
    </p>

    <p>
      I’ve created a template database which you can use as a starter. You can{' '}
      <a href="https://airtable.com/shr5vvlmaCV98G6z7">copy it from here</a>.
    </p>

    <div className={styles.footnote}>
      <p>
        <sup>2.</sup>&nbsp;That link earns me a $10 referral credit if you sign
        up. If you’d rather not do that, that’s cool: just go to{' '}
        <a href="https://airtable.com">airtable.com</a>. You can copy the
        template database either way.&nbsp;&nbsp;
      </p>
    </div>

    <JDH2>Excel or Google Sheets</JDH2>

    <Grid stackable doubling columns={2} className={styles.grid_twoColumn}>
      <Grid.Column>
        <Image
          src={googleSheets_simple_company}
          bordered
          rounded
          style={{ width: '412px' }}
        />
      </Grid.Column>
      <Grid.Column>
        <p>Create a spreadsheet and save your numbers there.</p>
        <p>This is a really simple solution, but it isn’t very clever.</p>
      </Grid.Column>
    </Grid>

    <JDH2>At work: SharePoint lists</JDH2>

    <p>
      If you work for a large organisation, you may be able to ask your IT
      people to create you a{' '}
      <a href="https://support.office.com/en-us/article/create-a-list-in-sharepoint-0d397414-d95f-41eb-addd-5e6eff41b083?ui=en-US&rs=en-US&ad=US">
        list in SharePoint
      </a>
      . This can work very well, and has the advantage of being visible to your
      entire team.
    </p>

    <Divider section />

    <JDH1>Subscribe for updates</JDH1>

    <p>
      Sign up to my <em>very</em> low volume mailing list<sup>3</sup> and I’ll
      let you know when I finally develop custom software for this thing.
    </p>

    <ButtondownEmailForm />

    <div className={styles.footnote}>
      <p>
        <sup>3.</sup>&nbsp;Number of emails sent in 2019: 0.&nbsp;&nbsp;
      </p>
    </div>

    <Navigation
      backURL={'/concepts/keeping-notes'}
      backTitle={'Keeping notes'}
      forwardURL={'/concepts/developing-your-own-system'}
      forwardTitle={'Developing your own system'}
    />
  </Layout>
);

export default TrackingNumbers;
