/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.towerandlightning.com`,
    title: 'Tower & Lightning',
      menuLinks: [
        {
          name: 'home',
          link: '/'
        },
        {
          name: 'work',
          link: '/work'
        },
        {
          name: 'about',
          link: '/about'
        }
      ]
  },
  plugins: [
      "gatsby-plugin-sass", 
      "gatsby-plugin-image", 
      "gatsby-plugin-react-helmet", 
      "gatsby-plugin-sitemap", 
      "gatsby-plugin-sharp", 
      "gatsby-transformer-sharp", 
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          "name": "images",
          "path": "./src/images/"
        }, 
        resolve: `@nathanpate/gatsby-omni-font-loader`,
        options: {
          mode: "async",
          enableListener: true,
          preconnect: [`https://fonts.gstatic.com`],
          web: [
            {
              name: `Eczar`,
              file: `https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700;800&display=swap`,
            },
          ],
        },
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: /\.inline\.svg$/
          }
        }
      },
  ]
};