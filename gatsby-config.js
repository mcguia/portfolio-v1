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
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
    {
        resolve: "gatsby-source-contentful",
        options: {
            spaceId,
            accessToken
        }
    }]
};
