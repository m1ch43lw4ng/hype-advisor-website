import React from "react"
import { withPrefix, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactGA from "react-ga"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HypeFundFlagshipBatch from "../files/HypeFundFlagshipBatch.pdf"

import "../css/services.scss"

ReactGA.initialize('UA-175519872-1');
ReactGA.pageview(window.location.pathname + window.location.search);

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
      <h1 class="Services-Title">Our Services</h1>
      <p>
      If any of the following services interest you, be sure to visit the <a href="/interest_form">Contact Us</a> page.
      </p>
      <div id="Investments-The_Hype_Fund">
        <h2> The Hype Fund </h2>
        <p>
          <b>Streetwear’s first hedge fund. </b>
        </p>
        <p>
          With a minimum investment amount of just <b>$100</b>, we provide the opportunity for anyone to invest, regardless of financial background. Here’s how it works:
        </p>
        <p>
          Using our experience, connections, and data analysis, we purchase items that we predict to be bullish, or increase in resale value over time. After the investing time frame, we sell the items, collecting a small management and performance fee, and wire the earnings directly to our investors’ bank account. 
        </p>
        <p>
          Our process is as <b>simple and transparent as it gets</b>: investors are able to monitor their portfolios at any given time by logging on their portals, which display their investments, current market values, and the reasoning behind each investment. 
        </p>
        <p>
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
          Our ability to create a diversified and balanced portfolio paid off in our first batch, our investors in that round from October 2019 to April 2020: <b>our investors netted returns of 7.13%</b>, in comparison to <b>-9.64% returns of the Dow Jones Industrial Average</b>.
        </p>
        <div class="Investments-roi-comp">
          <Img fluid={data.roicomp.childImageSharp.fluid} />
        </div>
        <p>
          For more details on our first investment round, click <a href={HypeFundFlagshipBatch} download>here</a> to download our report on our flagship Hype Fund batch.
        </p>
      </div>

      <div id="Investments-The_Hype_Index">
        <h2> The Hype Index </h2>
        <p>
          In addition to The Hype Fund, we want to introduce <b>The Hype Index</b>, which consists of several research projects, each aiming to leverage the abundance of data to reveal the relationships between streetwear items and their resale prices.
        </p>
      </div>

      <div id="Investments-Capstone-Projects">
        <h3> Small Capstone Projects </h3>
        <p>Click on any of the below milestones to learn more about our projects:</p>
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
              <p class="Investments-Body"> Exploring the relationship between item bid/asks and resale value. </p>
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
        <div id="Investments-Comparison-Wrapper">
          <img src={require("../images/investments-comparison-1.png")} class="Investments-Comparison-Image"></img>
          <img src={require("../images/investments-comparison-2.png")} class="Investments-Comparison-Image"></img>
        </div>
      </div>

      <div id="Investments-Sneaker_Report">
        <h2> Sneaker Reports </h2>
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
      </div>


    </Layout>
  )
}

export default IndexPage
