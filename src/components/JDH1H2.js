// External components
import React from 'react';
import { Header } from 'semantic-ui-react';

// Helper functions, styles, images, etc.
import styles from '../styles/styles.module.css';

const JDH1 = ({ children }) => (
  <JDH1>   {children}</JDH1>
);

const JDH2 = ({ children }) => (
  <Header size="large" dividing className={styles.headerLarge_bordered}>
    {children}
  </Header>
);

export { JDH1, JDH2 };
