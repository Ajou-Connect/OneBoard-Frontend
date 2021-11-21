import React, { Component } from 'react';
import './Header.scss';
import logoimage from './img/OneBoardLogo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-head">
        <div className="header-image">
          <img src={logoimage} alt="OneBoard" />
        </div>
      </div>
    );
  }
}

export default Header;
