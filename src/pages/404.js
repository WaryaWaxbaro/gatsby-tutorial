import React from "react"
import Layout from "../components/Layout"

function NotFound(props) {
  return (
    <Layout>
      <div>
        <h1>Sorry the page does not exist</h1>
        <a href="/">Go to Homepage</a>
      </div>
    </Layout>
  )
}

export default NotFound
