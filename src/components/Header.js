/* eslint-disable react/no-did-mount-set-state */
// External components
import React from 'react';
import { Link } from 'gatsby';
import { Container, Menu } from 'semantic-ui-react';
import { Location } from '@reach/router';

const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName="active" {...props}>
    {children}
  </Menu.Item>
);

class Header extends React.Component {
  state = {
    jdHeaderCSS: {},
  };

  componentDidMount() {
    if (location.hostname.indexOf('localhost') === 0) {
      const jdHeaderCSS = { background: 'red', color: 'lightgrey' };
      this.setState({ jdHeaderCSS });
    } else if (location.hostname.indexOf('dev') === 0) {
      const jdHeaderCSS = { background: 'darkorange' };
      this.setState({ jdHeaderCSS });
    }
  }

  render() {
    const { jdHeaderCSS } = this.state;
    return (
      <Location>
        {() => {
          return (
            <div style={{ marginBottom: '2rem' }}>
              <Container>
                <Menu pointing secondary>
                  <LinkedItem to="/" exact="true" style={jdHeaderCSS}>
                    Johnny•Decimal
                  </LinkedItem>
                  <Menu.Item>
                    <div>
                      <a
                        href="https://play.johnnydecimal.com"
                        style={{ color: 'rgba(0, 0, 0, 0.87)' }}
                      >
                        Playground
                      </a>
                    </div>
                  </Menu.Item>
                </Menu>
              </Container>
            </div>
          );
        }}
      </Location>
    );
  }
}

export default Header;
