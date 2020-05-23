import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

import "../css/header.scss"

const Header = ({ centeredHeader=false }) => (
  <header class="Header-container">
    <div className={"Header-logo " + (centeredHeader ? "Header-logo-centered": "Header-logo-left")}>
      <a href="/">
        <Logo/>
      </a>
    </div>
    <ul class="Header-nav">
      <li class="Header-nav-item"><h4><a href="/404">Why Us</a></h4></li>
      <li class="Header-nav-item"><h4><a href="/404">Industry</a></h4></li>
      <li class="Header-nav-item"><h4><a href="/404">Investments</a></h4></li>
      <li class="Header-nav-item"><h4><a href="/interest_form">Contact Us</a></h4></li>
      <li class="Header-nav-item button primary"><h4><a href="/interest_form">SIGN IN</a></h4></li>
    </ul>
  </header>
)

Header.propTypes = {
  centeredHeader: PropTypes.bool,
}

export default Header
