import React from "react";

type Props = {
  className?: string,
  updateListData?: any,
  children: React.ReactNode
}

const Table: React.FC<Props> =
  ({
     children,
     className
   }) => {

    return (
      <div className="table__wrapper">
        <table className={`table ${className}`}>
          {children}
        </table>
      </div>
    )
  }

export default Table
