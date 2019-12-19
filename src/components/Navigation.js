// External components
import React from 'react';
import { Link } from 'gatsby';
import { Divider, Grid } from 'semantic-ui-react';

const Navigation = ({ backTitle, backURL, forwardTitle, forwardURL }) => (
  <>
    {backURL || forwardURL ? (
      <>
        <Divider />
        <Grid columns={2}>
          <Grid.Column textAlign="left">
            {backURL ? <Link to={`${backURL}/`}>← {backTitle}</Link> : null}
          </Grid.Column>
          <Grid.Column textAlign="right">
            {forwardURL ? (
              <Link to={`${forwardURL}/`}>{forwardTitle} →</Link>
            ) : null}
          </Grid.Column>
        </Grid>
      </>
    ) : null}
  </>
);

export default Navigation;
