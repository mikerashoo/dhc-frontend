import React from "react";

type Props = {
  children: React.ReactNode;
  classname?: string;
};

const TableBody: React.FC<Props> = ({ children, classname = "" }) => {
  return <tbody className={`tbody ${classname}`}>{children}</tbody>;
};

export default TableBody;
