import React from "react";

const Desc = ({ data }: any) => {
  return (
    <div className="sproject__top-right-desc">
      {" "}
      <h4>
        About <span>{data.devName} </span>
      </h4>
      <p> {data.aboutDev}</p>
    </div>
  );
};

export default Desc;
