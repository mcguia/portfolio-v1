const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
    dotenv.config();
}

const { spaceId, accessToken } = process.env;


module.exports = {
    siteMetadata: {
        menuLinks:[{
            name:'Work',
            link:'/'
        },
        {
            name:'About',
            link:'/about'
        },
        {
            name:'Contact',
            link:'/contact'
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
