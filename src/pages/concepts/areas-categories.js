/* eslint-disable max-len */
// External components
import React from 'react';
import { Header, Responsive, Grid, Image } from 'semantic-ui-react';

// Internal components
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';

// Helper functions, styles, images, etc.
import styles from '../../styles/styles.module.css';
import img_finder_randomNumbers_category22_expanded from '../../images/Finder__random-numbers__category22-expanded.png';

const AreasCategories = () => (
  <Layout>
    <SEO
      title={'Areas & categories'}
      description={
        'What happens before the decimal point in a Johnny.Decimal number.'
      }
    />

    <Header size="huge" dividing className={styles.headerHuge_bordered}>
      Areas & categories
    </Header>

    <p>
      Let’s look again at the format of our numbers. It’s crucial that you
      understand why they look like they do.
    </p>

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      The complete Johnny.Decimal number
    </Header>

    <p>Just as a reminder, every Johnny.Decimal number looks like this.</p>

    <Grid stackable doubling columns={2} className={styles.grid_twoColumn}>
      <Grid.Column width={4}>
        <pre
          className={`
            ${styles.johnnyDecimal_boxed}
            ${styles.johnnyDecimal_inlineBlock}
          `}
        >
          23.24&nbsp;&nbsp;31.70
          <br />
          22.39&nbsp;&nbsp;13.04
          <br />
          31.71&nbsp;&nbsp;21.02
          <br />
          22.38&nbsp;&nbsp;13.03
          <br />
          23.21&nbsp;&nbsp;23.22
          <br />
          32.56&nbsp;&nbsp;12.34
          <br />
          12.35&nbsp;&nbsp;21.01
          <br />
          32.55&nbsp;&nbsp;23.23
        </pre>
      </Grid.Column>
      <Grid.Column>
        <p>
          In words, we have any two digits, followed by a decimal point,
          followed by two more digits.
        </p>
        <p>Here are a bunch of random numbers from a theoretical system.</p>
      </Grid.Column>
    </Grid>

    {/* Ugly hacks below as the breakpoints weren't working with the 'doubling'
    option for some reason. */}

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Group things together (categories)
    </Header>

    <Responsive minWidth={992}>
      <Grid stackable doubling columns={2} className={styles.grid_twoColumn}>
        <Grid.Column width={11}>
          <pre
            className={`
            ${styles.johnnyDecimal_boxed}
            ${styles.johnnyDecimal_inlineBlock}
          `}
          >
            <span className={styles.solidUnderline}>All the 12 numbers</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={styles.solidUnderline}>All the 13 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.34
            &nbsp;&nbsp;12.35
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13.03
            &nbsp;&nbsp;13.04
            <br />
            <br />
            <span className={styles.solidUnderline}>All the 21 numbers</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={styles.solidUnderline}>All the 22 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21.01
            &nbsp;&nbsp;21.02
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22.38
            &nbsp;&nbsp;22.39
            <br />
            <br />
            <span className={styles.solidUnderline}>All the 23 numbers</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={styles.solidUnderline}>All the 31 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23.21
            &nbsp;&nbsp;23.22
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31.70
            &nbsp;&nbsp;31.71
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23.23
            &nbsp;&nbsp;23.24
            <br />
            <br />
            <span className={styles.solidUnderline}>All the 32 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32.55
            &nbsp;&nbsp;32.56
          </pre>
        </Grid.Column>
        <Grid.Column width={5}>
          <p>
            Johnny.Decimal is all about{' '}
            <strong>grouping similar things together</strong>, so let’s start to
            do that.
          </p>
        </Grid.Column>
      </Grid>
    </Responsive>

    <Responsive maxWidth={991}>
      <Grid stackable doubling columns={2} className={styles.grid_twoColumn}>
        <Grid.Column width={3}>
          <p>
            Johnny.Decimal is all about{' '}
            <strong>grouping similar things together</strong>, so let’s start to
            do that.
          </p>
        </Grid.Column>
        <Grid.Column width={11}>
          <pre
            className={`
            ${styles.johnnyDecimal_boxed}
            ${styles.johnnyDecimal_inlineBlock}
            ${styles.johnnyDecimal_inlineBlock_smallFontForMobile}
          `}
          >
            <span className={styles.solidUnderline}>All the 12 numbers</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={styles.solidUnderline}>All the 13 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.34
            &nbsp;&nbsp;12.35
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13.03
            &nbsp;&nbsp;13.04
            <br />
            <br />
            <span className={styles.solidUnderline}>All the 21 numbers</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={styles.solidUnderline}>All the 22 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21.01
            &nbsp;&nbsp;21.02
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22.38
            &nbsp;&nbsp;22.39
            <br />
            <br />
            <span className={styles.solidUnderline}>All the 23 numbers</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={styles.solidUnderline}>All the 31 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23.21
            &nbsp;&nbsp;23.22
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31.70
            &nbsp;&nbsp;31.71
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23.23
            &nbsp;&nbsp;23.24
            <br />
            <br />
            <span className={styles.solidUnderline}>All the 32 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32.55
            &nbsp;&nbsp;32.56
          </pre>
        </Grid.Column>
      </Grid>
    </Responsive>

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Do it again (areas)
    </Header>

    <Responsive minWidth={992}>
      <Grid stackable doubling columns={2} className={styles.grid_twoColumn}>
        <Grid.Column width={7}>
          <pre
            className={`
            ${styles.johnnyDecimal_boxed}
            ${styles.johnnyDecimal_inlineBlock}
          `}
          >
            <span className={styles.solidUnderline}>All the 10-19 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;
            <span className={styles.dottedUnderline}>All the 12 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.34
            &nbsp;&nbsp;12.35
            <br />
            &nbsp;&nbsp;&nbsp;
            <span className={styles.dottedUnderline}>All the 13 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13.03
            &nbsp;&nbsp;13.04
            <br />
            <br />
            <span className={styles.solidUnderline}>All the 20-29 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;
            <span className={styles.dottedUnderline}>All the 21 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21.01
            &nbsp;&nbsp;21.02
            <br />
            &nbsp;&nbsp;&nbsp;
            <span className={styles.dottedUnderline}>All the 22 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22.38
            &nbsp;&nbsp;22.39
            <br />
            &nbsp;&nbsp;&nbsp;
            <span className={styles.dottedUnderline}>All the 23 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23.21
            &nbsp;&nbsp;23.22
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23.23
            &nbsp;&nbsp;23.24
            <br />
            <br />
            <span className={styles.solidUnderline}>All the 30-39 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;
            <span className={styles.dottedUnderline}>All the 31 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31.70
            &nbsp;&nbsp;31.71
            <br />
            &nbsp;&nbsp;&nbsp;
            <span className={styles.dottedUnderline}>All the 32 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32.55
            &nbsp;&nbsp;32.56
          </pre>
        </Grid.Column>
        <Grid.Column width={9}>
          <p>
            That’s starting to look more like something organised and a bit less
            like a bunch of random numbers. Let’s take it one step further.
          </p>
        </Grid.Column>
      </Grid>
    </Responsive>

    <Responsive maxWidth={991}>
      <Grid stackable doubling columns={2} className={styles.grid_twoColumn}>
        <Grid.Column>
          <p>
            That’s starting to look more like something organised and a bit less
            like a bunch of random numbers. Let’s take it one step further.
          </p>
        </Grid.Column>

        <Grid.Column width={6}>
          <pre
            className={`
            ${styles.johnnyDecimal_boxed}
            ${styles.johnnyDecimal_inlineBlock}
          `}
          >
            <span className={styles.solidUnderline}>All the 10-19 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;
            <span className={styles.dottedUnderline}>All the 12 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.34
            &nbsp;&nbsp;12.35
            <br />
            &nbsp;&nbsp;&nbsp;
            <span className={styles.dottedUnderline}>All the 13 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13.03
            &nbsp;&nbsp;13.04
            <br />
            <br />
            <span className={styles.solidUnderline}>All the 20-29 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;
            <span className={styles.dottedUnderline}>All the 21 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21.01
            &nbsp;&nbsp;21.02
            <br />
            &nbsp;&nbsp;&nbsp;
            <span className={styles.dottedUnderline}>All the 22 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22.38
            &nbsp;&nbsp;22.39
            <br />
            &nbsp;&nbsp;&nbsp;
            <span className={styles.dottedUnderline}>All the 23 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23.21
            &nbsp;&nbsp;23.22
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23.23
            &nbsp;&nbsp;23.24
            <br />
            <br />
            <span className={styles.solidUnderline}>All the 30-39 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;
            <span className={styles.dottedUnderline}>All the 31 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31.70
            &nbsp;&nbsp;31.71
            <br />
            &nbsp;&nbsp;&nbsp;
            <span className={styles.dottedUnderline}>All the 32 numbers</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32.55
            &nbsp;&nbsp;32.56
          </pre>
        </Grid.Column>
      </Grid>
    </Responsive>

    <Header size="medium" dividing>
      Interesting…
    </Header>

    <Grid stackable doubling columns={2} className={styles.grid_twoColumn}>
      <Grid.Column width={5}>
        <Image
          src={img_finder_randomNumbers_category22_expanded}
          bordered
          rounded
          style={{ width: '182px' }}
        />
      </Grid.Column>
      <Grid.Column>
        <p>You can almost imagine this looking like a set of folders.</p>

        <p>
          If you didn’t care about anything except the 22 numbers, you could
          just collapse the others like this.
        </p>
      </Grid.Column>
    </Grid>

    <Header size="huge" dividing className={styles.headerHuge_bordered}>
      Of course, we’ve done this backwards
    </Header>

    <p>
      When we decide to organise something with Johnny.Decimal, we don’t{' '}
      <em>start</em> with a bunch of numbers.{' '}
      <strong>We start like this</strong>:
    </p>

    <ul>
      <li>
        First, we divide everything in our system in to (at most) ten large
        buckets of stuff. We call those our <strong>areas</strong>, and we
        assign each area a range like{' '}
        <span className={styles.johnnyDecimal_boxed}>10-19</span>,{' '}
        <span className={styles.johnnyDecimal_boxed}>30-39</span> …{' '}
        <span className={styles.johnnyDecimal_boxed}>90-99</span>.
      </li>
      <li>
        Then, within each area, we break things up again in to (at most) ten
        more buckets. We call them <strong>categories</strong> and we assign
        them numbers like <span className={styles.johnnyDecimal_boxed}>11</span>
        , <span className={styles.johnnyDecimal_boxed}>12</span> …{' '}
        <span className={styles.johnnyDecimal_boxed}>19</span>.
      </li>
      <li>
        Finally, we assign each individual thing in our system to a category,
        and give it a unique number. We start at{' '}
        <span className={styles.johnnyDecimal_boxed}>.01</span> within each
        category, and work our way up through the numbers.
      </li>
    </ul>

    <p>
      Let’s use a small company as an example, and write it out minus the
      numbers.
    </p>

    <pre
      className={`
        ${styles.johnnyDecimal_boxed}
        ${styles.johnnyDecimal_inlineBlock}
        ${styles.johnnyDecimal_inlineBlock_smallFontForMobile}
        ${styles.johnnyDecimal_inlineBlock_marginBottom}
      `}
    >
      Folder&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      This is a...
      <br />
      ———————————————————————————————————————————————————
      <br />
      <span className={styles.solidUnderline}>Finance</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      AREA
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.dottedUnderline}>Tax returns</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CATEGORY
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.dottedUnderline}>Payroll</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CATEGORY
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;September ’17
      payroll&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UNIQUE
      THING
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;October ’17
      payroll&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UNIQUE
      THING
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.dottedUnderline}>Bookkeeping</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CATEGORY
      <br />
      <br />
      <span className={styles.solidUnderline}>Administration</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AREA
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.dottedUnderline}>Company registration</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      CATEGORY
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.dottedUnderline}>Contracts</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CATEGORY
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cleaning
      contract&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UNIQUE
      THING
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office lease
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      UNIQUE THING
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.dottedUnderline}>Staffing</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CATEGORY
      <br />
      <br />
      <span className={styles.solidUnderline}>Marketing</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AREA
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;...etc.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...etc.
    </pre>

    <p>
      All we really do with Johnny.Decimal—and if at this point you’ve realised
      this and are thinking, “hang on, all he’s done is put numbers in front of
      things” well then you’re not far wrong—is put numbers in front of things.
    </p>

    <p>
      <strong>
        But this transforms the way you think about and use everything.{' '}
      </strong>
      Trust me.
    </p>

    <p>Let’s put numbers in front of the system we just built above.</p>

    <pre
      className={`
        ${styles.johnnyDecimal_boxed}
        ${styles.johnnyDecimal_inlineBlock}
        ${styles.johnnyDecimal_inlineBlock_smallFontForMobile}
      `}
    >
      Folder&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This
      is a...
      <br />
      ———————————————————————————————————————————————————
      <br />
      <span className={styles.solidUnderline}>10-19 Finance</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AREA
      <br />
      &nbsp;&nbsp;&nbsp;
      <span className={styles.dottedUnderline}>11 Tax returns</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CATEGORY
      <br />
      &nbsp;&nbsp;&nbsp;
      <span className={styles.dottedUnderline}>12 Payroll</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CATEGORY
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.01 September ’17
      payroll&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UNIQUE THING
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.02 October ’17
      payroll&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UNIQUE THING
      <br />
      &nbsp;&nbsp;&nbsp;
      <span className={styles.dottedUnderline}>13 Bookkeeping</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CATEGORY
      <br />
      <br />
      <span className={styles.solidUnderline}>20-29 Administration</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AREA
      <br />
      &nbsp;&nbsp;&nbsp;
      <span className={styles.dottedUnderline}>21 Company registration</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      CATEGORY
      <br />
      &nbsp;&nbsp;&nbsp;
      <span className={styles.dottedUnderline}>22 Contracts</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CATEGORY
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22.01 Cleaning
      contract&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UNIQUE
      THING
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22.02 Office
      lease&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UNIQUE
      THING
      <br />
      &nbsp;&nbsp;&nbsp;
      <span className={styles.dottedUnderline}>23 Staffing</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CATEGORY
      <br />
      <br />
      <span className={styles.solidUnderline}>30-39 Marketing</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AREA
      <br />
      &nbsp;&nbsp;&nbsp;...etc.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...etc.
    </pre>

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      So long, cursed alphabet
    </Header>

    <p>
      What does this achieve? For one, it’s removed our dependence on the
      alphabet. The alphabet is a fine thing but it’s a terrible way to sort
      your files because things move around. Today we have:
    </p>

    <pre
      className={`
        ${styles.johnnyDecimal_boxed}
        ${styles.johnnyDecimal_inlineBlock}
        ${styles.johnnyDecimal_inlineBlock_marginBottom}
      `}
    >
      Administration
      <br />
      Finance
      <br />
      Marketing
    </pre>

    <p>…and tomorrow the exports department come along and do this:</p>

    <pre
      className={`
        ${styles.johnnyDecimal_boxed}
        ${styles.johnnyDecimal_inlineBlock}
        ${styles.johnnyDecimal_inlineBlock_marginBottom}
      `}
    >
      Administration
      <br />
      Exports
      <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← new folder!</strong>
      <br />
      Finance
      <br />
      Marketing
    </pre>

    <p>
      …and <span className={styles.johnnyDecimal_boxed}>Finance</span> isn’t the
      second thing in the list any more. This sounds like a small thing, but{' '}
      <strong>
        it makes it impossible for your brain to learn where something will be.
      </strong>
    </p>

    <Header size="medium" dividing>
      The Johnny.Decimal version
    </Header>

    <p>This is better:</p>

    <pre
      className={`
        ${styles.johnnyDecimal_boxed}
        ${styles.johnnyDecimal_inlineBlock}
        ${styles.johnnyDecimal_inlineBlock_marginBottom}
      `}
    >
      10-19 Administration
      <br />
      20-29 Finance
      <br />
      30-39 Marketing
      <br />
      40-49 Exports
    </pre>

    <p>
      Because our folders all start with a number, they’ll sort in very
      predictable way<sup>1</sup>. This concept applies throughout the system.
    </p>

    <div className={styles.footnote}>
      <p>
        <sup>1.</sup>&nbsp;I’ve seen many shared drives with numbers at the
        beginning of the folders: people are already solving the curse of the
        alphabet. They’re just not going far enough.
      </p>
    </div>

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      20, 60, 30, 90, whatever
    </Header>

    <p>
      At this point you might be wondering, well, why is{' '}
      <span className={styles.johnnyDecimal_boxed}>Finance</span> all of the
      numbers from <span className={styles.johnnyDecimal_boxed}>20-29</span> and
      why is <span className={styles.johnnyDecimal_boxed}>Exports</span>{' '}
      <span className={styles.johnnyDecimal_boxed}>40-49</span>? What do those
      numbers <em>mean</em>? And the answer is that they mean nothing. They’re
      just numbers. 40 isn’t better or worse than 20.
    </p>

    <Header size="huge" dividing className={styles.headerHuge_bordered}>
      In summary
    </Header>

    <p>
      On this page I’ve talked mostly about the way that we structure our areas
      and categories. By now you should have a good high-level understanding.
      You have categories of things and each category belongs to one area only.
      Areas group categories together.
    </p>

    <p>
      All of this happens <em>before the decimal</em>. Those two digits of the
      number <strong>are the category</strong>, and the first digit of the
      number tells you which area it’s in.
    </p>

    <p>
      What we’ve done here is organise a bunch of ‘stuff’ in to something with
      structure; we’ve created, essentially, a very simple database.
    </p>

    <Navigation
      backURL={'/concepts'}
      backTitle={'Concepts'}
      forwardURL="/concepts/ids"
      forwardTitle="IDs"
    />
  </Layout>
);

export default AreasCategories;
