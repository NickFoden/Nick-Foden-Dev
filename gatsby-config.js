module.exports = {
  siteMetadata: {
    title: `Nick Is Online`,
    description: `A simple gatsby site for Nick is Online`,
    author: `Nick Foden`,
  },
  plugins: [
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
    `gatsby-plugin-styled-components`,
  ],
}
