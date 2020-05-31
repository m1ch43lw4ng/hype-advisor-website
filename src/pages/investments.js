import React from "react"
import { withPrefix } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/investments.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Investments" />
    <h1>Investments</h1>

    <div id="Investments-The_Hype_Index">
      <h2> The Hype Index </h2>
      <p>
        Introducing <b>The Hype Index</b>, which consists of several research projects, each aiming to leverage the abundance of data to reveal the relationships between streetwear items and their resale prices.
      </p>
    </div>

    <div id="Investments-The_Hype_Index">
      <h2> Small Capstone Projects </h2>
      <ul id="Investments-Projects_List">
        <li>
          <div class="Investments-Projects_List-Image">
            <img src={withPrefix("Investments-bar-chart.png")}></img>
          </div>
          <div class="Investments-Projects_List-Text">
            <h3> Project 1: </h3>
            <p class="Investments-Body">Exploring the relationship between item quantity and resale value.</p>
          </div>
        </li>
        <li>
          <div class="Investments-Projects_List-Image">
            <img src={withPrefix("Investments-User.png")}></img>
          </div>
          <div class="Investments-Projects_List-Text">
            <h3> Project 2: </h3>
            <p class="Investments-Body"> Exploring the relationship between social media attention and resale value. </p>
          </div>
        </li>
        <li>
          <div class="Investments-Projects_List-Image">
            <img src={withPrefix("Investments-T-Shirt.png")}></img>
          </div>
          <div class="Investments-Projects_List-Text">
            <h3> Project 3: </h3>
            <p class="Investments-Body"> Exploring the relationship between item size and resale value</p>
          </div>
        </li>
      </ul>
    </div>

    <div id="Investments-Calculations">
      <p>
        Through extensive data-mining, machine learning, and artificial intelligence, we are able to calculate:
      </p>
      <img src={withPrefix("Investments-Comparison.png")}></img>
    </div>

    <div id="Investments-Calculations">
      <h2> Rigorous Research </h2>
      <p>

        Each streetwear item is rigorously researched by our in-house team of analysts. We conduct both absolute and relative valuation to gain a <b>holistic understanding of every item</b> - in addition to looking at the size, collaborator, stock numbers, and other factors of each item, we also compare it to past similar releases to determine its potential profitability.<br/><br/>

        We also analyze the streetwear market as a whole, taking into consideration that streetwear items are luxury goods that have a strong international demand. As a result, this market is here to stay.
      </p>
    </div>
  </Layout>
)

export default IndexPage
