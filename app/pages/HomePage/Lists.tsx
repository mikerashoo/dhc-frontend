import ArrowRight from "@/app/icons/ArrowRight";
import { useRouter } from "next/router";
import React, { FC } from "react";

const Lists: FC<any> = ({ blogs, projects }) => {
  const lists = [
    {
      title: "Pending Approvals List",
      number: `(${projects.pending})`,
      link: "/projects",
    },
    { title: "List New Project", number: "", link: "/projects/add" },
    {
      title: "Add Blogs",
      number: `(${blogs.live})`,
      link: "/blogs/upload",
    },
  ];
  const router = useRouter();
  return (
    <div className="home__lists lists">
      {lists.map((list) => (
        <div className="lists__item">
          <div className="lists__item-left">
            <h3>{list.title}</h3>
            <span>{list.number}</span>
          </div>
          <div
            onClick={() => router.push(list.link)}
            className="lists__item-right"
          >
            <ArrowRight />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lists;
