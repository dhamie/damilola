import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
};

class Images extends Component {
  render() {

  	const characters =  [
  		{
  			item1: 'rand/robot1.PNG',
  			item2: 'fff',
        item3: 'https://www.instagram.com/p/BUbXipYFwH4/?utm_source=ig_web_copy_link'

  		},
  		{
  			item1: 'rand/robot2.png',
  			item2: 'fff',
        item3: 'https://www.instagram.com/p/BaGjl1lH7ch/?utm_source=ig_web_copy_link'

  		},
  		{
  			item1: 'rand/astronut.JPG',
  			item2: 'fff',

  		},
      {
  			item1: 'rand/bg1.PNG',
  			item2: 'fff',
        item3: 'https://www.instagram.com/p/Bu6kQHplZ17/?utm_source=ig_web_copy_link'
  		},
      {
        item1: 'rand/lfc.PNG',
        item2: 'fff',
        item3: 'https://www.instagram.com/p/BxLSZ4rlAJv/'
      }

  	];

    return(
      <div className="container-fluid text-monospace lpd">

      		<ShowImages characterData={characters} />
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

export default Images; 
