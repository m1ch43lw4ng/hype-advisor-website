import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/industry.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      sneaker: file(relativePath: { eq: "sneaker-stock.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      index: file(relativePath: { eq: "industry-sneaker-index.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chart: file(relativePath: { eq: "chart.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      piechart: file(relativePath: { eq: "piechart.png" }) {
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
      <SEO title="The Industry" />
      <h1>The Industry</h1>

      <div class="Industry-Container">
        <div class="Industry-Title-Image-Container">
          <div class="Sneaker-Stock">
            <Img fluid={data.sneaker.childImageSharp.fluid}/>
          </div>
          <div class="Industry-Title-Paragraph">
            <h2>Finally, a viable alternative to the stock market.</h2>
            <p>
              Limited-edition sneakers have become the hottest commodity of our generation. Selling out within seconds, Jordans and Yeezys alike have unbelievably high demand, leading them to fetch thousands on the secondary resale market. Recently, more and more people have taken notice of its potential as an investment, and we are pioneering this movement.
            </p>
          </div>
        </div>
      </div>

      <div class="Industry-Paragraph Industry-Without-Limits">
        <h2>Exploding industry without limits</h2>
        <p>
          Over the past decade, the streetwear industry has been growing at an <b>exponential</b> rate, and it doesn't seem to be slowing down anytime soon. With the resell market itself currently valued at $2 billion (per <a href="https://www.businessinsider.com/most-expensive-sneakers-sold-last-year-resale-2019-4" target="_blank"><u>Business Insider</u></a>), it is projected to hit <b>$6 billion by 2025</b>.
          <br/><br/>
          The widespread impact of sneakers is simply undisputable. Josh Luber, the CEO of StockX, mentions that “sneakers are this thing where first of all, it's a pure supply and demand market. Even if you're not in the same category, <b>almost everybody has some association with sneakers at some point</b>… It just touches so many people in so many different ways.” They have become a defining part of everything culture, seeping into sports, music, art, you name it.
        </p>
      </div>

      <div class="Industry-Paragraph">
        <h2>Resilient to Recession</h2>
        <p>
          Unlike other traditional investment markets, streetwear has proven to be resilient to external shocks. One prime example is the coronavirus, which led the stock market to plummet <b>30%</b> within the first month. To see whether the same was observed in the sneaker market, we crafted a sneaker index, which consists of the most popular sneakers at the time. What we found was astounding: the market only went down <b>7.15%</b>. This only reinforced our belief: people are always looking to buy sneakers, no matter the situation.
        </p>
        <h3 class="Index-Title"></h3>
        <div class="Index-Chart">
          <h3>Sneaker Index</h3>
          <br></br>
          <Img fluid={data.index.childImageSharp.fluid} />
        </div>
      </div>

      <div class="Industry-Paragraph">
        <h2>Here's how we take advantage of this market</h2>
        <p>
          The Hype Advisor employs a fundamental research-intensive approach to streetwear investment with the ambition to analyze and <b>make projections for any sneaker</b> on the market.
        </p>
        <p>
          Data has become <b>the core of decision-making</b> in the streetwear industry, whether it be on the consumer or reseller side. Hundreds of thousands of users flock to websites such as StockX and Goat daily to analyze a streetwear item’s performance on the resale market. Millennials of our generation often consult social media accounts for resale predictions and future profitability.
        </p>
        <p>
          However, we strive to not only organize this data, but also interpret it in ways that will greatly <b>increase the efficiency of which items are bought and sold</b>.
        </p>
      </div>

      <div class="Industry-Paragraph">
        <h2>Here are the opportunities <i>The Hype Advisor</i> provides for you:</h2>
        <p>
          <b>Access.</b> Sneakers provide many of the similar benefits, even more, compared to traditional assets such as stocks and bonds.
          <div class="Industry-Chart">
            <Img fluid={data.chart.childImageSharp.fluid} />
          </div>
        </p>
        <p>
          <b>Diversification.</b> For the longest time, investors have been limited to investing in stocks and bonds. Now, <b>diversification</b> outside these traditional markets and into the streetwear market is now possible. 
          <div class="Industry-PieChart">
            <Img fluid={data.piechart.childImageSharp.fluid} />
          </div>
        </p>
        <p>
          <b>Profitability.</b> The streetwear market is unlike any other. There is a <b>constant influx of new drops</b> every week, providing an abundance of opportunities to invest. The constant demand for valued streetwear items combined with the decreasing supply of brand-new items (as items get worn/used) raises the resell price. As a result, there is no ceiling to which sneaker prices can jump to.
        </p>
        <p>
          Check out the <a href="services"><u>services</u></a> we are currently working on, and contact us if you would like to join us on our journey to transform the industry.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
