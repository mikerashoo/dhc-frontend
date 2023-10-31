import React, { FC } from "react";
import ProjectItem from "./ProjectItem";
type Props = {
  items: any;
  //   changeStatus: Function;
};
const All: FC<Props> = ({ items }) => {
  return (
    <div className="project__wrapper">
      {items.map((el: any, index: number) => (
        <ProjectItem
          //   changeStatus={changeStatus}
          type="default"
          el={el}
          key={index}
        />
      ))}
    </div>
  );
};

export default All;
