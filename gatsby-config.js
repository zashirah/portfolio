module.exports = {
  siteMetadata: {
    title: `Zach Shirah | Software Engineer`,
    description: `Zach Shirah's Software Engineering Portfolio`,
    author: `Zach Shirah`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-source-airtable`,
    //   options: {
    //     apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
    //     tables: [
    //       {
    //         baseId: `appWDACYToaV5KQoy`,
    //         tableName: `contactInfo`,
    //       },
    //     ],
    //   },
    // },
  ],
}
