module.exports = {
  plugins: [
    {
    resolve: `gatsby-plugin-sass`,
    options: {
      includePaths: ["src/styles/main.scss"],
      cssLoaderOptions: {
        camelCase: false,
      },
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Abril Fatface', 'Raleway\:300,700']
        }
      }
    }
  ],
}
