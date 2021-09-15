module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint:
          "https://api-us-east-1.graphcms.com/v2/cktl3csav0mgf01z9fitje0a5/master",
        token:
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MzE2ODc2NzgsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrdGwzY3NhdjBtZ2YwMXo5Zml0amUwYTUvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYmYzMDJjN2QtM2U3Zi00OTNhLThlZjUtNzY5NzM2MjJkYjMwIiwianRpIjoiY2t0bDRwcXFjMG5tNDAxejEyaXdrZ2tqMCJ9.SZs5_Mlc9S04Tm7PUvmhkxcZIhutHOnr1jOAwGlGtHEVp0bFxUtNQvfstx4Eb3NOVnAXqaxSQr4oXxM9WSNNZ6kC8cVg_Pof5PqoNu9O9Zn7X3brkxBkQkiEJimN5wtNcpfVrFuXdQHmsPwzDoGMdTMfRKHQif7t2teDzDdeRlgYPQ-VeeY6U9EgN1EJSaGxQ7MzUl_il9xNjPUeBoO2KVixRn7n6bOgGgrbbkltFa_E4Govp6gLkQKPnYZR9ORFcUHlvRNDyC_pvxR9kJVRYqRlcS9V5tPrVy4MQqIK8rk1hUD1L-937sf22q3pMLid-7DPjnuTIKa5mtl_nh32K1eiiFnBpGFmICzyQu9XMC5mHULyfvYmaN_6aEp_ZAvUFP-KxU8ReY6xV5V7NJOq-faircU5nJPikZB9eJKKGxy7SPJ7KLDUmxPLOGfc5V48J9hbdXClgkBHW1GSFlc2mV3XLmFS0kOgzAi4eLM44dwVwnETwV5HX-RzKBYI1qgF5bTq1fBRKzDcC49ePSyRs3qJdIhoHEpBWTx7D4106rbGGZFPUAUL5TWkrDXdMkNV5TpHYmyCN498aE1eJ1TNWJTrKjp7vIL26omoCvebOhnU8UaJaVm-JluPl4GvqqE6WRXm-NI8g9LUQ0VCP03yCJpu7PnoghA89Fd1n2fNNBM",
      },
    },


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}