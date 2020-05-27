import React from "react"

import {TiArrowDown} from 'react-icons/ti';

import Header from "../components/header"
import SEO from "../components/seo"
import "../css/index.scss"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header centeredHeader={true}/>
    <section id="landing">
      <section id="landing-container">
        <p id="title">The Hype Advisor</p>
        <p id="subtitle">Inside this generation's most dynamic market</p>
        <button id = "arrow">
          <TiArrowDown size={48} />
        </button>
      </section>
    </section>
  </>
)

export default IndexPage
