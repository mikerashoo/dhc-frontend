import Search from "@/app/icons/Search";
import React from "react";

const SectionSearch = () => {
  return (
    <div className="section__header-search">
      <Search />
      <input placeholder="Search" type="text" />
    </div>
  );
};

export default SectionSearch;
