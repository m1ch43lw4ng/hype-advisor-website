import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"

import "../css/chart.scss"

const Chart = ({ }) => (
	<>
	  <Helmet>
	    <script src={withPrefix('chart.js')} type="text/javascript"></script>
	  </Helmet>
	  <div id="chart"></div>
	</>
)

export default Chart