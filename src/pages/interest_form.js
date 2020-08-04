import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social_Media from "../components/social_media"

import "../css/interest_form.scss"

// Why this is not a function: https://stackoverflow.com/questions/60156513/in-gatsby-what-is-the-difference-in-exteding-component-vs-arrow-function
export default class IndexPage extends React.Component {
  state = {
    name: "",
    email: "",
    referrer: "",
    investment_amount: null,
    mailing_list: false,

    // message: "", // Take out

    success_status: false,
    failed_status: false,
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    })

    if (name == "investment_amount") {
      if (!(value >= 100)) {
        target.setCustomValidity("We only accept investments greater than $100.");
      } else {
        target.setCustomValidity("");
      }
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      // https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties
      body: JSON.stringify((({ name, email, investment_amount, mailing_list, referrer }) => ({ name, email, investment_amount, mailing_list, referrer }))(this.state)),
      // body: JSON.stringify((({ name, email, message }) => ({ name, email, message }))(this.state)), // Take out
    };
    fetch("https://dlk12c02xk.execute-api.us-west-1.amazonaws.com/default/EmailCollector", requestOptions).then(response => {
      if (!response.ok) {
        throw new Error(response.body);
      }
      this.setState({ success_status: true });
    }).catch(() => {
      this.setState({ failed_status: true });
    });
  }

  render() {
    const Error = () => (
      <div class="Interest_Form-reply"><p>  Something weird happened. We're really sorry -- please email us about it! </p></div>
    )

    const Success = () => (
      <div class="Interest_Form-reply"><p> Thanks! We'll be getting back to you shortly. </p></div>
    )

    const Button = () => (
      <button id="Interest_Form-send" type="submit"><p>Invest</p></button>
    )

    return (
      <Layout renderFooter={false}>
        <SEO title="Interest Form" />
        <div id="Interest_Form_interest-div">
          <form id="right-bar" onSubmit={this.handleSubmit}>
            <h1 id="interest-form">Interest Form</h1>
            <p class="required">
            * required
            </p>
            <section id="Interest_Form-data">
              <h4><label for="name"> <span>*Name:</span> </label></h4>
              <p><input type="text" placeholder="Your Name" name="name" value={this.state.name} onChange={this.handleInputChange} required/></p>

              <h4><label for="email"> <span>*Google Email:</span> </label></h4>
              <p><input type="email" placeholder="Your Gmail Address" name="email" value={this.state.email} onChange={this.handleInputChange} required/></p>

              <h4><label for="investment_amount"> <span>*Investment Amount (USD):</span> </label></h4>
              <p><input type="number" placeholder="100" name="investment_amount" value={this.state.investment_amount} onChange={this.handleInputChange} required/></p>

              <h4><label for="referrer"> <span>Referred By:</span> </label></h4>
              <p><input type="email" placeholder="Referrer Gmail Address" name="referrer" value={this.state.referrer} onChange={this.handleInputChange}/></p>

              {/* Take out */}
              {/* <h4><label for="message"> <span>Message:</span> </label></h4> */}
              {/* <p><textarea type="textarea" id="message" placeholder="Your Message" name="message"/></p> */}

            </section>
            {this.state.failed_status && <Error/>}
            {this.state.success_status && <Success/>}
            {!(this.state.failed_status || this.state.success_status) && <Button/>}
            <p class="disclaimer">
            By using The Hype Advisor, you are agreeing to this Terms of Use, which are subject to change at any given time. If any notice of change to the Terms is made to you, the change shall be made effective immediately. Any disagreement with the Terms should result in discontinuing the use of our website. You agree that compliance with these Terms are the legal equivalent of a signed, written contract with The Hype Advisor. You are solely responsible for determining the merits and risks associated with the evaluation of information on our website. We advise that you closely examine the information before making any investment decision. If you are chosen as an investor in our second round of investments, you will be contacted by The Hype Advisor via email, which explains the logistics of our service and contains the agreement contract. Upon signing the contract, you agree to invest the original amount listed on the application. For purposes of your use of our Services, you agree to provide us with accurate information as is required by the application. We agree to not share your information with any third parties, unless we receive permission from you to do so. If any of the information changes at any time during the investment time frame, you agree to promptly notify us of the change(s).
            </p>
          </form>
          <div id="left-bar">
            <div id="contact-us"><h4>Contact Us</h4></div>
            <div id="address"><p>
              10281 Vicksburg Drive <br/>
              Cupertino, CA 95014 <br/><br/>

              +408 887 4558<br/><br/>

              team@thehypeadvisor.com
            </p></div>
            <div id="Interest_Form-follow-us"><h4>Follow Us</h4></div>
            <Social_Media/>
          </div>
        </div>
      </Layout>
    )}
}
