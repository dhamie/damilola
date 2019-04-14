/*"Applaud the success, but admire the journey<br />
For the glory does not come easy and the prestige does not come cheap<br />
No hero was born heroic. No icon was born iconic<br />
Honour those that came before you<br />
with every second of work, every drop of sweat, every ounce of pain<br />
That's how a LEGEND is made, And a LEGACY is built<br />
Build your LEGACY"<br />
<a href="https://www.youtube.com/watch?v=Wt5SlONIRZ0">From GymShark</a>

"If an injury has to be done to a man it should be so severe that his vengeance need not be feared.<br/>
  			Severities should be dealt out all at once, so that their suddenness may give less offense;<br/>
  			benefits ought to be handed ought drop by drop, so that they may be relished the more."<br />
  			Niccolo Machiavelli
*/

import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import Typist  from 'react-typist';
import TypistLoop from 'react-typist-loop'

const Contents =()=>{
  const message =["WELCOME TO MY WORLD","THIS IS MY WEBSITE","I AM AT YOUR SERVICE"];
  let i =0 ;
  let count = 0;
  let jsxArray = [];
  var j = 0;

	  	for(i=0; i<message.length;i++){
	    	jsxArray.push(
	      <div className='background'>
	        <Typing Reset className="typewriter">
	            {message[i]}
	        </Typing>
	      </div>
	     );




	  }
	  function updateHTML(elmId, value) {
		  document.getElementById(elmId).innerHTML = value;
		}

       updateHTML("help", "hello")

			function refreshData()
			{
			    let x = 5;  // 5 Seconds

			    //document.getElementById('help').innerHTML = jsxArray[j++];
			    console.log(j++);

			    setTimeout(refreshData, x*1000);
			}


			 // execute function


	  	if (j < 3) {
	  			var word = refreshData();;
	  	}

	  	if (j > 3) {
	  		j = 0;
	  	}



	  return(word);

	}



const Quotes = () =>{
  return(
  		<p><i>
  		  "If an injury has to be done to a man it should be so severe that his vengeance need not be feared.<br/>
  			Severities should be dealt out all at once, so that their suddenness may give less offense;<br/>
  			benefits ought to be handed ought drop by drop, so that they may be relished the more."<br />
  			Niccolo Machiavelli
  		</i></p>

  	);
}

class Landing extends Component {


  render() {
    return(
    	<React.Fragment>

	      	<div className="text-monospace lpd">
	      		 <Typing  className="typewriter">
		            <p id="landingbigtext"><mark className="highlight">Hello</mark> there!</p>
		        </Typing>

		        {/*<p id="landingsmalltext">I'm Dami. Nice to meet you.</p>*/}
		        <p className="quote">
		            	<p>Random quote</p>
		            	<Quotes />
		            </p>
	  		</div>
  		</React.Fragment>

    );
  }
}

export default Landing;

