import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social_Media from "../components/social_media"

import "../css/interest_form.scss"

const IndexPage = () => (
  <Layout renderFooter={false}>
    <SEO title="Interest Form" />
    <div id="Interest_Form_interest-div">
      <form id="right-bar">
        <h1 id="interest-form">Interest Form</h1>
        <section id="Interest_Form-data">
          <h4><label for="name"> <span>Name:</span> </label></h4>
          <p><input type="text" id="name" placeholder="Your Name" name="name"/></p>

          <h4><label for="email"> <span>Email:</span> </label></h4>
          <p><input type="email" id="email" placeholder="Your Email" name="email"/></p>

          <h4><label for="message"> <span>Message:</span> </label></h4>
          <p><textarea type="textarea" id="message" placeholder="Your Message" name="message"/></p>
        </section>
        <div id="Interest_Form-send"><p>Send</p></div>
      </form>
      <div id="left-bar">
        <div id="contact-us"><h4>Contact Us</h4></div>
        <div id="address"><p>
          10281 Vicksburg Drive <br/>
          Cupertino, CA 95132 <br/><br/>

          +408 887 4558<br/><br/>

          team@thehypeadvisor.com
        </p></div>
        <div id="Interest_Form-follow-us"><h4>Follow Us</h4></div>
        <Social_Media/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
