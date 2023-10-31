import React from "react";

const Details = ({ data }: any) => {
  return (
    <div className="sproject__details">
      <div className="sproject__details-title">Details</div>
      <div className="sproject__details-wrapper">
        <div className="sproject__details-item">
          <div> {data.ApartmentType.map((el: any) => el + " ")}</div>
          <span>Apartments</span>
        </div>
        <div className="sproject__details-item">
          <div>{data.CarpetAreaRange} </div>
          <span>Carpet Area</span>
        </div>
        <div className="sproject__details-item">
          <div>{data.total_tower}</div>
          <span>Total Towers</span>
        </div>

        <div className="sproject__details-item">
          <div>{data.units}</div>
          <span>Total Units</span>
        </div>
        <div className="sproject__details-item">
          <div>{data.ConstructionStage}</div>
          <span>Construction Stage</span>
        </div>
        <div className="sproject__details-item">
          <div>{data.RERAID} </div>
          <span>RERA ID</span>
        </div>
        <div className="sproject__details-item">
          <div>{data.type} </div>
          <span>Property Type</span>
        </div>
        <div className="sproject__details-item">
          <div>{data.budget}</div>
          <span>Avg. Price</span>
        </div>
        {/* <div className="sproject__details-item">
          <div>{data.ProjectArea}</div>
          <span>Project Area</span>
        </div>
     */}
        {/* <div className="sproject__details-item">
          <div>{data.type} </div>
          <span>Project Type</span>
        </div> */}
        <div className="sproject__details-item">
          <div>{data.state} </div>
          <span>Location</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
