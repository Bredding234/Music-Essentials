import {Link} from 'react-router-dom';

import React from 'react'

function Home() {
  return (
	<div>

		<p style={{color: 'black', textAlign: 'center', fontSize:'25px'}}> Search for artist</p>
<input style={{ height: 40, borderColor: 'black', borderWidth: 1, display: 'block', marginRight: 'auto', marginLeft: 'auto' }}	type='text'	id='firstName'placeholder='Search for artist'autoComplete='given-name'	/>
<div>
	<img />
</div>

<div style={{backgroundColor: 'black', width: '15%', height: '15%',    position: 'relative', top: '57px', left: '30%', textAlign: 'center', marginTop: '10%'}}>
	<Link to='/signup' style={{color: 'white', textAlign: 'center'}}>Sign Up </Link>
</div>
<span style={{position: 'fixed', left: '46%', top: '23%',  marginTop: '13%'}}> OR </span>
<div style={{backgroundColor: 'black', width: '15%', height: '15%',    position: 'relative', top: '32px', left: '50%', textAlign: 'center'}}>
	<Link to='/login' style={{color: 'white', textAlign: 'center'}}>Login </Link>
</div>



	</div>
  );
}


export default Home;
