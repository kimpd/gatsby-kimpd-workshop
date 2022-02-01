module.exports = {
  siteMetadata: {
    title: "KimPD's Workshop",
    description: "Portfolios for Projects, Programs",
    siteUrl: `https://kimpd.net`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ]
}
