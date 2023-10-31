import React, { FC } from "react";
import Table from "@/app/components/Table/Table";
import TableBody from "@/app/components/Table/TableBody";
import TableColumn from "@/app/components/Table/TableColumn";
import TableHead from "@/app/components/Table/TableHead";
import TableRow from "@/app/components/Table/TableRow";
import WpIcon from "@/app/icons/WpIcon";
type Props = {
  items: any;
};
const TableUsers: FC<Props> = ({ items }) => {
  return (
    <Table className="thead__gray">
      <TableHead>
        <TableRow>
          <TableColumn>Name</TableColumn>
          <TableColumn>Phone Number</TableColumn>
          <TableColumn>Email ID</TableColumn>
          <TableColumn>Position</TableColumn>
          <TableColumn>Project Location</TableColumn>
          <TableColumn>Developer Name</TableColumn>
          <TableColumn>Lead Created</TableColumn>
          {/* <TableColumn>Actions</TableColumn> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((user: any) => (
          <TableRow>
            <TableColumn>{user.name}</TableColumn>
            <TableColumn>
              <span>
                {" "}
                <WpIcon />
                {user.phone}
              </span>
            </TableColumn>
            <TableColumn>{user.email}</TableColumn>
            <TableColumn>{user.position}</TableColumn>
            <TableColumn>{user.ProjectLocation}</TableColumn>
            <TableColumn>{user.devName}</TableColumn>
            <TableColumn>{user["register-date"]}</TableColumn>
            {/* <TableColumn>...</TableColumn> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableUsers;
