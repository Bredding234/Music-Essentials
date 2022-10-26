import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';



const Navbar = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	let navbar;
	if (isLoggedIn) {
		navbar = (
			<nav className='navbar navbar-dark bg-dark'>
				<div className='container flex justify-between items-center'>
					<h1 className='fs-3'>
						<a href='/' className='text-white '>
							<span className='hover:text-blue-600'>Music Essentials</span>
						</a>
					</h1>
					<div className='flex items-center gap-4'>
						<ul className='flex items-center gap-5 text-white'>
							<li>
								<a href='/'>Home</a>
							</li>
							<li>
							<div className="dropdown-menu">
							<Link to= '/music'> 	
							<a href='#'>Music</a>
							</Link>
							<div className="menu-content">
<a className="links-hidden"  href="/genre">Pop</a> 
<a className="links-hidden" href="/Hiphop">Hip Hop</a>
<a className="links-hidden" href="/Rock">Rock</a>
<a className="links-hidden" href="/EDM">EDM</a>
<a className="links-hidden" href="/RandB">R&B</a>
<a className="links-hidden" href="/Jazz">Jazz</a>
</div>
</div>
							</li>
							<li>
							<Link to= '/Store'>	<a href='/Store'>Store</a> </Link>
							</li>
							<li>
								<a href='/News'>News</a>
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
