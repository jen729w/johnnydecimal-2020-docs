module.exports = {
  siteMetadata: {
    title: 'Johnny•Decimal',
    titleTemplate: '%s · J•D',
    description: 'A system to organise projects.',
    url: 'https://www.johnnydecimal.com', // No trailing slash allowed!
    siteUrl: `https://www.johnnydecimal.com`, // This for gatsby-plugin-sitemap
    image: '/images/favicon-1024.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@johnnydecimal',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify', // make sure to put last in the array
  ],
};
