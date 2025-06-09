import React from "react";
import Hero from "./hero/hero";
import Services from "./services/sevices";

const homePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />  
    </div>
  );
};

export default homePage;
