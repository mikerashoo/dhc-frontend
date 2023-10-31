import React, { FC } from "react";
import ProjectItem from "./ProjectItem";
type Props = {
  items: any;
};
const Our: FC<Props> = ({ items }) => {
  return (
    <div className="project__wrapper">
      {items.map((el: any, index: number) => (
        <ProjectItem type="our" el={el} key={index} />
      ))}
    </div>
  );
};

export default Our;
