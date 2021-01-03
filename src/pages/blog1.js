import React from "react"
import { withPrefix, useStaticQuery, graphql } from "gatsby"
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactGA from "react-ga"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/blog_post.scss"

if (typeof window !== `undefined`) {
  ReactGA.initialize('UA-175519872-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

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
      <Layout>
        <SEO title="Blog: What is streetwear?" />

        <div class="Report-Title">
          <h1>What is streetwear?</h1>
          <h2>Its cultural significance is unparalleled.</h2>
        </div>

        <div class="Report-line">
          <hr></hr>
        </div>

        <div class="post-description-wrapper">
          <h4>Annette Yang</h4>
          <h4>3 JAN 2021 • 4 MIN READ</h4>
        </div>

        <div class="blog-image-wrapper">
          <div class="blog-image">
            <img src={require("../images/blog1_1.png")}></img>
            <br></br>
            <h7>Courtesy of Fearless</h7>
          </div>
        </div>

        <div class="blog-paragraph">
          <p>
          Let’s talk about one of this generation’s most prominent markets: streetwear. Seeping into everything relating to Gen Z’ers, this industry has taken the world by storm. Its richness is indisputable: hip-hop, basketball, and fashion are just a couple of sectors that have been revolutionized because of its growing influence. As a result, the streetwear resale market is projected to grow 5x in size, from its current valuation of $6 billion to $30 billion in 2030 per Cowen Equity Research. Why are industry experts so confident in the market’s growth?
          </p>
        </div>

        <div class="blog-paragraph">
          <h2>Reap the profits</h2>
          <p>
          We wanted to first make one point clear, streetwear is not just overpriced sneakers and clothing. It represents a <b>cultural phenomenon</b>, a way of self-expression, and among all things a fashion style. Streetwear has become its own movement, especially targeting younger generations who admire celebrities and influencers alike. The industry lives off exclusivity, where clothing and sneakers alike sell out within seconds and fetch high prices in the resale market. The most successful brands take advantage of the surge of attention the industry has received and scale up by releasing pieces in less supply than consumer demand. It is this exclusivity that attracts more and more people into the culture, past just enthusiasts but also a whole new wave of resellers looking to make some quick profit. 
          </p>
        </div>

        <div class="blog-image-wrapper">
          <div class="blog-image">
            <img src={require("../images/blog1_2.png")}></img>
            <br></br>
            <h7>Courtesy of Fearless</h7>
          </div>
        </div>

        <div class="blog-paragraph">
          <h2>Why are sneakers so expensive?</h2>
          <p>
          While retailers keep streetwear pieces at a steady price, resellers readily purchase these high-demand products and sell them for a higher value depending on how much people are willing to pay. In fact, this is so profitable that some have created <b>entire careers</b> out of streetwear reselling. In addition to the initial high resell price, clothing and sneakers alike have also been seen to rise incredibly in value over time. Profit, whether short-term or long-term, is dependent on how “hyped” the sneaker is, which depends on various factors.
          </p>
          <p>
          <b>Quantity, exclusivity, and wearability</b> tend to play the largest role in affecting hype. First of all, there is only a set number of items released out to the public. As long as demand outweighs supply, there will be a profit to be made. Exclusivity also plays a huge role, where collaborations with popular designers or artists often correlate to a higher resale price. Such streetwear items attract die-hard fans that are willing to do whatever it takes to get their hands on a pair. On top of that, these releases are almost always low in supply. The lesser the supply, the more difficult it is to purchase the item and the more money consumers are willing to pay. The last factor is wearability, which is key to a high performing item on the resale market. People tend to buy pieces, especially those on the expensive end, that they will be able to wear often and style easily. Therefore, the more wearable it is, the larger of an audience and the higher the demand it has.
          </p>
        </div>

        <div class="blog-image-wrapper">
          <div class="blog-image">
            <img src={require("../images/blog1_3.png")}></img>
            <br></br>
            <h7>Courtesy of bstnstore</h7>
          </div>
        </div>

        <div class="blog-paragraph">
          <p>
          To put this into perspective, let’s talk about the Jordan 1 High across the three factors. In terms of quantity, Nike on average releases ~300K in stock for every colorway. Although this seems to be very high, they almost always sell out, proving that demand outweighs supply with every colorway release. In terms of exclusivity, Jordan’s reputation stands because of its director, Michael Jordan. His accomplishments in basketball have built a brand for him, now extending into fashion. The endorsement of these sneakers by celebrities and influencers only furthered the brand’s reach. Increasing hype even more, Jordan also collaborates with other brands and celebrities. For example, it famously created a sneaker with rapper Travis Scott, now selling at over <a href="https://stockx.com/air-jordan-1-retro-high-travis-scott" target="_blank">700%</a> above the original retail price. In terms of wearability, Jordan 1’s are seen on the feet of everybody. Whether it be summer or winter, they go with any outfit and act as a staple piece on their own. There is no dispute that this specific silhouette has become the most iconic sneaker in all of fashion. Period. 
          </p>
        </div>

        <div class="Report-line">
          <hr></hr>
        </div>

        <div class="blog-paragraph">
          <p>
          The streetwear industry is ever-evolving, connecting all kinds of cultures and interests into one common passion. Streetwear insiders like us make getting involved in the industry’s rise easier than ever before. With every new streetwear drop or fresh collaboration, the industry is expanding and piquing the interests of fans globally. There’s a <b>place for everyone</b> in streetwear, whether you’re looking to immerse yourself in its rich culture, purchase a cool pair of sneakers, or even make a profit substantial enough to turn into a full-time career.
          </p>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
