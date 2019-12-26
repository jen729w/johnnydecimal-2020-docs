// External components
import React from 'react';

// Internal components

// Helper functions, styles, images, etc.
import styles from '../styles/styles.module.css';

const Version = () => (
  <div className={styles.version}>v3.0.0 2019-12-26 17:21</div>
);

export default Version;

/* == Version number history ==================================================
 *
 * v3.0.0 2019-12-26 17:21  Started again to clear up the hot mess that was
 *                          authentication in the previous version.
 * -----------------------
 * v2.2.2 2019-01-09 08:42  Fix component.js → Component.js
 * F2.2.1 2019-01-09 08:15  Lift email form state up b/c <Responsive>; jest
 * v2.1.2 2019-01-06 10:49  Tweak the form; add option to email
 * v2.1.1 2019-01-05 10:24  Catch timeout errors
 * v2.1.0 2019-01-05 08:18  New email signup form
 * v2.0.2 2019-01-03 08:10  gatsby-plugin-sitemap
 * v2.0.1 2019-01-01 18:50  Fixed it with {...Responsive.onlyComputer}.
 * v2.0.0 2019-01-01 12:00  Pushing to v2. <Grid reversed="mobile"> workaround
 *                          in place while the <Responsive> issue is fixed.
 *                          Good enough to push out to the mailing list tho'!
 * v1.1.4 2018-12-31 11:04  Still has menu at top on mobile with apology.
 *
 */

/* == Version number scheme ===================================================
 *
 * MAJOR: Massive total re-do of the site, architecture, etc.
 * MINOR: Significant content updates; new content, new pages, changed layout.
 * PATCH: Tweaks, typos, layout fixes.
 *
 */
