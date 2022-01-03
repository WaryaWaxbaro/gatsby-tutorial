import React from "react"
import Layout from "../../components/Layout"
import { graphql, Link } from "gatsby"

function Projects(props) {
  const { data } = props
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  console.log(data)
  return (
    <Layout>
      <main className="container">
        <h1 className="text-center">Projects</h1>
        <div className="row">
          {projects.map(project => (
            <div key={project.id} className="col-12 text-center">
              <Link to={`/projects/${project.frontmatter.slug}`}>
                <div>
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <p>Contact us</p>
          <p className="fs-12">{contact}</p>
        </div>
      </main>
    </Layout>
  )
}

export default Projects
// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
          date
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
