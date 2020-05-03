import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
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

export default function IndexPage() {
  const [vibe, setVibe] = useState("")

  useEffect(() => {
    setVibe(generateVibe())
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
      </div>
    </>
  )
}
