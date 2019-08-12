const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
    dotenv.config();
}

const { spaceId, accessToken } = process.env;


module.exports = {
    siteMetadata: {
        menuLinks:[{
            name:'work',
            link:'/'
        },
        {
            name:'about',
            link:'/about'
        }]
    },
    plugins: [
    "gatsby-plugin-styled-components",
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
            accessToken
        }
    }]
};
