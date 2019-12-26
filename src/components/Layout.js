// External components
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Menu, Divider, Responsive } from 'semantic-ui-react';
import { Link } from 'gatsby';

// Internal components
import Header from './Header';
import Fin from './Fin';

// Helper functions, styles, images, etc.
import 'semantic-ui-less/semantic.less';

/* == Layout ==================================================================
 *
 * The plan for this is to pop the paths for /blog and /login out to their own
 * subdomains. Run them as entirely separate sites – that way you can mess about
 * with StaticQuery and Markdown etc. for the blog site, and the app site isn't
 * Gatsby at all, and this one stays nice and clean.
 *
 * https://[www.blog|app].johnnydecimal.com. Easy.
 *
 */

const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName="active" {...props}>
    {children}
  </Menu.Item>
);

const MenuItems = () => (
  <React.Fragment>
    <LinkedItem to="/" exact="true">
      Home
    </LinkedItem>

    <Responsive minWidth={768}>
      <Divider style={{ margin: '5px' }} />
    </Responsive>

    <LinkedItem to="/concepts/">Concepts</LinkedItem>
    <LinkedItem to="/concepts/areas-categories/">Areas & categories</LinkedItem>
    <LinkedItem to="/concepts/ids/">IDs</LinkedItem>
    <LinkedItem to="/concepts/saving-files/">Saving files</LinkedItem>
    <LinkedItem to="/concepts/keeping-notes/">Keeping notes</LinkedItem>
    <LinkedItem to="/concepts/tracking-your-numbers/">
      Tracking your numbers
    </LinkedItem>
    <LinkedItem to="/concepts/developing-your-own-system/">
      Developing your own system
    </LinkedItem>
    <LinkedItem to="/concepts/managing-email/">Managing email</LinkedItem>
    <LinkedItem to="/concepts/what-about-00-09/">What about 00-09?</LinkedItem>
    <LinkedItem to="/concepts/working-at-the-terminal/">
      Working at the terminal
    </LinkedItem>
    <LinkedItem to="/concepts/exceptions-to-the-rules/">
      Exceptions to the rules
    </LinkedItem>

    <Responsive minWidth={768}>
      <Divider style={{ margin: '5px' }} />
    </Responsive>

    <LinkedItem to="/contact/">Contact</LinkedItem>
    <LinkedItem to="/privacy/">Privacy</LinkedItem>
    <LinkedItem to="/licence/">Licence</LinkedItem>
  </React.Fragment>
);

class Layout extends React.Component {
  state = {
    LayoutState: {
      test: true,
    },
  };

  render() {
    const { children } = this.props;
    return (
      <>
        <Header />

        {/* Mobile */}
        <Responsive {...Responsive.onlyMobile}>
          <Container>
            <Grid relaxed stackable>
              {/* The content */}
              <Grid.Column mobile={16} tablet={12} computer={12}>
                {children}
              </Grid.Column>

              {/* The menu */}
              <Grid.Column mobile={16} tablet={4} computer={4}>
                <Divider horizontal>Contents</Divider>
                <Menu vertical fluid>
                  <MenuItems />
                </Menu>
                <Fin />
              </Grid.Column>
            </Grid>
          </Container>
        </Responsive>

        {/* Tablet */}
        <Responsive {...Responsive.onlyTablet}>
          <Container>
            <Grid relaxed stackable>
              {/* The menu */}
              <Grid.Column mobile={16} tablet={4} computer={4}>
                <Menu secondary pointing vertical fluid>
                  <MenuItems />
                </Menu>
              </Grid.Column>

              {/* The content */}
              <Grid.Column mobile={16} tablet={12} computer={12}>
                {children}
                <Fin />
              </Grid.Column>
            </Grid>
          </Container>
        </Responsive>

        {/* Computer+ */}
        <Responsive {...Responsive.onlyComputer}>
          <Container>
            <Grid relaxed stackable>
              {/* The menu */}
              <Grid.Column mobile={16} tablet={4} computer={4}>
                <Menu secondary pointing vertical fluid>
                  <MenuItems />
                </Menu>
              </Grid.Column>

              {/* The content */}
              <Grid.Column mobile={16} tablet={12} computer={12}>
                {children}
                <Fin />
              </Grid.Column>
            </Grid>
          </Container>
        </Responsive>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
