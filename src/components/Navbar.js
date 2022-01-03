import { Link } from "gatsby"
import React from "react"

function Navbar(props) {
  return (
    <nav>
      <h1>Gatsby Tutorial</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
