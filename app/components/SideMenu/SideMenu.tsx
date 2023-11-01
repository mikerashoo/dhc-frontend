import Link from "next/link";
import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import MenuLeads from "@/app/icons/MenuLeads";
import MenuProjects from "@/app/icons/MenuProjects";
import MenuCustomers from "@/app/icons/MenuCustomers";
import MenuBlogs from "@/app/icons/MenuBlogs";
import MenuDashboard from "@/app/icons/MenuDashboard";
import { CloseOutlined } from "@mui/icons-material";
import useSideBar from "@/app/context/sidebar";

const menuList = [
    { title: "Dashboard", link: "/", icon: <MenuDashboard /> },
    {
        title: "Leads",
        link: null,
        icon: <MenuLeads />,
        sublist: [
            { title: "Users", link: "/leads/users" },
            { title: "Managers", link: "/leads/managers" },
        ],
        accessTitle: "Leads",
    },
    {
        title: "List Projects",
        link: "/projects",
        icon: <MenuProjects />,
        accessTitle: "Listings",
    },
    {
        title: "Blogs",
        link: "/blogs",
        icon: <MenuBlogs />,
        accessTitle: "Blogs",
    },
    {
        title: "Customers",
        link: null,
        icon: <MenuCustomers />,
        sublist: [
            { title: "Users", link: "/customers/users" },
            { title: "Managers", link: "/customers/managers" },
        ],
        accessTitle: "Sales",
    },
    {
        title: "Sub Admin",
        link: "/subadmin",
        icon: <MenuCustomers />,
    },
];

const SideMenu = () => {
    const [accesses, setAccesses] = useState<string[]>([]);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const { isOpen, setIsOpen } = useSideBar();

    useEffect(() => {
        if (
            localStorage.getItem("user") &&
            JSON.parse(String(localStorage.getItem("user")))?.access
        ) {
            setAccesses(
                JSON.parse(String(localStorage.getItem("user")))?.access
            );
        }
        if (
            localStorage.getItem("user") &&
            JSON.parse(String(localStorage.getItem("user")))?.isAdmin
        ) {
            setIsAdmin(
                JSON.parse(String(localStorage.getItem("user")))?.isAdmin
            );
        }
    }, []);
    return (
        <div className="sidemenu md:w-[300px]">
            <div className="sidemenu__wrapper">
                <div className="sidemenu__logo flex items-center">
                    <img src="/assets/images/logo.png" alt="DHC" />
                    <button
                        className="text-white md:hidden"
                        onClick={() => setIsOpen(false)}
                    >
                        <CloseOutlined />
                    </button>
                </div>
                <div className="sidemenu__list">
                    <ul>
                        {menuList.map((item, index) => {
                            if (isAdmin) {
                                return <MenuItem key={index} item={item} />;
                            }
                            if (accesses?.includes(String(item.accessTitle))) {
                                return <MenuItem key={index} item={item} />;
                            }
                            return null;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
