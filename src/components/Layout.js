import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import { GlobalStyle } from "@styles"
import { Navbar } from "@components"

import favicon32 from "@images/favicon/favicon-32x32.png"
import favicon16 from "@images/favicon/favicon-16x16.png"
import faviconApple from "@images/favicon/apple-touch-icon.png"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              siteUrl
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={({ site }) => (
        <Fragment>
          <div class="main-overlay" />
          <div id="root">
            <Helmet
              title={site.siteMetadata.title}
              htmlAttributes={{ lang: "en" }}
            >
              <meta
                name="description"
                content={site.siteMetadata.description}
              />
              <meta name="image" content={favicon32} />
              <meta itemprop="name" content="Austin McGuire" />
              <meta
                itemprop="description"
                content={site.siteMetadata.description}
              />
              <meta itemprop="image" content={favicon32} />

              <meta name="og:title" content="Austin McGuire" />
              <meta
                name="og:description"
                content={site.siteMetadata.description}
              />
              <meta name="og:image" content={favicon32} />
              <meta name="og:url" content={site.siteUrl} />
              <meta name="og:site_name" content="Austin McGuire" />
              <meta name="og:locale" content="en_US" />
              <meta name="og:type" content="website" />

              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href={faviconApple}
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href={favicon32}
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href={favicon16}
              />
              <meta name="msapplication-TileColor" content="#000000" />
              <meta name="theme-color" content="#ffffff" />
            </Helmet>
            <GlobalStyle />
            <Navbar menuLinks={site.siteMetadata.menuLinks} />
            {children}
          </div>
        </Fragment>
      )}
    />
  )
}

export default Layout
