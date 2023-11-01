import TableColumn from "@/app/components/Table/TableColumn";
import React, { FC } from "react";
import Table from "../../components/Table/Table";
import TableBody from "../../components/Table/TableBody";
import TableHead from "../../components/Table/TableHead";
import TableRow from "../../components/Table/TableRow";
const users = [
    {
        id: 1,
        name: "Sameer Kaushik ",
        number: "+33757005467",
        created: "2:30 PM",
    },
    {
        id: 2,
        name: "Priyanka Chopra ",
        number: "+33757005467",
        created: "2:24 PM",
    },
    {
        id: 3,
        name: "Rahul Khanna ",
        number: "+33757005467",
        created: "1:48 PM",
    },
    {
        id: 4,
        name: "Aakash Desai ",
        number: "+33757005467",
        created: "1:30 PM",
    },
    {
        id: 5,
        name: "Karan Shekhawat ",
        number: "+33757005467",
        created: "11.22 AM",
    },
    {
        id: 6,
        name: "Aakash Desai",
        number: "+33757005467",
        created: "11: 16 AM,",
    },
    {
        id: 7,
        name: "Karan Shekhawat",
        number: "+33757005467",
        created: "10:59 AM",
    },
    {
        id: 8,
        name: "Aakash Desai",
        number: "+33757005467",
        created: "9.30 AM",
    },
];
const LeadTable: FC<any> = ({ table }) => {
    return (
        <div className="home__tableleader tableleader w-full md:w-auto">
            <h1>Today’s Leads (User)</h1>
            <Table className="home__table">
                <TableHead>
                    <TableRow>
                        <TableColumn>Sr.No.</TableColumn>
                        <TableColumn>Name</TableColumn>
                        <TableColumn>Phone Number </TableColumn>
                        <TableColumn>Lead Created</TableColumn>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {table.map((user: any, index: number) => (
                        <TableRow key={index}>
                            <TableColumn>{user.id}</TableColumn>
                            <TableColumn>{user.name}</TableColumn>
                            <TableColumn>{user.phone}</TableColumn>
                            <TableColumn>{user.CreatedAt}</TableColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default LeadTable;
