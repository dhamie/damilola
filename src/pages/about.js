import React, { Component } from 'react';




class About extends Component {
  render() {
  	const characters1 =  [
  		{
  			header:'Languages',
  			item1: 'JavaScript (Beginner)',
  			item2: 'HTML&CSS (Intermediate)',
  			item3: 'PHP (Beginner)',
  			item4: 'C# (Beginner)',
  			item5: 'C++ (Beginner)',
  			item6: 'Any other language required to get the job done'
  		},
  		{
  			header:'Frameworks',
  			item1: 'React (Beginner)',
  			item2: 'WordPress (Intermediate)',
  			item3: 'Laravel (Beginner)',
  			item4: 'Unity c# (Beginner)',
        item5: 'Unreal BluePrints (Beginner)',
        item6: 'Any other framework required to get the job done'
  		}
  	];

  	const characters2 =  [
  		{
  			header:'Database',
  			item1: 'MySQL (Beginner)',
  			item2: 'SQLite (Beginner)',
  			item3: 'Any other language required to get the job done'
  		},
  		{
  			header:'Design Tools',
  			item1: 'Photoshop (Beginner)',
  			item2: 'Figma (Beginner)',
  			item3: 'Adobe XD (Beginner)',
        item4: 'Blender(Beginner)',
  			item5: 'Any other tool required to get the job done'
  		},
  	];

  	const characters3 =  [
  		{
  			header:'Soft skills',
  			item1: 'Flexibility',
  			item2: 'Mathematically Inclined',
  			item3: 'Ability & experience in multi-tasking and handling stressful situations',
  			item4: 'Ability to work with little or no supervision',
  			item5: 'Positive attitude and great team-worker',
  			item6: 'An ever-ready willingness to learn'
  		}
  	];
    return(
      <React.Fragment>


	      	<div className="text-monospace lpd">
	      		 <h1>About</h1>

	      		 <h2>Hello, my name is Soyemi Damilola.</h2>
        		<p>I am a learning front-end web and game developer.
        		I am also a gamer that enjoys first person shooters games like 'Call of Duty' and 'Counter Strike'.
        		I enjoy having deep conversations with people and i also believe i originated from the star system 'Alpha Centauri'.</p>


        		<div className="container">
				  <div className="row">
				      <Skills characterData={characters1} />
				      <Skills characterData={characters2} />
				  </div>
				  <div className="row">
				      <Skills characterData={characters3} />
				  </div>
				</div>

				<p><mark className="highlight">I'm available for remote work - if you would like to build something together or just talk, get in touch.</mark></p>
				<p><mark className="highlight">Email: dhamie.soyemi@gmail.com</mark></p>

				<a href="https://www.facebook.com/dhamie.the.kid" target = "_blank">facebook </a>
        		<a href="https://www.instagram.com/__dhamie__/">instagram </a>
				<a href="https://twitter.com/damilolaistaken">twitter </a>



	  		</div>
  		</React.Fragment>
    );
  }
}





 const Skills = props => {
    const rows = props.characterData.map((row, index) => {
        return (
        	<React.Fragment>
        	<p>{row.header}</p>
        		<ul>
                	<li key={index}>{row.item1}</li>
                	<li key={index}>{row.item2}</li>
                	<li key={index}>{row.item3}</li>
                	<li key={index}>{row.item4}</li>
                	<li key={index}>{row.item5}</li>
                	<li key={index}>{row.item6}</li>
                </ul>

        	</React.Fragment>
        );
    });

    return <div className="col">{rows}</div>;
}

export default About;
