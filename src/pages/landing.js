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

"You could not live with your own failure. Where did that bring you? Back to me.<br/>
        I thought by eliminating half of life, the other half would thrive. But you've shown me, that's impossible. <br/>
        And as long as there are those that remember what was, there will always be those that are unable to accept what can be. They will resist.<br/>
        I'm thankful. Because now, I know what I must do. I will shred this universe down to its last atom.<br/>
        And then... With the stones you've collected for me, create a new one.<br/>
        Teeming with life, but knows not what it has lost but only what it has been given. A grateful universe."<br/>
        Thanos        

        power of dream mandarin(梦想的力量)
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
  		  "Oh, so you think darkness is your ally? But you merely adopted the dark. I was born in it, molded by it. <br/>
        I didn’t see the light until I was already a man, by then to me it was nothing but blinding. <br/>
        The shadows betray you because they belong to me."<br/>
        Bane   

  		</i></p>

  	);
}

class Landing extends Component {


  render() {
    return(
    	<React.Fragment>

	      	<div className="text-monospace lpdn">
               <Typing  className="typewriter">
                  <p id="landingbigtext"><mark className="highlight">꿈</mark>의 힘</p>
              </Typing>

              {/*<p id="landingsmalltext">I'm Dami. Nice to meet you.</p>*/}
              <p className="quote">
                    <p>Random quote</p>
                    <Quotes />
                  </p>
          </div>
        <div className="lpc"></div>
  		</React.Fragment>

    );
  }
}

export default Landing;

