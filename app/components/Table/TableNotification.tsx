import React from "react";
import styles from "./styles.module.scss"
import classNames from "classnames"
import { IPagination } from "../../types/types";



type Props = {
  className?: string,
  updateListData?: any,
  children: React.ReactNode
  pagination?: boolean,
  paginationData?: IPagination,
  updatePaginationData?: any,
}

const TableNotification: React.FC<Props> =
  ({
     children,
     className,
     pagination,
     paginationData,
     updateListData,
     updatePaginationData
   }) => {

    return (
      <>
        <table className={classNames(styles.table, className)}>
          {children}
        </table>
      </>
    )
  }

export default TableNotification
