import Tabs from "@/app/components/Tabs";
import React from "react";

const Overview = ({ data }: any) => {
  return (
    <div className="sproject__overview">
      <div className="sproject__overview-wrapper">
        <div className="sproject__overview-title">Overview</div>
        <div className="sproject__overview-desc">
          Description:
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
