/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"
      src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"
  	/>
  ])
 }