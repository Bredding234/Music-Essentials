import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  let navbar;
  if (isLoggedIn) {
    navbar = (
      <nav className="navbar navbar-dark bg-zinc-800 fixed w-full top-0 z-10">
        <div className="container flex sm:flex-row flex-col gap-2 justify-between items-center">
          <h1 className="fs-3">
            <Link to='/' className="text-white ">
                <span className="hover:text-blue-600">Music Essentials</span>
            </Link>
          </h1>
          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-5 text-white">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <div className="dropdown-menu">
                  <Link to="/music">
                    Music
                  </Link>
                  <div className="menu-content">
                    <a className="links-hidden" href="/genre">
                      Pop
                    </a>
                    <a className="links-hidden" href="/Hiphop">
                      Hip Hop
                    </a>
                    <a className="links-hidden" href="/Rock">
                      Rock
                    </a>
                    <a className="links-hidden" href="/EDM">
                      EDM
                    </a>
                    <a className="links-hidden" href="/RandB">
                      R&B
                    </a>
                    <a className="links-hidden" href="/Jazz">
                      Jazz
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/Store">
                Store
                </Link>
              </li>
              <li>
                <a href="/News">News</a>
              </li>
            </ul>
            {/* <div></div> */}
          </div>
        </div>
      </nav>
    );
  } else {
    navbar = (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container text-center justify-content-center">
          <h1 className="fs-3">
            <Link to="/" className="text-white ">
              <span className="hover:text-blue-600">Music Essentials</span>
            </Link>
          </h1>
        </div>
      </nav>
    );
  }

  return <>{navbar}</>;
};

export default Navbar;
