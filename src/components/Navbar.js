import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

function Navbar(props) {
  const data = useStaticQuery(graphql`
    query SiteInfoTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata
  return (
    <nav>
      <h1>{title}</h1>
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
