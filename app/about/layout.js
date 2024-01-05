import React from "react";
import AboutNav from "../../components/AboutNav";

const AboutLayout = ({ children }) => {
  return (
    <div>
      <AboutNav />
      <div>{children}</div>
    </div>
  );
};

export default AboutLayout;
