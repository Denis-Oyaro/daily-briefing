import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Emoji from "../components/Emoji"
import getWeatherData from "../utils/weather"
import generateVibe from "../utils/vibes"

export default function IndexPage({ pageContext: { articles } }) {
  const [vibe, setVibe] = useState("")
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    setVibe(generateVibe())
    getWeatherData(setWeatherData)
  }, [])

  return (
    <>
      <Helmet>
        <title>A page for you</title>
      </Helmet>
      <div className="container">
        <h1>This is a page for you</h1>
        <div className="vibe">{`You are great!${vibe}`}</div>
        <div>
          <Emoji symbol="💜" label="love" />
        </div>

        {weatherData ? (
          <>
            <h2>Weather near you</h2>
            <p>{weatherData.name}</p>
            <p>{`${weatherData.main.temp}`}&deg;C</p>
            <p>{weatherData.weather[0].main}</p>
            <p>{weatherData.weather[0].description}</p>
          </>
        ) : null}

        <h2>News in your country</h2>
        <ul>
          {articles.map((article, indx) => (
            <li key={indx}>
              <h3>
                <a href={article.url}>{article.title}</a>
              </h3>
              <span>
                {article.source.name} - <time>{article.publishedAt}</time>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
