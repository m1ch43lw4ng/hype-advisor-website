import React from "react"
import { withPrefix, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/services.scss"

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
      <SEO title="Services" />
      <h1>Our Services</h1>
      <p>
      If any of the following services interest you, be sure to visit the <a href="/interest_form">contact us</a> page.
      </p>
      <div id="Investments-The_Hype_Fund">
        <h2> The Hype Fund </h2>
        <p>
        Our first service was The Hype Fund, streetwear’s first hedge fund. With a minimum investment amount of just $100, we provided the opportunity for <b>anyone</b> to invest, regardless of financial background. Here’s how it worked:
        </p>
        <p>
        Using our experience, connections, and data analysis, we purchased items that we predicted to be bullish, or increased in resell value over time. After the <b>six-month</b> investing time frame from October 19 to April 19, we sold the items, collected a small management and performance fee, and wired the earnings directly to our investors’ bank account. Our process was <b>as simple and transparent as it gets</b>: we updated our investors monthly with their portfolios, which displayed their investments, current market values, and the reasoning behind each investment. 
        During the process, we seeked streetwear items with the following characteristics:
        </p>
        <p>
        <ol>
          <li>High Sales Volume</li>
          <li>Demand Greater than Supply</li>
          <li>Desirable Colorway from Consumer Perspective</li>
          <li>Strong Historical Performance in Same Silhouettes with Different Colorways</li>
          <li>Wide Customer Diversification</li>
          <li>Mass Amounts of Media Attention</li>
          <li>Easy to Liquidize</li>
        </ol>
        </p>
        <p>
        Our ability to create a diversified and balanced portfolio paid off: <b>our investors netted returns of 7.13%</b>, in comparison to <b>-9.64% returns of the Dow Jones Industrial Average</b>.
        </p>
        <div class="Investments-roi-comp">
          <Img fluid={data.roicomp.childImageSharp.fluid} />
        </div>
      </div>

      <div id="Investments-The_Hype_Index">
        <h2> The Hype Index </h2>
        <p>
          Introducing <b>The Hype Index</b>, which consists of several research projects, each aiming to leverage the abundance of data to reveal the relationships between streetwear items and their resale prices.
        </p>
      </div>

      <div id="Investments-The_Hype_Index">
        <h2> Small Capstone Projects </h2>
        <ul id="Investments-Projects_List">
          <li class="Milestone-Item">
            <a href="/milestone1"></a>
            <div class="Investments-Projects_List-Image">
              <img src={withPrefix("Investments-bar-chart.png")}></img>
            </div>
            <div class="Investments-Projects_List-Text">
              <h3> Milestone 1: </h3>
              <p class="Investments-Body">Exploring the relationship between item quantity and resale value.</p>
            </div>
          </li>
          <li class="Milestone-Item">
            <a href="/milestone2"></a>
            <div class="Investments-Projects_List-Image">
              <img src={withPrefix("Investments-User.png")}></img>
            </div>
            <div class="Investments-Projects_List-Text">
              <h3> Milestone 2: </h3>
              <p class="Investments-Body"> Exploring the relationship between social media attention and resale value. </p>
            </div>
          </li>
          {/* <li>
            <div class="Investments-Projects_List-Image">
              <img src={withPrefix("Investments-T-Shirt.png")}></img>
            </div>
            <div class="Investments-Projects_List-Text">
              <h3> Milestone 3: </h3>
              <p class="Investments-Body"> Exploring the relationship between item size and resale value</p>
            </div>
          </li> */}
        </ul>
      </div>

      <div id="Investments-Calculations">
        <p>
          Through extensive data-mining, machine learning, and artificial intelligence, we are able to calculate:
        </p>
        <img src={withPrefix("Investments-Comparison.png")}></img>
      </div>

      <div id="Investments-Sneaker_Report">
        <h2> Sneaker Report </h2>
        <p>
        Each streetwear item is rigorously researched by our in-house team of analysts. We conduct both absolute and relative valuation to gain a <b>holistic understanding of every item</b> - in addition to looking at the size, collaborator, stock numbers, and other factors of each item, we also compare it to past similar releases to determine its potential profitability.
        </p>
        <p>
        We also analyze the streetwear market as a whole, taking into consideration that streetwear items are luxury goods that have a strong international demand. <b>This market is here to stay.</b>
        </p>
        <p>
        Compiling our findings from the milestones above, we create sneaker reports for shoes we believe are worth attention.
        </p>
        <p>
        Check out our model report for the Jordan 1 Court Purple sneaker on our <a href="/media">media page at this link</a>.
        </p>
        <p>
        If any of the following services interest you, be sure to visit the <a href="/interest_form">Contact Us page</a>.
        </p>
      </div>


    </Layout>
  )
}

export default IndexPage
