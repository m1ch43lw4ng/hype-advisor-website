import React from "react"
import ReactGA from "react-ga"

import Layout from "../components/layout"
import SEO from "../components/seo"

if (typeof window !== `undefined`) {
  ReactGA.initialize('UA-175519872-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Whoops!</h1>
    <p>Unfortunately, we can't find that shoe. Our engineers are on it!</p>
  </Layout>
)

export default NotFoundPage
