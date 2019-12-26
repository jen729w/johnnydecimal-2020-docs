// External components
import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'gatsby';

// Internal components
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';

// Helper functions, styles, images, etc.
import styles from '../styles/styles.module.css';

const Privacy = () => (
  <Layout>
    <SEO title={'Privacy'} description={'Johnny.Decimal’s privacy policy.'} />
    <Header size="huge" dividing className={styles.headerHuge_bordered}>
      Privacy
    </Header>

    <p>
      I’m just a nerd building a site for a thing that I personally find useful.
      So when I say that “I take your privacy seriously”, it’s not just some
      spiel. It’s me, Johnny Noble, talking to you, my honoured guest.
    </p>

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Web trackers
    </Header>

    <p>
      I hate trackers more than you do. This site will <strong>never</strong>{' '}
      contain <strong>any</strong> 3<sup>rd</sup> party ‘web trackers’, i.e.
      code that attempts to uniquely identify you and follow you around the web.
    </p>

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Visitor metrics
    </Header>

    <p>I turned them off. All gone. Nada. Not a sausage. Zero, zilch, etc.</p>

    <p style={{ textDecoration: 'line-through' }}>
      I do have a personal interest in the number of people visiting this site,
      and their approximate (city-level) locations. To capture these statistics,
      I run <a href="https://matomo.org">Matomo</a> analytics on this site.
    </p>

    <p style={{ textDecoration: 'line-through' }}>
      I chose Matomo specifically because it is the secure, private option. Only
      I ever have access to the data, which I have anonymised and only keep for
      as long as necessary. Your visits to this site aren’t linked by me or
      anyone else to visits to any other site.
    </p>

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Your email address
    </Header>

    <p>
      If you choose to <Link to="/contact/">give me your email address</Link>, I
      will treat it with the utmost respect. I’ll never spam you, or give it to
      anyone else.
    </p>

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Google Fonts
    </Header>

    <p>
      Google Fonts is used to load the fonts on this page.{' '}
      {/* eslint-disable-next-line max-len */}
      <a href="https://developers.google.com/fonts/faq#what_does_using_the_google_fonts_api_mean_for_the_privacy_of_my_users">
        They say they don’t track these requests
      </a>
      , but I don’t mind if you block them. The site will still work.
    </p>

    <Header size="large" dividing className={styles.headerLarge_bordered}>
      Adverts
    </Header>

    <p>
      It’s hard to imagine that this site would ever be popular enough to tempt
      someone to advertise on it, but one never knows.
    </p>

    <p>
      If I <em>do</em> ever run an ad on this site, I will only ever allow a
      single, static, non-tracking ad; the sort of thing John Gruber runs on{' '}
      <a href="https://daringfireball.net">Daring Fireball</a>. It’s small,
      simple, everyone sees the same advert, and clicking on it takes you
      directly to a static URL on the advertiser’s site.
    </p>

    <Navigation />
  </Layout>
);

export default Privacy;
