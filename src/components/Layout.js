import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import "../sass/main.scss"

function Layout(props) {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        {/* Content of each page */}
        {props.children}
      </main>
      <footer>
        <p>Copyrigh 2022 Gatsby tutorial</p>
      </footer>
    </div>
  )
}

export default Layout
