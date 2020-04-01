import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const Navbar = () => (
  <nav>
    <Link to="/"><div id="load-home">Home</div></Link>
    <Link to="/menu"><div id="load-menu">Menu</div></Link>
    <Link to="/contact"><div id="load-contact">Contact</div></Link>
  </nav>
);

export default Navbar;
