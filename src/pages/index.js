import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata
  const image = getImage(data.file.childImageSharp.gatsbyImageData)
  console.log("image ", image)
  return (
    <Layout>
      <main className={`container ${styles.main}`}>
        <h1>This is the body</h1>
        <p>{title}</p>
        <p>{description}</p>
        <button
          type="button"
          className="btn btn-primary rounded-0 btn-lg text-uppercase no-shadow"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "350px" }}>
          <img src="/kitchen_2.jpeg" className="img-fluid" alt="Kitchen" />
        </div>
        <div style={{ maxWidth: "500px" }}>
          <GatsbyImage image={image} alt="Test image" />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
    file(relativePath: { eq: "kitchen.jpeg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
