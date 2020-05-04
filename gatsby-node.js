/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const getNews = require("./src/_data/news")

exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions

  const newsArray = await getNews()

  // Create redirects
  createRedirect({
    fromPath: "/",
    toPath: `/fr/index.html`,
    statusCode: 200,
    Language: `fr`,
  })

  newsArray.forEach(news =>
    createRedirect({
      fromPath: "/",
      toPath: `/${news.country}/index.html`,
      statusCode: 200,
      Country: `${news.country}`,
    })
  )
  // fallback
  createRedirect({
    fromPath: "/",
    toPath: `/gb/index.html`,
    statusCode: 404,
  })

  // Create a page for each.
  newsArray.forEach(news =>
    createPage({
      path: `/${news.country}`,
      component: require.resolve("./src/templates/index.js"),
      context: { articles: news.articles },
    })
  )

  // Create a page
  createPage({
    path: `/about`,
    component: require.resolve("./src/templates/about.js"),
    context: { newsArray },
  })
}
