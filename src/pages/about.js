import React from "react"
import { withPrefix, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactGA from "react-ga"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/about.scss"

if (typeof window !== `undefined`) {
  ReactGA.initialize('UA-175519872-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

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
      <SEO title="About - Why Us?" />
      <h1>About</h1>

      <h2>Why Us</h2>

      <div class="About-Paragraph">
        <p><b>Streetwear has not received the amount of attention it deserves.</b></p>
        <p>When people think of investing, they think of stocks, real estate, and bonds. However, we firmly believe that streetwear is just as, if not more, viable of an investment option.</p>
        <p>For many, investing is buried within complex graphs and incomprehensible audited financials. We want to remove this barrier of entry and introduce a simpler form of investing, one that includes factors we follow instinctively, whether it be hip hop or fashion.
        From then on, we formed <i>The Hype Advisor</i>, a team of streetwear experts who have been passionate about the world of hype for as long as we can remember. Our 20+ years of combined success reselling - buying certain items when they reach their lowest points, waiting for a calculated period of time, and selling them high - allows us to fund our passion. <b>Now we want to expose this underground opportunity to others</b>.
        </p>
        <p>
        <b>Welcome to the future of investing.</b>
        </p>
      </div>

      <div class="About-Paragraph">
        <h2>Our Values and Mission</h2>
        <p>
          As <i>The Hype Advisor</i>, we aim to open up the doors of investment to anyone, regardless of your past experience. Finally, an <b>unsaturated investing service that anyone can participate in</b>.
        </p>
        <div class="About-values-wrapper">
          <div class="About-values-item">
            <div class="About-values-icon-wrapper">
              <img src={withPrefix("transparency.svg")} class="About-values-icon"></img>
            </div>
            <p><b>Transparency</b></p>
            <p>We are 100% transparent with our operational activities. The data we provide allows our clients to enrich themselves in the culture and intricacies of the resell world.</p>
          </div>

          <div class="About-values-item">
            <div class="About-values-icon-wrapper">
              <img src={withPrefix("passkey.svg")} class="About-values-icon"></img>
            </div>
            <p><b>Accessibility</b></p>
            <p>Our data allows clients to make the most informed decisions possible when investing in sneakers. All the information you need, right at your fingertips.</p>
          </div>

          <div class="About-values-item">
            <div class="About-values-icon-wrapper">
              <img src={withPrefix("rise.svg")} class="About-values-icon"></img>
            </div>
            <p><b>Growth with Intention</b></p>
            <p>We always put our clientele first, communicating with them every step of the way. Using both qualitative and quantitative tools, we're meticulous with the data mining process.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
