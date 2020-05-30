import React from "react"
import Chart from "../components/chart"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/industry.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="The Industry" />
    <h1>The Industry</h1>

    <div class="Industry-Paragraph">
      <h2>Finally, a viable alternative to the stock market.</h2>
      <p>
        Limited-edition sneakers have become the hottest commodity of our generation. Selling out within seconds, Jordans and Yeezys alike have unbelievably high demand, leading them to fetch thousands on the secondary resale market. Recently, more and more people have taken notice of its potential as an investment, and we are pioneering this movement.
      </p>
    </div>

    <Chart/>

    <div class="Industry-Paragraph">
      <h2>Exploding industry without limits</h2>
      <p>
Over the past decade, the streetwear industry has been growing at an exponential rate, and it doesn't seem to be slowing down anytime soon. With the resell market itself currently valued at $2 billion (per Business Insider), it is projected to hit $6 billion by 2025.
        <br/><br/>
Josh Luber - “Sneakers are this thing where first of all, it's a pure supply and demand market. Even if you're not in the same category, almost everybody has some association with sneakers at some point… It just touches so many people in so many different ways.” - WHY SNEAKERS. mention StockX, $1B valuation, put a picture of him. almost as a testimonial
      </p>
    </div>

    <div class="Industry-Paragraph">
      <h2>Here are the opportunities <i>The Hype Advisor</i> provides for you:</h2>
      <p>
        <b>Diversification.</b> For the longest time, investors have been limited to investing in stocks and bonds. Now, diversification outside these traditional markets and into the streetwear market is now possible. 
      </p>
      <p>
        <b>Profitability.</b> The streetwear market is unlike any other. There is a constant influx of new drops every week, providing an abundance of opportunities to invest. The constant demand for valued streetwear items combined with the decreasing supply of brand-new items (as items get worn/used) raises the resell price. As a result, there is no ceiling to which sneaker prices can jump to.
      </p>
    </div>

    <div class="Industry-Paragraph">
      <h2>Here’s how we take advantage of this market:</h2>
      <p>
        <i>The Hype Advisor</i> employs a fundamental research-intensive approach to streetwear investment with the ambition to analyze and <b>make projections for any sneaker</b> on the market.
        <br/><br/>
        Data has become <b>the core of decision-making</b> in the streetwear industry, whether it be on the consumer or reseller side. Hundreds of thousands of users flock to websites such as StockX and Goat daily to analyze a streetwear item’s performance on the resale market. Millennials of our generation often consult social media accounts for resale predictions and future profitability.
        <br/><br/>
        However, we strive to not only organize this data, but also interpret it in ways that will greatly <b>increase the efficiency of which items are bought and sold</b>.
        <br/><br/>
        Check out the projects that we are currently working on in our Investments page, and reach out to us if you would like to join us on our journey to transform the industry.
      </p>
    </div>
  </Layout>
)

export default IndexPage
