require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Dakshya Nepal`,
    description: `Your tagline here`,
    author: `@rawalyogendra`,
  },
  plugins: [
    {
      resolve: `gatsby-source-google-docs`,
      options: {
        folders: [`${process.env.GOOGLE_DOCS_FOLDER}`],
        debug: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "@fika/gatsby-source-cockpit",
      options: {
        token: process.env.GATSBY_API_KEY,
        baseUrl: process.env.GATSBY_API_URL,
        locales: ["en"],
        collections: [],
        singletons: [],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
