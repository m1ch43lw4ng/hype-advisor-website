import React from "react"
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/about.scss"

const IndexPage = () => (
  // const data = useStaticQuery(graphql`
  //   query {
  //     passkey: file(relativePath: { eq: "passkey.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     rise: file(relativePath: { eq: "rise.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     transparency: file(relativePath: { eq: "transparency.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  <Layout>
    <SEO title="About" />
    <h1>About - Why Us?</h1>

    <div class="About-Paragraph">
      <p>
        Streetwear has not received the amount of attention it deserves.
When people think of investing, they think of stocks, real estate, and bonds. However, we firmly believe that streetwear is just as, if not more, viable of an investment option.
For many, investing is buried within complex graphs and incomprehensible audited financials. We want to remove this barrier of entry and introduce a simpler form of investing, one that includes factors we follow instinctively, whether it be hip hop or fashion.
From then on, we formed <i>The Hype Advisor</i>, a team of streetwear experts who have been passionate about the world of hype for as long as we can remember. Our 20+ years of combined success reselling - buying certain items when they reach their lowest points, waiting for a calculated period of time, and selling them high - allows us to fund our passion. <b>Now we want to expose this underground opportunity to others</b>.
      </p>
      <p>
      <b>Welcome to the future of investing.</b>
      </p>
    </div>

    <div class="About-Paragraph">
      <h2>Words simply aren’t enough. Our team created a hedge fund operating in this market, and here’s how we performed during our 6 months.</h2>
    </div>

    <div class="About-Paragraph">
      <img src={withPrefix("roi-comp.png")} class="About-roi-comp"></img>
      <p>Our results:
        <ul>
          <li>The Hype Fund: 10% ROI over 6 months</li>
          <li>The DOW: -10% ROI buying and selling at the same time</li>
        </ul>
      The next few tabs detail how we were able to do so well, but first:
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

export default IndexPage
