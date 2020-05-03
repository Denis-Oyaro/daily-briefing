import React from "react"
import { Helmet } from "react-helmet"

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About this page for you</title>
      </Helmet>
      <div className="container">
        <h1>This is a page for you!</h1>
        <p>
          It was made for you using html, CSS and Javascript. And served as a
          JAMStack site.
        </p>
      </div>
    </>
  )
}
