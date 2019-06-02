import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import Countdown from "react-countdown-now";




const Completionist = () => <span>It is Time!</span>;


class Footer extends Component {

    render() {


        /*let d = new Date();
        d.setDate(d.getDate() + parseFloat("15.5000") );
        d.setSeconds(80000);*/

        return (
          <div id="footer">
          <a href="http://www.logospng.com/uefa-champions-league.html"><img src='rand/uefa.png' alt="uefa" width='50px'/></a>
          <span id="road"> UCL 2019 WINNER </span>
           <a href="http://www.logospng.com/liverpool-logo-ndash-escudo-football-club-63909-png.html"><img src='rand/liverpool.png' alt="liverpool" width='50px'/></a>

          </div>
        );
    }
}






export default Footer;
