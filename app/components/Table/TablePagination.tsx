import React, { useState } from "react";

import { IPagination } from "../../types/types";

import Box from "@mui/material/Box";
import TablePagination from "@mui/material/TablePagination";

import IconButton from "@mui/material/IconButton";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { TablePaginationActionsProps } from "../../constants/interfaces";
type Props = {
  paginationData: IPagination;
  setPaginationData: Function;
};

const CustomTablePagination: React.FC<Props> = ({
  paginationData,
  setPaginationData,
}) => {
  function TablePaginationActions(props: TablePaginationActionsProps) {
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, 0);
    };

    const handleBackButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          <KeyboardArrowRight />
        </IconButton>
      </Box>
    );
  }

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPaginationData({ ...paginationData, currentPage: newPage });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPaginationData({
      ...paginationData,
      currentPage: 0,
      itemsPerPage: parseInt(event.target.value, 10),
    });
  };

  // Modals
  const [isShowBlockModal, setIsShowBlockModal] = useState(false);

  const handleCloseBlockModal = () => {
    setIsShowBlockModal(false);
  };

  const updatePaginationData = (data: IPagination) => {
    setPaginationData(data);
  };
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      colSpan={3}
      count={paginationData.totalItems}
      rowsPerPage={paginationData.itemsPerPage}
      page={paginationData.currentPage}
      className={"pagination__wrapper"}
      SelectProps={{
        inputProps: {
          "aria-label": `page_lines`,
        },
        native: true,
      }}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      ActionsComponent={TablePaginationActions}
    />
  );
};

export default CustomTablePagination;
