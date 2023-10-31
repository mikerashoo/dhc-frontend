import React from "react";

const About = ({ data }: any) => {
  return (
    <div className="sproject__about">
      <div className="sproject__about-title">
        About <span>{data.devName}</span>
      </div>
      <p>{data.aboutDev}</p>
      {/* <div className="sproject__about-title">Virtual Tour</div>
      <div className="sproject__about-link">You Tube video link</div> */}
    </div>
  );
};

export default About;
