import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/milestone1.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Milestone 1" />
      <h1>Milestone 1</h1>

      <div class="Milestone-Paragraph">
        <h2>Exploring the relationship between item size and demand</h2>
        <p>
            When it comes to investing, sizing is a crucial factor: different sizes for the same sneaker have different growth rates, depending on the type of audience that the sneaker attracts. We recognize the need for precision in the streetwear reselling industry, more specifically the need to be able to pinpoint specific sizes that are the most profitable.
        </p>
        <p>
            Now, we are finally able to offer a <b>comprehensive breakdown of the demand by size for ANY sneaker</b> on the market.
        </p>
        <p>
            Here is our process. We first gather the exact number of pairs per size across all footsites (Champs, Footlocker, Eastbay, Footaction) and calculate the ratio for each. We then do the same for pairs sold on resale platform StockX. By comparing these ratios, we can obtain the historical demand per size based upon the sneaker’s current market value. With this information, resellers are to understand the comparative demand between sizes, allowing them to make a calculated decision on which size to purchase for ample profits.
        </p>
        <div class="Pine-Green-Charts">
            <img src={require("../images/pine-green-demand.png")} class="Chart-Photo"></img>
            <img src={require("../images/pine-green-demand-bar.png")} class="Chart-Photo"></img>
        </div>
        <p>
            For example, the Jordan 1 Pine Green data above indicates to buy into sizes 7.5-8.5, which sell in comparatively high volume on the aftermarket. More importantly, investors should especially focus on size 7.5, which has an especially high demand of approximately 12.22. 
        </p>
        <p>
        When investing into a sneaker, gauging its demand is the baseline to determine its future profitability. With this tool in hand, investors can finally quantitatively do so. Streetwear social media accounts and the sneaker community in general currently display which shoes and size ranges are profitable to invest in. However, we are looking to take it a <b>level higher</b>: to be as transparent as possible about what singular shoe size investors can gain time-worthy capital from.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
