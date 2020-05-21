import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

import "../css/header.css"

const Header = ({ }) => (
  <header>
    <div>
      <h1 id="logo">
        <Link to="/">
          <Logo/>
        </Link>
      </h1>
      <nav id="nav">
          <a href="" class="scrolly">Why Us</a>
          <a href="" class="scrolly">Industry</a>
          <a href="" class="scrolly">Investments</a>
          <a href="" class="scrolly">Contact Us</a>
          <a href="" class="button primary">Sign In</a>
      </nav>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
