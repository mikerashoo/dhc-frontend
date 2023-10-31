import Badminton from "@/app/icons/Badminton";
import Gym from "@/app/icons/Gym";
import Hall from "@/app/icons/Hall";
import House from "@/app/icons/House";
import Indoor from "@/app/icons/Indoor";
import Jog from "@/app/icons/Jog";
import Jogging from "@/app/icons/Jogging";
import KidsPool from "@/app/icons/KidsPool";
import Library from "@/app/icons/Library";
import Lift from "@/app/icons/Lift";
import Light from "@/app/icons/Light";
import Oxy from "@/app/icons/Oxy";
import Park from "@/app/icons/Park";
import Pool from "@/app/icons/Pool";
import Reserved from "@/app/icons/Reserved";
import Security from "@/app/icons/Security";
import SwimmingPool from "@/app/icons/SwimmingPool";
import React from "react";
const items = [
  { icon: <Light />, title: "24×7 PowerBackup" },
  { icon: <House />, title: "Club House" },
  { icon: <Gym />, title: "Gymnasium" },
  { icon: <SwimmingPool />, title: "Swimming Pool" },
  { icon: <KidsPool />, title: "Kids Pool" },
  { icon: <Lift />, title: "Lifts" },
  { icon: <Security />, title: "Security" },
  { icon: <Park />, title: "Children’s Park" },
  { icon: <Indoor />, title: "Indoor Games" },
  { icon: <Oxy />, title: "Oxygen Zone" },
  { icon: <Badminton />, title: "Badminton Court" },
  { icon: <Hall />, title: "Multipurpose Hall" },
  { icon: <Library />, title: "Library" },
  { icon: <Jogging />, title: "Jogging Track" },
  { icon: <Reserved />, title: "Reserved Parking" },
];
const Amenties = ({ amenties }: any) => {
  const filteredItems = items.filter((item, index) => amenties.includes(index));
  
  return (
    <div className="sproject__amenties">
      <div className="sproject__overview-title">Amenities</div>
      <div className="sproject__amenties-wrapper">
        {filteredItems.map((item) => (
          <div className="sproject__amenties-item">
            {item.icon}
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenties;
