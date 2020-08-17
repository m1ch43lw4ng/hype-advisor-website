import React from "react"
import { withPrefix, useStaticQuery, graphql } from "gatsby"
import ReactGA from "react-ga"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/milestone2.scss"

ReactGA.initialize('UA-175519872-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Milestone 2" />
      <h1 class="Milestone-Title">Milestone 2</h1>

      <div class="Milestone-Paragraph">
        <h2>Exploring the relationship between item bids/asks and resale value</h2>
        <p>
            Although our first project allowed us to pinpoint demand by size, we didn’t want to just stop there. Our goal is to explore short-term trends on the market, which allows us to provide <b>actionable</b> recommendations for investors. That’s where we arrived at our second project: a deeper exploration of demand by size by looking at the number of bids compared to asks.
        </p>
        <p>
            By sourcing StockX’s large amounts of data, we can project <b>potential room for growth, overall popularity among consumers, and short-term demand</b> for ANY sneaker.⁣
        </p>
        <p>
            Let’s first talk about the significance of bids and asks on the resale market. After we analyzed a multitude of recent sneaker releases on StockX and considered the perspective of the common reseller, we realized that bids represent the <b>quantity demanded</b> at the current price, while asks represent <b>quantity supplied</b> at the current price.⁣
        </p>
        <p>
            After gathering all the bids and asks on StockX, in this scenario for the Jordan 1 Court Purple Size 6.5Y, we noticed that there are almost double the number of asks than bids (92 vs 59). This disparity indicates an overwhelmingly large number of sellers compared to buyers, where more and more sellers are satisfied with the current market price. As a result, there is not a lot of room for growth. 
        </p>
        <div class="Court-Purple-Chart-Container">
            <img src={require("../images/court-purple-2020-6.png")} class="Court-Purple-Chart"></img>
        </div>
        <p>
            We then removed all outlier points, more specifically the unusually low bids and high asks that do not contribute to our evaluation of the shoe’s market value. What we’re left with are the values that realistically affect the sneaker’s short-term price because they are likely to be accepted by the buyer or seller. In the case of the Jordan 1 Court Purple Size 6.5Y pictured above, we see that there are clearly more bids than asks. In plain terms, there is more demand than supply at the current price. Without accounting for external factors, this indicates that the sneaker is likely to be on an upward trend in the coming weeks.
        </p>
        <p>
            <b>Our conclusion</b>: the total number of bids and asks indicates the sneaker’s room for growth, while the total without outliers indicates the sneaker’s short-term trend.
        </p>
        <p>
            There is no doubt that this data is vital to not only sneaker investors, but also anyone involved in the industry. Investors can have a more informed decision-making process, consumers can save tons of money, and resellers can evaluate a sneaker’s overall demand. While other streetwear social media accounts can gauge demand for the first two months, it becomes difficult to predict the trends after the initial release of such a sneaker.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
