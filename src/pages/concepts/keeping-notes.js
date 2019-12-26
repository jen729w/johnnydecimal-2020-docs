// External components
import React from 'react';
import { Header, Divider, Image } from 'semantic-ui-react';

// Internal components
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import { JDH1, JDH2 } from '../../components/JDH1H2';

// Helper functions, styles, images, etc.
import styles from '../../styles/styles.module.css';
import simplenote_3218_oh_wow_a_note from '../../images/Simplenote__3218-oh-wow-a-note.png';
import simplenote_search_22 from '../../images/Simplenote__search-22.png';

const KeepingNotes = () => (
  <Layout>
    <SEO
      title={'Keeping notes'}
      description={'How to use the system to keep notes.'}
    />

    <JDH1>Keeping notes</JDH1>

    <p>
      So far, we’ve mostly thought about using this system as somewhere to keep
      your files.
    </p>

    <p>
      But what if you didn’t always have to write things in a Word document or
      create an Excel spreadsheet? What if you had a place where you could keep
      little notes about things?
    </p>

    <p>
      What if it was super amazing quick so you could find anything instantly?
    </p>

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Become ludicrously efficient
    </Header>

    <p>
      What I’m about to show you is probably my favourite use of the
      Johnny.Decimal system.{' '}
      <strong>
        Start using this at work and watch your productivity go through the
        roof.
      </strong>
    </p>

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      What, and why?
    </Header>

    <p>
      Take our{' '}
      <span className={styles.johnnyDecimal_boxed}>22.02 Office lease</span>{' '}
      example from before. It’s great that we can store those documents in a
      place where we can find them again, but there’s probably stuff related to
      the lease that you don’t have in a document anywhere.
    </p>

    <p>
      What was the phone number of the lawyer that you used? The reference
      number of the bank transaction when you paid the deposit? Maybe a list of
      stuff you still need to do to complete the job?
    </p>

    <p>
      You <em>could</em> store that stuff in a Word document, but that would be
      a hideous waste of time. Word takes ages to open, and it’s really hard to
      search through all of your Word docs simultaneously.
    </p>

    <Divider section />

    <JDH1>Use Simplenote</JDH1>

    <p>
      You need some software. It’s free and available for every device you have.
    </p>

    <p>
      It’s called <a href="https://simplenote.com">Simplenote</a>
      <sup>1</sup>. Download it right now, or log in and use it online.
    </p>

    <div className={styles.footnote}>
      <sup>1.</sup>&nbsp;If you’re in a corporate environment and can’t install
      software, or don’t want to connect your stuff to ‘the cloud’, there are
      other excellent options available – see 'Advanced note taking apps',
      below.
    </div>

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      32.18 Oh, wow! A note
    </Header>

    <p>
      That’s it.{' '}
      <strong>
        We keep notes here, and we start them with the Johnny.Decimal number.{' '}
      </strong>
      Hopefully one of those cartoon lightbulbs just went off in your head. 💡
    </p>

    <Image
      src={simplenote_3218_oh_wow_a_note}
      bordered
      rounded
      alt="Simplenote window with a sample note"
      style={{ width: '648px', marginBottom: '20px' }}
    />

    <p>
      Simplenote is generally excellent because you can use the search function
      to filter your notes and show those that match. That’s brilliant. But
      what’s more brilliant is this.
    </p>

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      I only want to see things related to Contracts
    </Header>

    <p>
      Imagine this when you have hundreds of notes.{' '}
      <strong>
        You can instantly filter to show only those notes related to a specific
        category by typing three characters.
      </strong>{' '}
      It doesn’t matter what the titles of those notes are, because they’re
      categorised by number already.
    </p>

    <Image
      src={simplenote_search_22}
      bordered
      rounded
      alt="Simplenote window with a search for the term '22' selected"
      style={{ width: '648px', marginBottom: '20px' }}
    />

    <p>
      Of course you can <em>combine</em> this with the standard text search that
      Simplenote provides. This allows you to narrow down your notes instantly.
      Say you have notes referring to ‘client XYZ’ all through your system (as
      well as notes about your other clients), but you only want to see ‘any
      contract stuff related to client XYZ’. Just type{' '}
      <span className={styles.johnnyDecimal_boxed}>22. XYZ</span> in the
      Simplenote search box.
    </p>

    <JDH1>Advanced note taking apps</JDH1>

    <p>
      Here’s what I personally use – but don’t mess about here if you’re a
      beginner, Simplenote does the job. Come back when you’re <em>really</em>{' '}
      comfortable with how all this works.
    </p>

    <Header size="medium" dividing>
      At work (behind a firewall)
    </Header>

    <p>
      For Windows,{' '}
      <a href="http://resoph.com/ResophNotes/Welcome.html">Resophnotes</a> runs
      without administrator privileges and will store files locally. It{' '}
      <em>can</em> sync to Simplenote, but I’ve never tried it. It’s a bit rough
      around the edges but it’s real fast. This is what I use every day if I’m
      working in a corporate environment. Free.
    </p>

    <Header size="medium" dividing>
      At home (or if you work on a Mac)
    </Header>

    <p>
      For Mac, <a href="http://brettterpstra.com/projects/nvalt/">nvALT</a> is
      what I use. It synchronises to Simplenote and is quick and simple, but
      it’s ancient now and isn’t being updated. The developers are working on{' '}
      <a href="https://nvultra.com/">nvUltra</a>, which I’ll buy the instant
      it’s available.
    </p>

    <p>
      For iOS, <a href="https://simplenote.com">Simplenote</a> has an app. There
      are tons of other options – see{' '}
      <a href="http://www.bear-writer.com">Bear</a>, or just search the App
      Store. As long as it synchronises and allows quick search of all of your
      notes, it’ll work.
    </p>

    <Navigation
      backURL={'/concepts/saving-files'}
      backTitle={'Saving files'}
      forwardURL={'/concepts/tracking-your-numbers'}
      forwardTitle={'Tracking your numbers'}
    />
  </Layout>
);

export default KeepingNotes;
