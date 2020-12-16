const dotenv = require("dotenv")

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}

const { spaceId, accessToken } = process.env

module.exports = {
  siteMetadata: {
    title: "Austin McGuire",
    description:
      "Austin McGuire is a software engineer who specializes in front end development and design.",
    siteUrl: "https://austinmcguire.dev",
    menuLinks: [
      {
        name: "work",
        link: "",
      },
      {
        name: "about",
        link: "/about",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146606367-1",
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Austin McGuire",
        short_name: "AustinMcGuire",
        start_url: "/",
        background_color: "#f4f4f4",
        theme_color: "#b3b9c4",
        display: "minimal-ui",
        icon: "src/images/logo.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`./src/components/Layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/public/**/*.html": [
            "cache-control: public, max-age=0, must-revalidate",
          ],
          "/*.css": ["cache-control: public, max-age=31536000, immutable"],
          "/*.js": ["cache-control: public, max-age=31536000, immutable"],
          "/sw.js": ["cache-control: public, max-age=0, must-revalidate"],
          "/public/page-data/*": [
            "cache-control: public, max-age=0, must-revalidate",
          ],
          "/static/*": ["cache-control: public, max-age=31536000, immutable"],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken,
      },
    },
  ],
}
