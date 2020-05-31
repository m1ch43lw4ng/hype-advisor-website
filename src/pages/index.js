import React from "react"

import {TiArrowDown} from 'react-icons/ti';

import Header from "../components/header"
import SEO from "../components/seo"
import "../css/index.scss"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header centeredHeader={false}/>

    <section id="landing">
      <div class="landing-container">
        <h1 class="title">Inside this generation's most dynamic market</h1>
        <button id="arrow">
          <TiArrowDown size={48} />
        </button>
      </div>
    </section>

    <div id="site">
      <main>
        <div>
          <p>
            Our past project, The Hype Fund, revealed with full transparency the underlying potential and capability of sneakers as an investment market. To extend this opportunity to others, we recognize the need to make quantitative metrics more organized, universal, and practical. Utilizing our experience, connections, and data analysis, our resources will not only bolster existing investments in sneakers, but also enable you to understand the ins and outs of the market itself.
            <br/><br/>
            Utilizing our experience, connections, and data analysis, our resources will not only bolster existing investments in sneakers, but also enable you to understand the ins and outs of the market itself.
          </p>
        </div>

        <div class="consistent-earnings">
          <h2>Consistent earnings that show.</h2>
          <p>
            No matter your current financial capacity, you can grow in tandem with one of the most profitable markets worldwide. Before The Hype Advisor, only those with inside information and 30+ hours a week of market research were able to profit from the booming industry of streetwear.
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
      </main>
    </div>
  </>
)

var arrow = document.getElementById("arrow");
arrow.onclick = function(){
  var elmnt = document.getElementById("site");
  elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
};

export default IndexPage
