import Denied from "@/app/icons/Denied";
import Location from "@/app/icons/Location";
import Love from "@/app/icons/Love";
import Share from "@/app/icons/Share";
import Succes from "@/app/icons/Succes";
import React from "react";

const Information = ({ data, changeStatus }: any) => {
  return (
    <div className="sproject__information">
      <div className="sproject__information-left">
        <h5>{data.projectName}</h5>
        <span className="project__item-content-location">
          <Location />
          {`${data.country} ${data.city}`}
        </span>
        <div className="sproject__information-by">
          By <span>{data.devName}</span>
        </div>
        <div className="sproject__information-details">
          <h6>Developer Details</h6>
          <div className="sproject__information-details-wrapper">
            <div className="sproject__information-details-item">
              Name: <span>{data.devName}</span>
            </div>
            <div className="sproject__information-details-item">
              Email: <span>{data.devDetails.email}</span>
            </div>
            <div className="sproject__information-details-item">
              Phone Number: <span> {data.devDetails.phone}</span>
            </div>
            {data.devDetails.position && (
              <div className="sproject__information-details-item">
                Position: <span>{data.devDetails.position}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="sproject__information-right">
        {/* <div className="sproject__information-icons">
          <span>
            <Share />
          </span>
          <span>
            <Love />
          </span>
        </div> */}
        <div className="sproject__infromation-right-wrapper">
          <div className="sproject__information-price">
            <span>{data.budget}</span>
            <span></span>
          </div>
          <div className="sproject__information-status">
            {/* <div className="project__item-btns">
              <button className="btn">Approve</button>
              <button className="btn">Reject</button>
            </div> */}
            {data.status === "Pending" ? (
              <div className="project__item-btns">
                <button
                  onClick={(e) => changeStatus("Approved", data.id, e)}
                  className="btn"
                >
                  Approve
                </button>
                <button
                  onClick={(e) => changeStatus("Rejected", data.id, e)}
                  className="btn"
                >
                  Reject
                </button>
              </div>
            ) : data.status === "Approved" ? (
              <div className="project__item-status-succes project__item-status">
                <Succes /> Approved
              </div>
            ) : data.status === "Rejected" ? (
              <div className="project__item-status-denied project__item-status">
                <Denied /> Rejected
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
