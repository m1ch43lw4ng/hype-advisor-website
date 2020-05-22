import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/interest_form.scss"
import "../css/style.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Interest Form" />
    <div id="Interest_Form_interest-div">
      <div id="left-bar">
        <div id="contact-us"><h4>Contact Us</h4></div>
        <div id="address"><p>
          12345 Dwight Way <br/>
          Berkeley, CA 94704 <br/><br/>

          +123 456 789<br/><br/>

          team@thehypeadvisor.com
        </p></div>
        <div id="follow-us"><h4>Follow Us</h4></div>
        {/* <div class="social-media">#TODO: reuse footer component</div> */}
      </div>
      <form id="right-bar">
        <h1 id="interest-form">Interest Form</h1>
        <section>
          <p>
            <label for="name">
              <span>Name:</span>
            </label>
            <input type="text" id="name" name="name"/>
          </p>
          <p>
            <label for="email">
              <span>Email:</span>
            </label>
            <input type="email" id="email" name="email"/>
          </p>
          <p>
            <label for="message">
              <span>Message:</span>
            </label>
            <input type="textarea" id="message" name="message"/>
          </p>
        </section>
      </form>
    </div>
  </Layout>
)

export default IndexPage
