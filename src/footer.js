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
          <div id="footer" className="text-monospace">
          <a href="http://www.logospng.com/uefa-champions-league.html"><img src='rand/uefa.png' alt="uefa" width='40px'/></a>
          <span id="road"> UCL 2019 WINNER </span>
           <a href="http://www.logospng.com/liverpool-logo-ndash-escudo-football-club-63909-png.html"><img src='rand/liverpool.png' alt="liverpool" width='40px'/></a><br/>
           <i id="road">(I'm Nigerian lol)</i>

          </div>
        );
    }
}






export default Footer;
