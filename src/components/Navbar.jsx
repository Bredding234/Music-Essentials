import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	let navbar;
	if (isLoggedIn) {
		navbar = (
			<nav className='navbar navbar-dark bg-dark'>
				<div className='container flex justify-between items-center'>
					<h1 className='fs-3'>
						<a href='#' className='text-white '>
							<span className='hover:text-blue-600'>Music Essentials</span>
						</a>
					</h1>
					<div className='flex items-center gap-4'>
						<ul className='flex items-center gap-5 text-white'>
							<li>
								<a href='#'>Home</a>
							</li>
							<li>
								<a href='#'>Music</a>
							</li>
							<li>
								<a href='#'>Store</a>
							</li>
							<li>
								<a href='#'>News</a>
							</li>
						</ul>
						<div>
							<FaUserCircle color='white' size={30} />
						</div>
					</div>
				</div>
			</nav>
		);
	} else {
		navbar = (
			<nav className='navbar navbar-dark bg-dark'>
				<div className='container text-center justify-content-center'>
					<h1 className='fs-3'>
						<a href='#' className='text-white '>
							<span className='hover:text-blue-600'>Music Essentials</span>
						</a>
					</h1>
				</div>
			</nav>
		);
	}

	return <>{navbar}</>;
};

export default Navbar;
