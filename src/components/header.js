import React from "react"
import PropTypes from "prop-types"
import { withPrefix, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../css/header.scss"

const Header = ({ centeredHeader=false }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "letter-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <header class="Header-container">
        <div className={"Header-logo " + (centeredHeader ? "Header-logo-centered": "Header-logo-left")}>
          <a href="/">
            <Img fluid={data.logo.childImageSharp.fluid} />
          </a>
        </div>
        <ul class="Header-nav">
          <li class="Header-nav-item"><h4><a href="/about">About</a></h4></li>
          <li class="Header-nav-item"><h4><a href="/industry">Industry</a></h4></li>
          <li class="Header-nav-item Services">
            <h4><a href="/services">Services</a></h4>
            {/*
            <ul class="Milestone-nav">
              <li class="Milestone-nav-item"><h4><a href="/milestone1">Milestone 1</a></h4></li>
              <li class="Milestone-nav-item"><h4><a href="/milestone2">Milestone 2</a></h4></li>
            </ul>
            */}
          </li>
          <li class="Header-nav-item"><h4><a href="/media">Media</a></h4></li>
          <li class="Header-nav-item Contact"><h4><a href="/interest_form">Invest</a></h4></li>
        </ul>
        <div class="Header-nav-mobile">
          <img src={withPrefix("menu.svg")} class="Header-menu"></img>
          <ul class="Header-dropdown-mobile">
            <li class="Header-dropdown-item"><h4><a href="/about">About</a></h4></li>
            <li class="Header-dropdown-item"><h4><a href="/industry">Industry</a></h4></li>
            <li class="Header-dropdown-item Services"><h4><a href="/services">Services</a></h4></li>
            <li class="Header-dropdown-item"><h4><a href="/media">Media</a></h4></li>
            <li class="Header-dropdown-item Contact-mobile"><h4><a href="/interest_form">Invest</a></h4></li>
          </ul>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  centeredHeader: PropTypes.bool,
}

export default Header
