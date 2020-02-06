module.exports = {
  siteMetadata: {
    title: "Brian Hoang",
    author: "Brian Hoang",
    description: "Brian's Portfolio site built by Gatsby"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `brianeatsalot`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
  ]
}
