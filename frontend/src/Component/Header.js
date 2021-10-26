import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-head">
        <div className="header-image">
          <img className="logoimage" alt="OneBoard" src="img/OneBoard.png" />
        </div>
      </div>
    );
  }
}

export default Header;
