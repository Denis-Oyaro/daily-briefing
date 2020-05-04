import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

export default function AboutPage({ pageContext: { newsArray } }) {
  return (
    <>
      <Helmet>
        <title>About this page for you</title>
      </Helmet>
      <div className="container">
        <h1>This page is really for you</h1>
        <p>
          It was made for you using HTML, CSS and JavaScript. And served as a
          JAMStack site.
        </p>
      </div>
      <div>
        {newsArray.map((news, indx) => {
          return (
            <span key={indx}>
              <Link to={`/${news.country}`}>{news.country}</Link>{" "}
            </span>
          )
        })}
      </div>
    </>
  )
}
