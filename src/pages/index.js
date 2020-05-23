import React from "react"

import Header from "../components/header"
import SEO from "../components/seo"
import "../css/index.scss"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header centeredHeader={true}/>

    <section id="landing">
    </section>
  </>
)

export default IndexPage
