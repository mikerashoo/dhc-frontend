import React, { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLTableRowElement> & {
  bold?: boolean;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
};

const TableColumn: React.FC<Props> = ({
  children,
  bold,
  className,
  colSpan,
  rowSpan,
  ...props
}) => {
  
  return (
    // @ts-ignore
    <td
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={`${bold ? "bold" : ""} ${className}`}
      {...props}
    >
      {children}
    </td>
  );
};

export default TableColumn;
