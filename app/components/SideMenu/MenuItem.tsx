import ArrowDown from "@/app/icons/ArrowDown";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const MenuItem = ({ item }: any) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
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
          <Link className="sidemenu__link" href={item.link}>
            {item.title}
          </Link>
        ) : (
          <span
            onClick={toggleSubMenu}
            className={`sidemenu__toggle ${
              isOpen
                ? "inside__active"
                : router.pathname.includes(item.title.toLowerCase())
                ? "active"
                : ""
            }`}
          >
            {item.title} <ArrowDown className="sidemenu__arrow" />
          </span>
        )}
      </div>
      {item.sublist && isOpen && (
        <ul>
          {item.sublist.map((subItem: any, index: number) => (
            <li
              className={
                router.pathname === subItem.link ? "inside__active" : ""
              }
              key={index}
            >
              <Link href={subItem.link}>{subItem.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
