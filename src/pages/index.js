import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import "../css/index.scss"

const IndexPage = () => (
  // <Layout>
  <>
    <SEO title="Home" />
    <Header centeredHeader={true}/>

    <section id="landing">
    </section>
  </>

  // </Layout>
)

export default IndexPage
