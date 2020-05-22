import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

import "../css/header.scss"

const Header = ({ }) => (
  <header class="Header_container">
    <div class="Header_logo">
      <a href="/">
        <Logo/>
      </a>
    </div>
    <ul class="Header_nav">
      <li class="Header_nav-item"><a href="/404">Why Us</a></li>
      <li class="Header_nav-item"><a href="/404">Industry</a></li>
      <li class="Header_nav-item"><a href="/404">Investments</a></li>
      <li class="Header_nav-item"><a href="/interest_form">Contact Us</a></li>
      <li class="Header_nav-item button primary"><a href="/interest_form">SIGN IN</a></li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
