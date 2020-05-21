import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
  <SEO title="Home" />
  Welcome to the Hype Advisor

  <br/>

  <Link to="/about/"> About Us </Link>
  </>
)

export default IndexPage
