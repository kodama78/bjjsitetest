import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
      <div className="header">
          <div className="logo-ctr">
            Flow and Roll
          </div>
          <div className="navbar">
              <ul>
                  {/*Link updates the URL to the provided path name, which then
                  triggers the route associated with that path name*/}
                  <li><Link to="/welcome">Welcome</Link></li>
                  <li><Link to="/our_macarons">Videos</Link></li>
                  <li><Link to="/gifts_parties">Blog</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
              </ul>
          </div>
      </div>
    );
};

export default Header;