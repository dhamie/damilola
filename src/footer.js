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
          <mark className="red"><Countdown date={1559415600000}> <Completionist /> </Countdown></mark><br/>
          <a href="http://www.logospng.com/uefa-champions-league.html"><img src='rand/uefa.png' alt="uefa" width='50px'/></a>
          <span id="road"> Road to Madrid </span>
           <a href="http://www.logospng.com/liverpool-logo-ndash-escudo-football-club-63909-png.html"><img src='rand/liverpool.png' alt="liverpool" width='50px'/></a>

          </div>
        );
    }
}






export default Footer;
