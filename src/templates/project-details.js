import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function projectDetails(props) {
  const { data } = props
  const { html } = data.markdownRemark
  const { title, stack, thumbs } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <main className="container">
        <h1>{title}</h1>
        <h3>{stack}</h3>
        <div className="mx-auto" style={{ maxWidth: "340px" }}>
          <GatsbyImage
            image={getImage(thumbs.childImageSharp.gatsbyImageData)}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </Layout>
  )
}

export default projectDetails

export const query = graphql`
  query ProjectsDetailsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
        stack
        title
        thumbs {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      html
    }
  }
`
