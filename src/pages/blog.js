import React from "react"
import ReactGA from "react-ga"

import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import "../css/index.scss"

import "../css/blog.scss"

if (typeof window !== `undefined`) {
  ReactGA.initialize('UA-175519872-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const IndexPage = () => {
  return (
    <>
      <SEO title="Blog" />
      <div id="blog-header"><Header /></div>
      <section id="blog-landing">
        <div class="blog-landing-container">
          <h1 class="blog-title-1">Invest in streetwear starting here</h1>
          <h2 class="blog-title-2">We recognize that streetwear can be hard to understand, so we compiled a couple of blogs that can help you out.</h2>
        </div>
      </section>
      <div id="site">
        <main>
        <div id="posts">
          <a class="post" href="/blog1">
            <div class="post-image-wrapper">
              <img src={require("../images/blog1_1.png")} class="Chart-Photo"></img>
            </div>
            <div class="post-preview-wrapper">
              <h2>What is streetwear?</h2>
              <p>Let’s talk about one of this generation’s most prominent markets: streetwear. Seeping into everything relating to Gen Z’ers, this industry has taken the world by storm.</p>
              <div class="post-description-wrapper">
                <h4>Annette Yang</h4>
                <h4>25 NOV 2020 • 4 MIN READ</h4>
              </div>
            </div>
          </a>
        </div>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default IndexPage
