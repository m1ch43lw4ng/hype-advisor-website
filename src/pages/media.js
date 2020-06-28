import React from "react"
import { withPrefix } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/media.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Media" />
    <h1>Media</h1>

    <div class="Blog-Paragraph">
      <div class="Blog-Title">
        <h2 class="Blog-Title">Sneaker Anaysis: Jordan 1 "Court Purple 2.0"</h2>
      </div>
        <p>Max Shiau, Nathan Ju, Kaushal Anbarasan<h4>June 1, 2020</h4></p>
      <hr></hr>
    </div>

    <div class="Blog-Paragraph">
      <h2>Introduction</h2>
      <p>Introduction In 2020, the sneaker community witnessed the second release of the Air Jordan 1 Retro High OG “Court Purple 2.0.” The sequel to the original court purples released in 2018, the 2020 release featured the same color palette with black leather replacing the original purple leather paneling on the shoe as well as an increased price tag from $160 to $170.</p>
    </div>

    <div class="Blog-Paragraph">
      <h2>Qualitative Data</h2>
      <p>From a consumer standpoint, this sneaker as well as its 2018 release are appealing due to it’s unnatural and bold color. Prior to this, the sneaker community was yet to see a primarily purple sneaker, thus inflating demand significantly upon release. Despite its age, the sneaker community was equally ecstatic when the re-release of the court purples were announced; but unlike its predecessor, there were other large looming factors that drove the demand for the Court Purple 2.0 even higher. As the world outside closed down, we experienced a new slew of internet trends. Amongst those included Tiktok dances involving throwing the shoe out of view while simultaneously swapping to another user, simulating the shoe being thrown to another person. With many tik tok influencers and casual users alike hopping onto this trend to flaunt their newest shoes, the sneaker market would be hit with a sudden surge of females purchasing grade school sized sneakers. Prior to this, a men’s size sneaker would be expected to be valued higher than a grade school size- as there are more adults purchasing shoes than grade school kids. However, the rise of tik tok drove the prices of grade school sneakers beyond adult sizes, displayed in the graphs below:
      </p>
    </div>

    <div class="Blog-Paragraph">
      <p>Thus, when the release of the court purple 2.0 came along, the demand for grade school sizes on release day was monstrous. Today, the Air Jordan 1 “Court Purple 2.0” in grade school sizes average a price tag of $250. Netflix also conveniently aired Michael Jordan’s “Last Dance” documentary to celebrate the career of legendary basketball player Michael Jordan. The documentary received critical-acclaim- turning the heads of casual sports fans to the basketball superstars’ line of shoes. As a result, many of Jordan’s most iconic silhouettes and colorways have seen an astronomical spike. Displayed below is the price trend of the Air Jordan 1 Chicago (2015), which has since doubled in price. Other third party markets such as StockX have capitalized on this by grouping every sneaker worn in the last dance into one page, allowing new consumers drawn in by “The Last Dance” to shop with ease.</p>
    </div>
  </Layout>
)

export default IndexPage
