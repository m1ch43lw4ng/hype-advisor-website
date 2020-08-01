import React from "react"

import "../css/popup.scss"

export default class Popup extends React.Component {

  handleClose = () => {
    var popup = document.getElementById("popup");
    popup.style.visibility = "hidden";
    popup.style.animation = "fadeOut 1s";
  }

  render() {
    return (
      <div class="popupwrapper">
        <div class="popuptext" id="popup">
          <p>
          The second investment round of The Hype Fund is live until 8/8! Click <a href="/interest_form">here</a> to join.
          &nbsp;&nbsp;<button class="close" onClick={this.handleClose}>x</button>
          </p>
        </div>
      </div>
    )
  }
}
