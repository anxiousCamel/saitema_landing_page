"use client"; 
import React, { useState } from "react";
import Nav from "./nav";
import MobileNav from "./mobileNav";

const ResponsiveNav = () => { 
  const [showNav, setShadowNav] = useState(false);
  const openNavHandler =()=> setShadowNav(true);
  const closenavHandler =()=> setShadowNav(false); 

  return (
    <nav>
      <Nav openNav={openNavHandler} />
      <MobileNav showNav={showNav} closeNav={closenavHandler} />
    </nav>
  );
};

export default ResponsiveNav;
