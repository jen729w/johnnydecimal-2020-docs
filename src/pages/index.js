/* eslint-disable max-len*/ // For the DDG URL.
// External components
import React from 'react';
import { Link } from 'gatsby';
import { Header, Divider, Grid, Image } from 'semantic-ui-react';

// Internal components
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import { JDH1, JDH2 } from '../components/JDH1H2';

// Helper functions, styles, images, etc.
import styles from '../styles/styles.module.css';
// eslint-disable-next-line max-len
import img_finder_sampleCompany_category12_expanded from '../images/Finder__sample-company__category12-expanded.jpg';

const IndexPage = () => (
  <Layout>
    <SEO
      title={'Johnny.Decimal home'}
      description={'Johnny.Decimal – a system to organise projects.'}
    />

    <JDH1>A system to organise projects</JDH1>

    <p>
      When we kept everything on paper, organised people had these things called
      filing cabinets. They stored all of their documents in them in a
      structured way so that they could find them again.
    </p>

    <p>
      Now those same people store all of their files in arbitrarily named
      folders on their company’s shared drive and wonder why they can’t find
      anything.
    </p>

    <JDH2>Nobody can find anything any more</JDH2>

    <p>
      Thousands of emails. Hundreds of files. File structures created on a whim
      and six layers deep. Duplication of content, lost content.{' '}
      <strong>
        We thought search would save us from this nightmare, but we were wrong.
      </strong>
    </p>

    <p>
      The frustration I see in organisations is palpable. The time and energy
      wasted is unimaginable.
    </p>

    <Divider section />

    <JDH1>It’s time to get organised</JDH1>

    <p>
      There are a couple of core concepts, and they’re so simple you’ll wonder
      why you haven’t thought of them before.
    </p>

    <p>
      It’s worth mentioning at this point that{' '}
      <strong>all of this is free</strong>, and it’s possible to implement it
      without any additional tools.
    </p>

    <JDH2>Step 1: Divide everything in to ten things</JDH2>

    <ol>
      <li>
        Take everything you need to organise and sort it in to, at most, ten
        large buckets.
      </li>
      <li>Make sure the buckets are unambiguously different.</li>
      <li>Put a label on each bucket.</li>
    </ol>

    <p>This forces you to group things quite broadly, but that’s the point.</p>

    <p>
      <strong>We call these buckets your areas</strong>. An area might be{' '}
      <span className={styles.johnnyDecimal_boxed}>Finance</span>.
    </p>

    <JDH2>Step 2: In each area, divide in ten again</JDH2>

    <p>
      Go through each bucket and repeat the process.{' '}
      <strong>This creates your categories</strong>.
    </p>
    <p>
      A category within the{' '}
      <span className={styles.johnnyDecimal_boxed}>Finance</span> area might be{' '}
      <span className={styles.johnnyDecimal_boxed}>Tax Returns</span>.
    </p>

    <p>
      Now we have ten areas which contain ten categories each. That’s a hundred
      categories <strong>at the very most</strong>. It’s very unlikely you will
      end up with a hundred categories.
    </p>

    <JDH2>Categories are the key</JDH2>

    <p>
      What’s a category? It’s just a collection of stuff. Book drafts. Travel
      itineraries. Lease agreements. Test reports. Contracts.{' '}
      <strong>Any type of work you do can become a category.</strong>
    </p>

    <p>
      The point is that you’ve <em>defined</em> these categories, each of which
      is contained within a broader area. You do this when you set up your
      system, which we’ll get to shortly.
    </p>

    <Header size="medium" dividing>
      We give each category a number
    </Header>

    <p>
      Remember they’re grouped in tens, so our first ten categories will be
      numbers <span className={styles.johnnyDecimal_boxed}>10-19</span> and they
      will all be related to each other.
    </p>

    <p>
      Let’s say <span className={styles.johnnyDecimal_boxed}>10-19</span> is our{' '}
      <span className={styles.johnnyDecimal_boxed}>Finance</span> area. Category{' '}
      <span className={styles.johnnyDecimal_boxed}>11</span> might be{' '}
      <span className={styles.johnnyDecimal_boxed}>Tax returns</span>,{' '}
      <span className={styles.johnnyDecimal_boxed}>12 Payroll</span>, and so on.
    </p>

    <p>
      We also know that <span className={styles.johnnyDecimal_boxed}>42</span>{' '}
      will not be a finance-related category. This is the power of the system:
      you know where you absolutely should <em>not</em> bother looking to find
      your data.
    </p>

    <Divider section />

    <JDH1>Now we bring in the numbers</JDH1>

    <p>A Johnny.Decimal number looks like this:</p>

    <div className={styles.johnnyDecimal_large}>
      <span className={styles.johnnyDecimal_boxed}>42.18</span>{' '}
      <span className={styles.johnnyDecimal_boxed}>12.03</span>{' '}
      <span className={styles.johnnyDecimal_boxed}>63.17</span>
    </div>

    <p>
      They’re short, memorable, and can be spoken out loud.{' '}
      <strong>
        They’re always two digits, a decimal point, and two more digits.
      </strong>
    </p>

    <p>Say it like “forty-two eighteen” or “twelve dot oh-three”.</p>

    <JDH2>Before the decimal: category</JDH2>

    <p>
      The decimal point is there to break the number up, but more importantly to
      remind you that{' '}
      <strong>the number before the decimal is the important part.</strong> It’s
      the category.
    </p>

    <p>
      The category tells you which area it’s in, because all areas start with
      the same number. If your category starts with the digit{' '}
      <span className={styles.johnnyDecimal_boxed}>1</span>, that’s something to
      do with <span className={styles.johnnyDecimal_boxed}>Finance</span>.
    </p>

    <p>
      At a glance, you know what the number contains. You’ll be astonished at
      how many of your category numbers you remember.
    </p>

    <JDH2>After the decimal: ID</JDH2>

    <p>
      The number after the decimal is just a counter.{' '}
      <strong>We call it the ID:</strong> it starts at{' '}
      <span className={styles.johnnyDecimal_boxed}>.01</span> and increases with
      each thing you create.
    </p>

    <p>
      In these examples,{' '}
      <span className={styles.johnnyDecimal_boxed}>42.18</span> is the 18th
      thing you’ve saved in your{' '}
      <span className={styles.johnnyDecimal_boxed}>42</span> category.
    </p>

    <p>
      The 3rd thing you’ve saved in your{' '}
      <span className={styles.johnnyDecimal_boxed}>12 Payroll</span> category
      might be{' '}
      <span className={styles.johnnyDecimal_boxed}>
        12.03 Payroll schedule for 2018
      </span>
      .
    </p>

    <p>
      <strong>The ID doesn’t have any relevance to the item itself</strong> –
      remember, it’s just a counter.
    </p>

    <Divider section />

    <JDH1>I get the idea, but why bother?</JDH1>

    <p>Many, many reasons.</p>

    <JDH2>Organise your files. Properly</JDH2>

    <p>
      The most obvious use of Johnny.Decimal is in organising your folder
      structure.
    </p>

    <Grid stackable doubling columns={2} className={styles.grid_twoColumn}>
      <Grid.Column>
        <Image
          src={img_finder_sampleCompany_category12_expanded}
          alt="Screenshot of macOS Finder folder structure."
          bordered
          rounded
          style={{ width: '305px' }}
        />
      </Grid.Column>
      <Grid.Column>
        <p>
          This is a folder structure for a small company. (The reasoning behind
          the folder naming structure will be explained later.)
        </p>
      </Grid.Column>
    </Grid>

    <p>
      Notice how we have four areas, each with a couple of categories. None of
      the areas or categories overlap.{' '}
      <strong>There’s only one place anything can ever be.</strong>
    </p>

    <p>
      Even if you weren’t familiar with this folder structure, you’d be able to
      find your way to the sales proposals directory.
    </p>

    <JDH2>Nothing is more than two clicks away, ever</JDH2>

    <p>
      An important restriction of the system is that{' '}
      <strong>
        you’re not allowed to create any folders inside a Johnny.Decimal folder.
      </strong>
    </p>

    <p>
      This means that you’ll never get lost in layers upon layers of folders. It
      also makes you create quite specific folders for each thing, ensuring that
      you can always find what you want.
    </p>

    <JDH2>Tell people where things are</JDH2>

    <p>
      “Hey Kristy, where can I find the payroll schedule?”
      <br />
      “Twelve dot oh-three.”
    </p>

    <p>Thanks, Kristy.</p>

    <JDH2>Open files and folders instantly</JDH2>

    <p>
      Because your folders contain the Johnny.Decimal number, you can open them
      without reaching for the mouse.
    </p>

    <Header size="medium" dividing>
      Mac users
    </Header>

    <p>
      Press ⌘+space to bring up{' '}
      <a href="https://support.apple.com/en-au/HT204014">Spotlight</a>. Type a
      Johnny.Decimal number. Press Return.
    </p>

    <p>
      (If you like this sort of thing, check out{' '}
      <a href="https://www.alfredapp.com/">Alfred</a>.)
    </p>

    <Header size="medium" dividing>
      Windows users
    </Header>

    <p>
      Click on the Start button. Type a Johnny.Decimal number in the Search box.
      Press Return.
    </p>

    <Header size="medium" dividing>
      Command line users
    </Header>

    <p>
      Tab completion becomes a joy when your folders start with structured,
      predictable numbers. Build a{' '}
      <Link to="/concepts/working-at-the-terminal/">small Bash script</Link> to
      pop you in to any folder instantly:
    </p>

    <div
      className={`${styles.johnnyDecimal_boxed} ${styles.johnnyDecimal_inlineBlock}`}
    >
      <strong>&nbsp;~ $</strong> cjd 54.14
      <br />
      <strong>&nbsp;54.14 My great folder $</strong> |&nbsp;&nbsp;
    </div>

    <JDH2>Fix your email</JDH2>

    <p>
      Put the Johnny.Decimal number in your email subject and you’ve instantly
      categorised everything. Your colleagues will think you have mystical
      powers because{' '}
      <Link to="/concepts/managing-email/">
        you’ll actually be able to find email again
      </Link>
      .
    </p>

    <JDH2>Display it on printed copies</JDH2>

    <p>
      Rather than including the complete file path on printed documentation,
      just add the Johnny.Decimal number.
    </p>

    <JDH2>Tag things in real life</JDH2>

    <p>
      Managing physical objects? Just write the Johnny.Decimal number on a
      sticky note.
    </p>

    <Divider section />

    <Header size="huge" className={styles.headerHuge_bordered}>
      Sold? Let’s go
    </Header>

    <p>
      By now you either{' '}
      <Link to="/concepts/">see the power of this and want more</Link>, or
      you’re{' '}
      <a href="https://start.duckduckgo.com/?q=dogs+wearing+clothes&iar=images&iax=images&ia=images&kp=1">
        {' '}
        confused and sad
      </a>
      .
    </p>

    <Navigation
      backURL={null}
      backTitle={null}
      forwardURL={null}
      forwardTitle={null}
    />
  </Layout>
);

export default IndexPage;
