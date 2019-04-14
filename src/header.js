import React, {Component } from 'react';
import { Link } from 'react-router-dom';



const Nav = () => { 
    return (
        <ul className="nav justify-content-end text-monospace">
        <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
		  <li className="nav-item">
		    <Link className="nav-link" to="/portfolio">Works</Link>
		  </li>
		  <li className="nav-item">
		    <Link className="nav-link" to="/about">About</Link>
		  </li>
          <li className="nav-item">
            <Link className="nav-link" to="/images">Random Images</Link>
          </li>
		</ul>
    );
}

class Header extends Component {
    render() {
        
        return (
                <Nav />
        );
    }
}






export default Header;