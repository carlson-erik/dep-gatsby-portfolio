module.exports = {
  siteMetadata: {
      title: `portfolio`,
    siteUrl: `https://erikcarlson.dev`
  },
  plugins: [
    `gatsby-plugin-styled-components`, 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/tab-icon.png"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }
  ]
};