/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../css/layout.css"

const Layout = ({ renderHeader=true, renderFooter=true, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="site">
      {renderHeader && <Header siteTitle={data.site.siteMetadata.title} />}
      <main>{children}</main>
      {renderFooter && <Footer />}
    </div>
  )
}

Layout.propTypes = {
  renderHeader: PropTypes.bool,
  renderFooter: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Layout
