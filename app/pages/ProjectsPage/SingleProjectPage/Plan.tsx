import Tabs from "@/app/components/Tabs";
import React from "react";

const Plan = ({ data }: any) => {
  return (
    <div className="sproject__plan">
      <div className="sproject__plan-title">Price and Floor Plan</div>
      {/* <Tabs paddingLeft={true}> */}
        <div title="All">
          <div className="sproject__plan-wrapper">
            {data.map((el: any) => (
              <div className="sproject__plan-item">
                <div className="sproject__plan-item-img">
                  <img src={el.image} />
                </div>
                <div className="sproject__plan-item-content">
                  <h3>{el.area} Flat</h3>
                  <span>{el.sf} sq.ft</span>
                  {/* <p>₹ 2.07 Cr</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div title="3 BHK (1)">2</div>
        <div title="4 BHK (1)">3</div> */}
      {/* </Tabs> */}
    </div>
  );
};

export default Plan;
