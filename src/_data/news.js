const axios = require("axios")
const countries = require("./countries")

require("dotenv").config()

async function getNews(country) {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`
    )
    return {
      country,
      articles: response.data.articles,
    }
  } catch (error) {
    console.error(error)
  }
}

module.exports = async function () {
  return await Promise.all(countries.map(getNews))
}
