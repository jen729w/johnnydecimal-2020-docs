// External components
import React from 'react';
import { Grid } from 'semantic-ui-react';

// Internal components
import Version from './Version';

// Helper functions, styles, images, etc.
import styles from '../styles/styles.module.css';

const Fin = () => (
  <Grid columns={3} style={{ marginTop: '0.8em' }}>
    <Grid.Column />
    <Grid.Column textAlign="center">
      <div className={styles.fin}>⦿</div>
    </Grid.Column>
    <Grid.Column textAlign="right">
      <Version />
    </Grid.Column>
  </Grid>
);

export default Fin;

// ◆
