// import { Details } from "@/app/constants/interfaces";
import TinyArrow from "@/app/icons/TinyArrow";
import React, { FC } from "react";
// const details: Details = {
interface Details {
  [key: string]: {
    total: string;
    thanLastMonth: string;
  };
}

const Cards: FC<any> = ({ Users, Managers, Leads }) => {
  const details: Details = {
    Users: {
      total: Users.total,
      thanLastMonth: Users.thanLastMonth,
    },
    Managers: {
      total: Managers.total,
      thanLastMonth: Managers.thanLastMonth,
    },
    Leads: {
      total: Leads.total,
      thanLastMonth: Leads.thanLastMonth,
    },
  };
  return (
    <div className="home__cards cards">
      {Object.keys(details).map((key) => (
        <div key={key} className="cards__item">
          <div className="cards__item-top">
            <div className="cards__img">
              <img
                src={
                  key === "Users"
                    ? "/assets/images/home1.png"
                    : key === "Managers"
                    ? "/assets/images/home2.png"
                    : "/assets/images/home3.png"
                }
              />
            </div>
            <div className="cards__percent">
              <p>
                {details[key].thanLastMonth}
                <TinyArrow />
              </p>
              <span>Than last month</span>
            </div>
            {/* <p>Than last month {details[key].thanLastMonth}</p> */}
          </div>

          <h2>{key === "Leads" ? "Projects Listed" : "Total" + " " + key}</h2>
          <p> {details[key].total}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
