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
    investment_amount: 0,
    mailing_list: false,

    success_status: false,
    failed_status: false,
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    console.log(value);
    const name = target.name;

    this.setState({
      [name]: value,
    })
    console.log(this.state);
  }

  handleSubmit = event => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      // https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties
      body: JSON.stringify((({ name, email, investment_amount, mailing_list }) => ({ name, email, investment_amount, mailing_list }))(this.state)),
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
            <section id="Interest_Form-data">
              <h4><label for="name"> <span>Name:</span> </label></h4>
              <p><input type="text" placeholder="Your Name" name="name" value={this.state.name} onChange={this.handleInputChange}/></p>

              <h4><label for="email"> <span>Email:</span> </label></h4>
              <p><input type="email" placeholder="Your Email" name="email" value={this.state.email} onChange={this.handleInputChange}/></p>

              <h4><label for="investment_amount"> <span>Investment Amount:</span> </label></h4>
              <p><input type="number" placeholder="$" name="investment_amount" value={this.state.investment_amount} onChange={this.handleInputChange}/></p>

              {/* <h4><label for="message"> <span>Message:</span> </label></h4> */}
              {/* <p><textarea type="textarea" id="message" placeholder="Your Message" name="message"/></p> */}

            </section>
            {this.state.failed_status && <Error/>}
            {this.state.success_status && <Success/>}
            {!(this.state.failed_status || this.state.success_status) && <Button/>}
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
