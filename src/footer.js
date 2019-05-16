import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from "react-component-countdown-timer";
import './pages/counter.css';






class Footer extends Component {
    render() {

          var settings = {
          count: 5432,
          border: true,
          noPoints: false, border: false, direcion: "right",
          size: 20,
          showTitle: false,
          backgroundColor: false,
            color: "#fff",
        };
        return (
          <div id="footer">
            <CountdownTimer {...settings} />
          </div>
        );
    }
}






export default Footer;
