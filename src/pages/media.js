import React from "react"
import { withPrefix, useStaticQuery, graphql } from "gatsby"
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/media.scss"

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
    <>
      <div class="box"></div>
      <Layout>
        <SEO title="Sneaker Report: Jordan 1 Court Purple White" />

        <div class="Report-Title">
          <h1>Sneaker Report: Jordan 1 Court Purple White</h1>
        </div>

        <div class="Report-Photo-Container">
          <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} >
              <div class="Report-Title-Photo-Container">
                <img src={require("../images/court-purple-white.png")} class="Report-Photo"/>
              </div>
              <div class="Report-Title-Photo-Container">
                <img src={require("../images/court-purple-white-2.png")} class="Report-Photo"/>
              </div>
              <div class="Report-Title-Photo-Container">
                <img src={require("../images/court-purple-white-3.png")} class="Report-Photo"/>
              </div>
          </Carousel>
        </div>
        
        <div class="Report-Subtitle">
          <p>June 11, 2020<br/>By Max Shiau, Nathan Ju, Kaushal Anba</p>
        </div>

        <div class="Report-Paragraph">
          <h2>Introduction</h2>
          <p>
          On April 11, 2020, the sneaker community witnessed the second release of the Air Jordan 1 Retro High OG Court Purple. A sequel to the original Court Purples that released back in 2018, the 2020 pair features college blocking reminiscent of the iconic Chicago colorway, replacing the red leather with purple. Although its price tag increased from $160 to $170, these sneakers flew off shelves, fetching high resale prices and trading in high volume still to this day.
          </p>
        </div>

        <div class="Report-Paragraph">
          <h2>Qualitative Data</h2>
          <p>
          From a consumer standpoint, this sneaker as well as its 2018 release are appealing due to its unnatural and bold color. Prior to this, the sneaker community had yet to see a primarily purple sneaker, thus inflating demand significantly upon release. Despite its age, the sneaker community was even more ecstatic when the re-release of the Court Purples was announced. In fact, there were <b>additional looming factors</b> that drove the demand for the Court Purple 2.0 even higher. 
          </p>
          <p>
          With the quarantine came a new slew of internet trends. TikTok is a huge driving factor: its 60-second videos allow users to showcase their collections, post outfits, and perform creative dances. One example involves throwing the shoe out of view while simultaneously swapping to another user, which simulates the shoe being thrown to another person. Furthermore, hashtags such as #jordan1 and #jordan have tons of views, with 78.4 million and 1.7 billion respectively. As more TikTok influencers and casual users alike hopped on this trend to flaunt their newest shoes, the sneaker market was hit with a sudden surge of <b>females</b> purchasing grade school sized sneakers. 
          </p>
          <p>
          Prior to this, men sizes would be expected to be valued higher than grade school sizes, simply because more adults were purchasing Jordan 1’s compared to kids. However, the growing popularity of TikTok drove the prices of grade school sneakers beyond adult sizes, even though the retail price of adult sizes is much higher ($170 vs $130):
          </p>
          <div class="Court-Purple-Charts">
            <img src={require("../images/court-purple-white-adult.png")} class="Chart-Photo"></img>
            <img src={require("../images/court-purple-white-kids.png")} class="Chart-Photo"></img>
          </div>
          <p>
          Thus, when the release of the Court Purple 2.0 came along, the demand for grade school sizes on release day was monstrous. Today, it fetches on average a price tag of $250 across all sizes.
          </p>
          <p>
          Netflix also conveniently aired Michael Jordan’s The Last Dance documentary on April 19 to celebrate the career of legendary basketball player Michael Jordan. The documentary received critical acclaim, turning the heads of casual sports fans to the basketball superstar’s sneaker line. As a result, many of Jordan’s most iconic silhouettes, primarily the Jordan 1, and colorways have seen an astronomical spike. Displayed below is the price trend of the famous Air Jordan 1 Chicago (2015), which has doubled in price since the documentary’s release date.
          </p>
          <div class="Air-Jordan-Chicago-Container Report-Photo-Container">
            <img src={require("../images/air-jordan-1-chicago.png")} class="Report-Photo"></img>
          </div>
          <p>
          Third-party markets such as StockX have capitalized on this by grouping every sneaker worn in The Last Dance onto one page, allowing new consumers drawn in by the documentary to shop with ease.
          </p>
          <div class="The-Last-Dance-Container Report-Photo-Container">
            <img src={require("../images/the-last-dance.png")} class="Report-Photo"></img>
          </div>
        </div>

        <div class="Report-Paragraph">
          <h2>Quantitive Data</h2>
          <p>
          <h3>Demand</h3>
          Let’s first take a look at the demand table for the 2020 release of the Air Jordan 1 Court Purple. Right off the bat, we can see that there is a slightly greater demand for smaller adult sizes. More specifically, the current demand numbers for 7.5, 8, and 8.5 are 1.92, 1.19, and 1.13 respectively, with 7.5 receiving significantly less stock upon release. What do these numbers tell us? 
          </p>
          <div class="Court-Purple-Demand-Container Report-Photo-Container">
            <img src={require("../images/court-purple-demand.png")} class="Report-Photo"></img>
          </div>
          <p>
          First off, we can deduce that sizes 7.5, 8, and 8.5 have a higher demand due to lower stock compared to larger, more generally released sizing. However, we can take it one step further: even though only 893 pairs of size 7.5 Court Purples were released on footsites, they sell in a comparatively higher volume on StockX. This tells us that they have a significant amount of buy pressure compared to any other size. In short, <b>size 7.5 would be the best size to hold</b> for this Jordan 1 in men sizes, since its demand is likely to stand the test of time.
          </p>
          <p>
          Now let’s take a look at grade-school (GS) sizes. As predicted by existing streetwear social media accounts, larger GS sizes perform the best on the secondary market, with sizes 6Y, 6.5Y, and 7Y having demand numbers of 0.73, 0.71, and 0.83 respectively. Although size 7Y had the highest stock on footsites by far, it had an overwhelming demand on StockX. Size 5Y also performed well in the after market, with a demand number that just trails 7Y. Therefore, <b>sizes 7Y and 5Y</b> would be the best size to hold for this Jordan 1 in GS sizes.
          </p>
          <p>
          <h3>Room for Growth</h3>
          After breaking down demand by size, we took the adult and GS sizes with the highest demand and analyzed their potential room for growth. We specifically chose sizes 8 and 6.5Y, which represent the middle-ground for sizes 7.5-8.5 and 6Y-7Y. We also pulled data for the 2018 release because we believe that it is a good representation of how this release will perform in the future.
          </p>
          <p>
          The first step we took was to compile the total number of bids and ask for each release in their respective sizes of highest demand. The number of bids represents the pure number of buyers who are looking to purchase the sneaker, while the number of asks represents the pure number of sellers who are looking to profit off the sneaker. By looking at the disparity between the two, we can predict how much more the sneaker can grow in value.
          </p>
          <div class="Court-Purple-Volume-Container Report-Photo-Container">
            <img src={require("../images/court-purple-volume.png")} class="Report-Photo"></img>
          </div>
        </div>

        <div class="Report-Paragraph">
          <h2>Jordan 1 Court Purple 2020 (Size 8)</h2>
          <p>
          Before diving into the data, we first removed all of the outliers by determining a range of prices that we deemed reasonable compared to the current market value. Bids or asks that are outside of that range would not be considered in our histogram, as they are unlikely to be accepted by either the buyer or the seller. As a result, the values we took into consideration are likely to drive the price of the sneaker.
          </p>
          <div class="Report-Bid-Ask-Chart Report-Photo-Container">
            <img src={require("../images/court-purple-2020-8.png")} class="Report-Photo"></img>
          </div>
          <p>
          We begin by determining the number of bids versus the number of asks for this specific size. In this case, there are 24 bids and 17 asks of the Court Purples. Since there are more bids than asks, there is more demand than supply for the said sneaker at its current price of $265, likely driving the value up in the short term.
          </p>
          <p>
          Referring to the table, we can notice that there are far more asks than bids. This shows that despite the popularity of the sneaker, there is not a lot of room for growth in the long term, but a viable option for short-term investors seeking small profit margins.
          </p>
        </div>

        <div class="Report-Paragraph">
          <h2>Jordan 1 Court Purple 2020 (Size 6.5Y)</h2>
          <div class="Report-Bid-Ask-Chart Report-Photo-Container">
            <img src={require("../images/court-purple-2020-6.png")} class="Report-Photo"></img>
          </div>
          <p>
          Now looking at the histogram for GS sizes, we notice the same trend as the adult size: more bids than asks (16 bids vs 10 asks). As a result, we can expect a similar short-term growth in the coming weeks.
          </p>
          <p>
          However, we notice much less of a difference between the number of asks and bids, which for this size is only 2x more asks than bids. Since comparatively less sellers want to get rid of their GS pairs, we can conclude that the GS sizes have more room for growth compared to adult sizes.
          </p>
        </div>

        <div class="Report-Paragraph">
          <h2>Jordan 1 Court Purple 2018 (Size 8)</h2>
          <div class="Report-Bid-Ask-Chart Report-Photo-Container">
            <img src={require("../images/court-purple-2018-8.png")} class="Report-Photo"></img>
          </div>
          <p>
          We can see that the number of bids and asks is about the same on both our histogram and volume table. This indicates that the value of the 2018 release has reached an equilibrium price of $450. Furthermore, given the current market conditions, we can expect the 2020 Court Purples to reach a similar price in the next two years.
          </p>
        </div>

        <div class="Report-Paragraph">
          <h2>Jordan 1 Court Purple 2018 (Size 6.5Y)</h2>
          <div class="Report-Bid-Ask-Chart Report-Photo-Container">
            <img src={require("../images/court-purple-2018-6.png")} class="Report-Photo"></img>
          </div>
          <p>
          For this size, we doubled the range of prices to include within the histogram because not many pairs are sold on StockX. Despite this effort to get more data, there is only 1 bid and 8 asks for the sneaker. This lack of data explains the fact that GS sizes were nowhere near as prevalent as they are today. As a result, the 2018 pair is not an accurate representation of the current market.
          </p>
        </div>

        <div class="Report-Paragraph">
          <h2>Recommendation</h2>
          <p>
          <h3>Rating: 6/10</h3>
          </p>
          <p>
          Overall, the 2020 Jordan 1 Court Purple is a decent hold that will likely increase in value over time. For both adult and GS sizes, this sneaker has more bids than asks, indicating that we are likely to see short-term growth. The stability of the 2018 release also indicates that the 2020 pair will hold its value for many years to come. However, the room for growth is not substantial. If you decide to buy into pairs, we suggest preferencing GS sizes.
          </p>
        </div>

        <div class="Report-Paragraph">
          <h2>Reflection</h2>
          <p>
          Our Court Purple predictions above claimed that sizes 6Y, 6.5Y, 7Y, 7, 8, and 8.5 have a higher demand, more importantly pinpointing 7.5, 7Y, and 5Y to be the most ideal sizes to invest in. We now write this reflection a month after the initial publication to review the market changes, the accuracy of our predictions, and the expectations in the following months regarding this sneaker.
          </p>
          <p>
          Let’s first take a look at the adult sizes. We can see that size 7.5 has shown small signs of growth. With its latest sales settling at around $300, its market value is $20 higher than the value of the sneaker at the time of writing this report. On the other hand, larger sizes such as size 10 and smaller sizes such as size 7 have stayed relevantly stagnant, with their prices only fluctuating by a couple of dollars. 
          </p>
          <p>
          Regarding GS sizes, our prediction for size 7Y was spot on, with prices increasing $20 from $250 to $270. Popular grade school sizes in the range of 6Y-7Y have also all continued to grow upwards of $20+. This points to the higher room for growth that we predicted amongst GS sizes compared to adult sizes. However, smaller sizes such as 5Y have continued to maintain the same price.
          </p>
          <p>
          Overall, we were extremely accurate with our recommendations. Our claim that sizes 6Y-7Y and 7-8.5 having the most growth was 100% correct. However, one flaw we made was our prediction on the growth of size 5Y. In hindsight, 5Y is not as popular of a size in comparison to the larger GS sizes, with 6Y-7Y receiving the most attention in the sneaker resale community. For Milestone 3, we will explore social media attention surrounding any sneaker to continue to refine our investment strategy and better predict future trends.
          </p>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
