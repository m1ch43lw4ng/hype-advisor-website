import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

import "../css/header.css"

const Header = ({ }) => (
  <header class="Header_container">
      <div class="Header_logo">
        <a href="/">
          <Logo/>
        </a>
      </div>
      <ul class="Header_nav">
          <li><a href="">Why Us</a></li>
          <li><a href="">Industry</a></li>
          <li><a href="">Investments</a></li>
          <li><a href="">Contact Us</a></li>
          <li class="button primary"><a href="">SIGN IN</a></li>
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
