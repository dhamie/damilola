import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from './landing.js';
import About from './about.js';
import Portfolio from './portfolio.js';
import Images from './images.js';

const Main = () => {
	return (

		<Switch>
		 <Route exact path="/damilola/" component={Landing} />
		 <Route exact path="/damilola/about" component={About} />
		 <Route exact path="/damilola/portfolio" component={Portfolio} />
		 <Route exact path="/damilola/images" component={Images} />
		</Switch> 
	);
}



export default Main;
