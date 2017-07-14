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
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/videos">Videos</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
              </ul>
          </div>
      </div>
    );
};

export default Header;