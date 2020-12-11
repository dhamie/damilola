import React, { Component } from 'react';
import Masonry from 'react-masonry-component';


const masonryOptions = {
    transitionDuration: 0
};

class Portfolio extends Component {
  render() {
  	const characters =  [
  		{
  			item1: 'rand/bg.jpg',
  			item2: 'fff',
  			item3: '#'	
  		},
  		{
	  		item1: 'rand/designs/Frame.png',
	  		item2: 'fff',
        item3: '#'
  		},
  		{
	  		item1: 'rand/designs/pinnacle.png',
	  		item2: 'fff',
        item3: '#'
  		},
  		{
	  		item1: 'rand/designs/pinnacle1.png',
	  		item2: 'fff',
        item3: '#'
  		},
      {
        item1: 'rand/designs/pain.png',
        item2: 'fff',
        item3: '#'
      },
      {
        item1: 'rand/designs/naruto.png',
        item2: 'fff',
        item3: '#'
      }

  	];

    return(
      <div className="container-fluid text-monospace lpd">
	      <div className = "container-fluid">
	      	<h1>Designs and Photos</h1>
	      	<ShowImages characterData={characters} />
	      </div><br/>
	      <div className = "container-fluid">
	      	<h1>Sites, Apps and Games</h1>
			  
			<a href ="https://dhamie.github.io/reactpages">React Pages</a><br/><br />
			<video>
				<source src="assets/burger_1.mp4" type="video/mp4"/>
				fff
			</video>	
	        <a href="https://github.com/dhamie">Github </a>
	        <a href="https://drive.google.com/file/d/1zV1ctN7-3VuGk096vdV5p4BojZxj5GaX/view?usp=sharing">CV </a>
	      </div>  
      </div>


    );
  }
}

 const ShowImages = props => {
    const rows = props.characterData.map((row, index) => {
        return (
        	<React.Fragment>
        		<div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
            		<a href={row.item3}><img key={index} src={row.item1} alt={row.item2}  width='100%'/></a>
            	</div>
        	</React.Fragment>
        );
    });

    return 	<Masonry>{rows}</Masonry>;
}


export default Portfolio;
