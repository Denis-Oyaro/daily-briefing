import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Emoji from "../components/Emoji"

const generateVibe = () => {
  const vibes = [
    "...and you are awesome!",
    "...and have a wonderful day!",
    "...and you've got this!",
    "...and so is this puppy! 🐶",
  ]

  // choose a random vibe
  return vibes[Math.floor(Math.random() * vibes.length)]
}

export default function IndexPage({ data }) {
  const [vibe, setVibe] = useState("")

  useEffect(() => {
    setVibe(generateVibe())
  }, [])

  return (
    <div className="container">
      <h1>About {data.site.siteMetadata.title}</h1>
      <h2>This is a page for you</h2>
      <div className="vibe">{`You are great!${vibe}`}</div>
      <div>
        <Emoji symbol="💜" label="love" />
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
