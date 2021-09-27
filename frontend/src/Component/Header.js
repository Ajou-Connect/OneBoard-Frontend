import React, { Component } from "react";
import './Header.css';

class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            
            <div className="header-head">
                   
                <h1 className="header-head_text">가운데 대충 이미지 들어가고 왼쪽 끝에 OneBoard</h1>
            </div>
                
        );
    }
}

export default Header;