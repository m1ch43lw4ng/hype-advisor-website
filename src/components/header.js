import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

import "../css/header.css"

const Header = ({ }) => (
  <ul class="header">
      <li class="logo">
        <a href="/">
          <Logo/>
        </a>
      </li>
      <ul class="nav">
          <li class="nav-item"><a href="">Why Us</a></li>
          <li class="nav-item"><a href="">Industry</a></li>
          <li class="nav-item"><a href="">Investments</a></li>
          <li class="nav-item"><a href="">Contact Us</a></li>
          <li class="nav-item button primary"><a href="">Sign In</a></li>
      </ul>
  </ul>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
