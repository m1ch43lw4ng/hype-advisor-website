import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "../css/index.css"

const IndexPage = () => (
  <>
  <SEO title="Home" />
  
  <section id="landing">
	  Welcome to the Hype Advisor
	  <br/>
	  <Link to="/about/"> About Us </Link>
  </section>
  
  </>
)

export default IndexPage