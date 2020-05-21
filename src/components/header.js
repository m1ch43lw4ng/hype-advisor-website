import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

import "../css/header.css"

const Header = ({ }) => (
  <header>
    <div>
      <h1>
        <Link to="/">
          <Logo/>
          {/* Fix Header here */}
        </Link>
      </h1>
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
