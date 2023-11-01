import useSideBar from "@/app/context/sidebar";
import ArrowDown from "@/app/icons/ArrowDown";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const MenuItem = ({ item }: any) => {
    const [isSubmenuOpen, setSubMenuOpen] = React.useState<boolean>(false);
    const { isOpen, setIsOpen } = useSideBar();

    const toggleSubMenu = () => {
        setSubMenuOpen(!isSubmenuOpen);
    };
    const router = useRouter();

    const closeMobileMenu = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        router.push(href).then(() => {
            setIsOpen(false);
        });
    };

    return (
        <li
            className={
                router.pathname === item.link
                    ? "active"
                    : router.pathname.includes(item.title.toLowerCase())
                    ? "active"
                    : item.link &&
                      item.link !== "/" &&
                      router.pathname.startsWith(item.link.toLowerCase())
                    ? "active"
                    : ""
            }
        >
            <div>
                {item.icon && item.icon}
                {item.link !== null ? (
                    <Link
                        className="sidemenu__link"
                        href={item.link}
                        onClick={(e) => closeMobileMenu(e)}
                    >
                        {item.title}
                    </Link>
                ) : (
                    <span
                        onClick={toggleSubMenu}
                        className={`sidemenu__toggle ${
                            isSubmenuOpen
                                ? "inside__active"
                                : router.pathname.includes(
                                      item.title.toLowerCase()
                                  )
                                ? "active"
                                : ""
                        }`}
                    >
                        {item.title} <ArrowDown className="sidemenu__arrow" />
                    </span>
                )}
            </div>
            {item.sublist && isSubmenuOpen && (
                <ul>
                    {item.sublist.map((subItem: any, index: number) => (
                        <li
                            className={
                                router.pathname === subItem.link
                                    ? "inside__active"
                                    : ""
                            }
                            key={index}
                        >
                            <Link href={subItem.link} onClick={closeMobileMenu}>
                                {subItem.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuItem;
