import { Routes, Route } from 'react-router-dom';
// pages
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
	return (
		<div className='parent'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<LogIn />} />
				<Route path='/signup' element={<SignUp />} />
			</Routes>
		</div>
	);
};

export default App;
