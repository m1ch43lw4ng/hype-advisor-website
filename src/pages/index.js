import React from "react"
import EventListener, {withOptions} from 'react-event-listener';

import {TiArrowDown} from 'react-icons/ti';

import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Chart from "../components/chart"
import Popup from "../components/popup"
import "../css/index.scss"

const IndexPage = () => {

  var handleClick = () => {
    var elmnt = document.getElementById("site");
    elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  };

  var handleResize = () => {
    var navElement = document.getElementById("title-header");
    var site = document.getElementById("site");
    0 >= site.getBoundingClientRect().top ? navElement.style.backgroundColor = "#272832" : navElement.style.backgroundColor = "transparent";
  }

  var handleScroll = () => {
    var navElement = document.getElementById("title-header");
    var site = document.getElementById("site");
    0 >= site.getBoundingClientRect().top ? navElement.style.backgroundColor = "#272832" : navElement.style.backgroundColor = "transparent";
  }

  return (
    <>
      <SEO title="Home" />
      <div id="title-header"><Header centeredHeader={false} /></div>

      <EventListener
        target="window"
        onResize={handleResize}
        onScroll={withOptions(handleScroll, {passive: true, capture: false})}
      />

      <section id="landing">
        <div class="landing-container">
          <h1 class="title">Inside this generation's most dynamic market</h1>
          <button id="arrow" onClick={handleClick}>
            <TiArrowDown size={48} />
          </button>
        </div>
      </section>
      <Popup/>
      <div id="site">
        <main>
          <div class="what-we-do">
            <h2>What we do</h2>
            <p>
            The Hype Advisor is a premier financial services firm that operates specifically in the streetwear market, aiming to <b>democratize access to investment</b> in this generation’s most dynamic market.
            </p>
            <p>
            Our first step towards this goal was the creation of The Hype Fund, which revealed the underlying potential and capability of sneakers as an investment market. To extend this opportunity to others, we recognize the need to make quantitative metrics more <b>organized, universal, and practical.</b>
            </p>
            <p>
            Now, we have become the <b>one-stop-shop for everything streetwear investing</b>.
            </p>
            <p>
            Utilizing our experience, connections, and data analysis, we have created services that streamline the reselling process, bolster your existing investments in sneakers, and deepen your understanding of the market’s ins and outs.
            </p>
            <p>
            Check out our services <a href="/services">here</a>.
            </p>
          </div>

          <div class="consistent-earnings">
            <h2>Consistent earnings that show</h2>
            <p>
            Before The Hype Advisor, only those with inside information and 30+ hours a week of market research were able to profit from the booming industry. However, you can now grow in tandem with one of the most profitable markets worldwide, no matter your current financial capacity.
            </p>
          </div>

          <div class="statistics">
            <div class="statistic">
              <h5 class="figure">
                $100 B
              </h5>
              <h2 class="caption">
                size of primary sneaker market
              </h2>
            </div>
            
            <div class="statistic">
              <h5 class="figure">
                3x
              </h5>
              <h2 class="caption">
                projected growth of the resale market by 2025
              </h2>
            </div>

            <div class="statistic">
              <h5 class="figure">
                82%
              </h5>
              <h2 class="caption">
                industry respondents believe streetwear has a product lifespan > 1 year
              </h2>
            </div>
          </div>

          <div class="quote-intro">
            <h2>See what globally recognized leaders are saying about the streetwear industry</h2>
          </div>

          <div class="quotes">
            <div class="quote">
              <div class="quote-background">
                <div class= "quote-left">
                “
                </div>
                <div class= "quote-right">
                “
                </div>
              </div>
              <h6 class="quote-content">
                Just like Apple doesn't trade at the same price every single day in the market, nor does a particular sneaker trade for the same price day-to-day
              </h6>
              <h2 class="author">
                <h2 class="author-name">
                  Scott Cutler
                </h2>
                <p class="author-title">
                  CEO of StockX
                </p>
              </h2>
            </div> 
            <div class="quote">
              <div class="quote-background">
                <div class= "quote-left">
                “
                </div>
                <div class= "quote-right">
                “
                </div>
              </div>
              <h6 class="quote-content">
                Rather than investing in a traditional asset, classic stock, or bond, [people] are investing in sneakers
              </h6>
              <h2 class="author">
                <h2 class="author-name">
                  John Kernan
                </h2>
                <p class="author-title">
                  CFA of Cowen
                </p>
              </h2>
            </div>
          </div>

        </main>
        <Footer/>
      </div>
    </>
  )
}

export default IndexPage
