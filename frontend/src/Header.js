import React, { Component } from 'react';
import './Header.scss';
import logoimage from './img/OneBoardLogo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const goMain = () => {
      return (window.location.href = `/Main/Home`);
    };
    return (
      <div className="header-head" >
        <div className="header-image" >
          <img src={logoimage} alt="OneBoard" onClick={goMain} style={{ cursor: 'pointer'  }} />
        </div>
      </div>
    );
  }
}

export default Header;
