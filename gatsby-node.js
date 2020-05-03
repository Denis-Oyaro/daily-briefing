/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const getNews = require("./src/_data/news")

exports.createPages = async ({ actions: { createPage } }) => {
  const { articles } = await getNews()
  // Create a page that lists all Pokémon.
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/index.js"),
    context: { articles },
  })
}
