import React from "react"
import EventListener, {withOptions} from 'react-event-listener';

import {TiArrowDown} from 'react-icons/ti';

import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Chart from "../components/chart"
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
                industry respondents who believe streetwear has a product lifespan of at least 1 year
              </h2>
            </div>
          </div>

          <div>
            <h2>See what globally recognized leaders are saying about the streetwear industry</h2>
          </div>

          <div class="quotes">
            <div class="quote">
              <div class="quote-background">
                <svg width="541" height="285" viewBox="0 0 541 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M104.011 85.6V116.4H75.6109V85.8C75.6109 77 78.2109 69.4667 83.4109 63.2C88.7443 56.9333 95.6109 53.2667 104.011 52.2V65.4C95.2109 68.3333 90.8109 75.0667 90.8109 85.6H104.011ZM61.4109 85.6V116.4H33.0109V85.8C33.0109 77 35.6109 69.4667 40.8109 63.2C46.1443 56.9333 53.0109 53.2667 61.4109 52.2V65.4C52.6109 68.3333 48.2109 75.0667 48.2109 85.6H61.4109Z" fill="white" fill-opacity="0.3"/>
                  <g filter="url(#filter0_d)">
                  <path d="M436.989 199.4V168.6H465.389V199.2C465.389 208 462.789 215.533 457.589 221.8C452.256 228.067 445.389 231.733 436.989 232.8V219.6C445.789 216.667 450.189 209.933 450.189 199.4H436.989ZM479.589 199.4V168.6H507.989V199.2C507.989 208 505.389 215.533 500.189 221.8C494.856 228.067 487.989 231.733 479.589 232.8V219.6C488.389 216.667 492.789 209.933 492.789 199.4H479.589Z" fill="white" fill-opacity="0.3"/>
                  </g>
                  <defs>
                  <filter id="filter0_d" x="432.989" y="168.6" width="79" height="72.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                  </filter>
                  </defs>
                </svg>
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
                <svg width="541" height="285" viewBox="0 0 541 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M104.011 85.6V116.4H75.6109V85.8C75.6109 77 78.2109 69.4667 83.4109 63.2C88.7443 56.9333 95.6109 53.2667 104.011 52.2V65.4C95.2109 68.3333 90.8109 75.0667 90.8109 85.6H104.011ZM61.4109 85.6V116.4H33.0109V85.8C33.0109 77 35.6109 69.4667 40.8109 63.2C46.1443 56.9333 53.0109 53.2667 61.4109 52.2V65.4C52.6109 68.3333 48.2109 75.0667 48.2109 85.6H61.4109Z" fill="white" fill-opacity="0.3"/>
                  <g filter="url(#filter0_d)">
                  <path d="M436.989 199.4V168.6H465.389V199.2C465.389 208 462.789 215.533 457.589 221.8C452.256 228.067 445.389 231.733 436.989 232.8V219.6C445.789 216.667 450.189 209.933 450.189 199.4H436.989ZM479.589 199.4V168.6H507.989V199.2C507.989 208 505.389 215.533 500.189 221.8C494.856 228.067 487.989 231.733 479.589 232.8V219.6C488.389 216.667 492.789 209.933 492.789 199.4H479.589Z" fill="white" fill-opacity="0.3"/>
                  </g>
                  <defs>
                  <filter id="filter0_d" x="432.989" y="168.6" width="79" height="72.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                  </filter>
                  </defs>
                </svg>
              </div>
              <h6 class="quote-content">
                Rather than investing in a traditional asset, classic stock, or bond, [people] are investing in sneakers              </h6>
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
