import React from 'react';

import MenuItem from "../components/menu/MenuItem";

export const Home = () => (
  <div className="menu">
    <MenuItem price="$10" name="Burger"/>
    <MenuItem price="$12" name="Fish and Chips"/>
    <MenuItem price="$5" name="Fries"/>
  </div>
);

export default Home;

