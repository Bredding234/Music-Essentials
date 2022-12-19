import React from 'react';
import { Link } from 'react-router-dom';
const Layout2 = (props) => (
  <div>
       <nav className="nav-ul navbar navbar-dark bg-zinc-800 fixed w-full top-0 z-10">
      <div className="container flex sm:flex-row flex-col gap-2 justify-between items-center">
        <h1 className="fs-3">
          <Link to='/' className="text-white ">
              <span className="hover:text-blue-600">Music Essentials</span>
          </Link>
        </h1>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-5 text-white">
            <li>
              <a href="/SignIn">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Layout2;