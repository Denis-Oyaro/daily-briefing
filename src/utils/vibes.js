export default () => {
  const vibes = [
    "...and you are awesome!",
    "...and have a wonderful day!",
    "...and you've got this!",
    "...and so is this puppy! 🐶",
  ]

  // choose a random vibe
  return vibes[Math.floor(Math.random() * vibes.length)]
}
