import React from "react"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Link to="/">Your page</Link> |{" "}
        <Link to="/about">About this page of yours</Link>
      </header>
      {children}
    </div>
  )
}
