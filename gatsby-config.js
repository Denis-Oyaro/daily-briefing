module.exports = {
  siteMetadata: {
    title: `Daily Briefing`,
    description: `A site for displaying daily vibes, news, and weather.`,
    author: `Denis Oyaro`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
      },
    },
  ],
}
