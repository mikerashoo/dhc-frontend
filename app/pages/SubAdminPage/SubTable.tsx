import React, { FC } from "react";
import Table from "@/app/components/Table/Table";
import TableBody from "@/app/components/Table/TableBody";
import TableColumn from "@/app/components/Table/TableColumn";
import TableHead from "@/app/components/Table/TableHead";
import TableRow from "@/app/components/Table/TableRow";
import WpIcon from "@/app/icons/WpIcon";
import Delete from "@/app/icons/Delete";
type Props = {
  items: any;
  removeSubadmin: Function;
};
const SubTable: FC<Props> = ({ items, removeSubadmin }) => {
  return (
    <Table className="thead__gray">
      <TableHead>
        <TableRow>
          <TableColumn>Name</TableColumn>
          <TableColumn>Phone Number</TableColumn>
          <TableColumn>Access</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((user: any) => (
          <TableRow>
            <TableColumn>{user.name}</TableColumn>
            <TableColumn>
              {" "}
              <span>
                {" "}
                <WpIcon />
                {user.phone}
              </span>
            </TableColumn>
            <TableColumn>
              {user.access ? user.access.map((el: any) => `${el}` + " ") : ""}
            </TableColumn>
            <TableColumn
            //   style={{ color: user.status === "Active" ? "green" : "red" }}
            >
              {user.email}
            </TableColumn>
            <TableColumn>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => removeSubadmin(user.id)}
              >
                <Delete />
              </div>
            </TableColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SubTable;
