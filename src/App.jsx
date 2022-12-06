import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

// pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Album from './pages/Albums';
import Albums2 from './pages/Albums2';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Music from './pages/Music';
import Pop from './pages/Pop';
import HipHop from './pages/Hiphop';
import Contact from './pages/Contact'
import Rock from './pages/Rock';
import EDM from './pages/EDM';
import Jazz from './pages/Jazz';
import RandB from './pages/RandB';
import Store from './pages/Store';
import News from './pages/News';
import Home from './pages/Home';

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return (
		<div className='parent'>
			
			<Navbar auth={{ isAuthenticated, setIsAuthenticated }} />

				<Routes>
					<Route path='/Home' element={<Home />} />
					<Route path='/' element={<SignIn />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/music' element={<Music />} />
					<Route path='/genre/' element={<Pop />} />
					<Route path='/Hiphop' element={<HipHop />} />
					<Route path='/Rock' element={<Rock />} />
					<Route path='/EDM' element={<EDM />} />
					<Route path='/Jazz' element={<Jazz />} />
					<Route path='/RandB' element={<RandB />} />
					<Route path= '/store' element={<Store />} />
					<Route path='/News' element={<News />} />
					<Route path='/Contact' element={<Contact />} />
					<Route exact path='/album/:id' element={<Album />} />
					<Route exact path ="/album/:id/nested/" element= {<Albums2 />} />

			</Routes>
		</div>
	);
};

export default App;
