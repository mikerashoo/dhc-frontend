import React, { FC, SyntheticEvent } from "react";
import Table from "@/app/components/Table/Table";
import TableBody from "@/app/components/Table/TableBody";
import TableColumn from "@/app/components/Table/TableColumn";
import TableHead from "@/app/components/Table/TableHead";
import TableRow from "@/app/components/Table/TableRow";
import WpIcon from "@/app/icons/WpIcon";
import { useOnClickOutside } from "@/app/hooks/useOnClickOutside";
import { useRouter } from "next/router";
type Props = {
  items: any;
};
const ManagersTable: FC<Props> = ({ items }) => {
//   const [activeUserId, setActiveUserId] = React.useState("");
  //   const activeUserRefs = items.map(() => React.useRef<HTMLDivElement>(null));

  //   const onActionClick = (id: string) => {
  //     setActiveUserId(id);
  //   };
  //   const transitionToDetail = (event: SyntheticEvent, id: string) => {
  //     event.preventDefault();
  //     router.push(`/customers/managers/${id}`);
  //   };
  const router = useRouter();
  //   React.useEffect(() => {
  //     const handleDocumentClick = (event: MouseEvent | TouchEvent) => {
  //       // Check if the click is outside any of the activeUserRefs
  //       if (
  //         activeUserRefs.every(
  //           (ref: any) => !ref.current?.contains(event.target as Node)
  //         )
  //       ) {
  //         setActiveUserId("");
  //       }
  //     };

  //     document.addEventListener("mousedown", handleDocumentClick);
  //     document.addEventListener("touchstart", handleDocumentClick);

  //     return () => {
  //       document.removeEventListener("mousedown", handleDocumentClick);
  //       document.removeEventListener("touchstart", handleDocumentClick);
  //     };
  //   }, [activeUserRefs]);
  return (
    <Table className="thead__gray">
      <TableHead>
        <TableRow>
          <TableColumn>Name</TableColumn>
          <TableColumn>Phone Number</TableColumn>
          <TableColumn>Email ID</TableColumn>
          <TableColumn>Position</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((user: any, index: number) => (
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
            <TableColumn>{user.email}</TableColumn>
            <TableColumn>{user.position}</TableColumn>

            <TableColumn>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => router.push(`/customers/managers/${user.id}`)}
              >
                {" "}
                ...
              </div>
              {/* <div
                onClick={() => onActionClick(user.id)}
                className="table__actions"
              > */}
              {/* <div
                  ref={activeUserRefs[index]}
                  className={`table__actions-body ${
                    user.id === activeUserId ? "table__actions-body-active" : ""
                  } `}
                >
                  <span onClick={(event) => transitionToDetail(event, user.id)}>
                    Details
                  </span>
                  <span>Delete</span>
                </div>
              </div> */}
            </TableColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ManagersTable;
