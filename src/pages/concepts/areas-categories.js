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

const GroupThingsTogether = () => (
  <>
    <span className={styles.solidUnderline}>All the 12 numbers</span>
    {`      `}
    <span className={styles.solidUnderline}>All the 13 numbers</span>
    <br />
    {`        12.34  12.35            13.03  13.04`}
    <br />
    <br />
    <span className={styles.solidUnderline}>All the 21 numbers</span>
    {`      `}
    <span className={styles.solidUnderline}>All the 22 numbers</span>
    <br />
    {`        21.01  21.02            22.38  22.39`}
    <br />
    <br />
    <span className={styles.solidUnderline}>All the 23 numbers</span>
    {`      `}
    <span className={styles.solidUnderline}>All the 31 numbers</span>
    <br />
    {`        23.21  23.22            31.70  31.71`}
    <br />
    {`        23.23  23.24`}
    <br />
    <br />
    <span className={styles.solidUnderline}>All the 32 numbers</span>
    <br />
    {`        32.55  32.56`}
  </>
);

const DoItAgain = () => (
  <>
    <span className={styles.solidUnderline}>All the 10-19 numbers</span>
    <br />
    {`   `}
    <span className={styles.dottedUnderline}>All the 12 numbers</span>
    <br />
    {`           12.34   12.35`}
    <br />
    {`   `}
    <span className={styles.dottedUnderline}>All the 13 numbers</span>
    <br />
    {`           13.03   13.04`}
    <br />
    <br />
    <span className={styles.solidUnderline}>All the 20-29 numbers</span>
    <br />
    {`   `}
    <span className={styles.dottedUnderline}>All the 21 numbers</span>
    <br />
    {`           21.01   21.02`}
    <br />
    {`   `}
    <span className={styles.dottedUnderline}>All the 22 numbers</span>
    <br />
    {`           22.38   22.39`}
    <br />
    {`   `}
    <span className={styles.dottedUnderline}>All the 23 numbers</span>
    <br />
    {`           23.21   23.22`}
    <br />
    {`           23.23   23.24`}
    <br />
    <br />
    <span className={styles.solidUnderline}>All the 30-39 numbers</span>
    <br />
    {`   `}
    <span className={styles.dottedUnderline}>All the 31 numbers</span>
    <br />
    {`           31.70   31.71`}
    <br />
    {`   `}
    <span className={styles.dottedUnderline}>All the 32 numbers</span>
    <br />
    {`           32.55   32.56`}
  </>
);

const CompanyNoNumbers = () => (
  <>
    {`Folder                                 This is a...`}
    <br />
    {`———————————————————————————————————————————————————`}
    <br />
    <span className={styles.solidUnderline}>Finance</span>
    {`                                AREA`}
    <br />
    {`    `}
    <span className={styles.dottedUnderline}>Tax returns</span>
    {`                        CATEGORY`}
    <br />
    {`    `}
    <span className={styles.dottedUnderline}>Payroll</span>
    {`                            CATEGORY`}
    <br />
    {`        September ’17 payroll          UNIQUE THING`}
    <br />
    {`        October ’17 payroll            UNIQUE THING`}
    <br />
    {`    `}
    <span className={styles.dottedUnderline}>Bookkeeping</span>
    {`                        CATEGORY`}
    <br />
    <br />
    <span className={styles.solidUnderline}>Administration</span>
    {`                         AREA`}
    <br />
    {`    `}
    <span className={styles.dottedUnderline}>Company registration</span>
    {`               CATEGORY`}
    <br />
    {`    `}
    <span className={styles.dottedUnderline}>Contracts</span>
    {`                          CATEGORY`}
    <br />
    {`        Cleaning contract              UNIQUE THING`}
    <br />
    {`        Office lease                   UNIQUE THING`}
    <br />
    {`    `}
    <span className={styles.dottedUnderline}>Staffing</span>
    {`                           CATEGORY`}
    <br />
    <br />
    <span className={styles.solidUnderline}>Marketing</span>
    {`                              AREA`}
    <br />
    {`    ...etc.                            ...etc.`}
  </>
);

const CompanyWithNumbers = () => (
  <>
    {`Folder                                 This is a...`}
    <br />
    {`———————————————————————————————————————————————————`}
    <br />
    <span className={styles.solidUnderline}>10-19 Finance</span>
    {`                          AREA`}
    <br />
    {`   `}
    <span className={styles.dottedUnderline}>11 Tax returns</span>
    {`                      CATEGORY`}
    <br />
    {`   `}
    <span className={styles.dottedUnderline}>12 Payroll</span>
    {`                          CATEGORY`}
    <br />
    {`      12.01 September ’17 payroll      UNIQUE THING`}
    <br />
    {`      12.02 October ’17 payroll        UNIQUE THING`}
    <br />
    {`   `}
    <span className={styles.dottedUnderline}>13 Bookkeeping</span>
    {`                      CATEGORY`}
    <br />
    <br />
    <span className={styles.solidUnderline}>20-29 Administration</span>
    {`                   AREA`}
    <br />
    {`   `}
    <span className={styles.dottedUnderline}>21 Company registration</span>
    {`             CATEGORY`}
    <br />
    {`   `}
    <span className={styles.dottedUnderline}>22 Contracts</span>
    {`                        CATEGORY`}
    <br />
    {`      22.01 Cleaning contract          UNIQUE THING`}
    <br />
    {`      22.02 Office lease               UNIQUE THING`}
    <br />
    {`   `}
    <span className={styles.dottedUnderline}>32 Staffing</span>
    {`                         CATEGORY`}
    <br />
    <br />
    <span className={styles.solidUnderline}>30-39 Marketing</span>
    {`                        AREA`}
    <br />
    {`   ...etc.                             ...etc.`}
  </>
);

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
            ${styles.johnnyDecimal_inlineBlock}`}
        >
          <span>
            {`23.24   31.70
22.39   13.04
31.71   21.02
22.38   13.03
23.21   23.22
32.56   12.34
12.35   21.01
32.55   23.23`}
          </span>
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
            <GroupThingsTogether />
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
            <GroupThingsTogether />
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
            <DoItAgain />
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
            <DoItAgain />
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
      <CompanyNoNumbers />
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
      <CompanyWithNumbers />
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

    <Header size="large" dividing className={styles.headerLarge_bordered}>
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
