import React from "react";

type Props = {
  children: React.ReactNode;
  classname?: string;
};

const TableHead: React.FC<Props> = ({ children, classname = "" }) => {
  return <thead className={`thead ${classname}`}>{children}</thead>;
};

export default TableHead;
