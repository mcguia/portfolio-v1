import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GlobalStyle } from '@styles';
import { Navbar } from '@components';

const Layout = ({ children }) => {
    return (
        <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                menuLinks {
                  name
                  link
                }
              }
            }
          }
        `}
        render={({ site }) =>  (
            <Fragment>
                <div id="root">
                    <GlobalStyle />
                    <Navbar menuLinks={site.siteMetadata.menuLinks} />
                    {children}
                </div>
            </Fragment>
        )}
        />
    );
};

export default Layout;
