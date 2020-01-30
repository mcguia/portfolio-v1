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
        link: "/",
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
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`./src/components/Layout.js`),
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
