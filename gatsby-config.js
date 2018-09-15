module.exports = {
  siteMetadata: {
    title: 'Alexis Morin - Digital Product Designer',
    description: 'Portfolio Website of Alexis Morin, Interaction Designer',
    keywords: 'alexis morin, portfolio, ux design, interaction design',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'yal7u30yj8bm',
        accessToken:
          '63f3c115b79947ea6f6fdfdf98ff05ef8b9ccb8c9ddb998868d58843adf9c8ca',
      },
    },
  ],
}
