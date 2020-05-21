import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

import "../css/header.css"

const Header = ({ }) => (
  <header id="header">
      <h1 id="logo">
        <div style={{ width: '100%' }}>
          <a href="/">
            <Logo/>
          </a>
        </div>
      </h1>
      <nav id="nav">
          <a href="">Why Us</a>
          <a href="">Industry</a>
          <a href="">Investments</a>
          <a href="">Contact Us</a>
          <a href="" class="button primary">Sign In</a>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
