import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import Countdown from "react-countdown-now";






class Footer extends Component {
    render() {
        return (
          <div id="footer">
            <Countdown date={Date.now() + 10000} />,
          </div>
        );
    }
}






export default Footer;
