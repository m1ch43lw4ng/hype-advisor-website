import React from "react"
import { withPrefix, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/report.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      roicomp: file(relativePath: { eq: "roi-comp.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    
  return (
    <Layout>
      <SEO title="Sneaker Report: Jordan 1 Court Purple White" />
      <h1>Sneaker Report: Jordan 1 Court Purple White</h1>

      <div class="Report-Paragraph">
        <p></p>
      </div>

      <div class="About-Paragraph">
        <h2></h2>
      </div>
    </Layout>
  )
}

export default IndexPage
