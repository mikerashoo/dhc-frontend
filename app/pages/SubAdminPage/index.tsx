import InputSelect from "@/app/components/Form/Select";
import SectionSearch from "@/app/components/SectionSearch";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SubTable from "./SubTable";
import { useRouter } from "next/router";
import { useLoadingContext } from "@/app/context/loading";
import { SubAdminService } from "@/app/services/SubAdminService";
import Preloader from "@/app/components/Preloader/Preloader";
import Search from "@/app/icons/Search";
import { displaySuccessMessage } from "@/app/utils/helpers";
const users = [
  {
    name: "John Deo",
    number: "+33757005467",
    product: "Leads",
    status: "Active",
  },
  {
    name: "John Deo",
    number: "+33757005467",
    product: "Listings Approval",
    status: "Inactive",
  },
  {
    name: "John Deo",
    number: "+33757005467",
    product: "Listings Approval",
    status: "Active",
  },
  {
    name: "John Deo",
    number: "+33757005467",
    product: "Sales",
    status: "Active",
  },
  {
    name: "John Deo",
    number: "+33757005467",
    product: "Sales",
    status: "Active",
  },
  {
    name: "John Deo",
    number: "+33757005467",
    product: "Listings Approval",
    status: "Active",
  },
  {
    name: "John Deo",
    number: "+33757005467",
    product: "Leads",
    status: "Inactive",
  },
  {
    name: "John Deo",
    number: "+33757005467",
    product: "Leads",
    status: "Active",
  },
  {
    name: "John Deo",
    number: "+33757005467",
    product: "Leads",
    status: "Inactive",
  },
  {
    name: "John Deo",
    number: "+33757005467",
    product: "Sales",
    status: "Inactive",
  },
];
const LeadsUsersPage = () => {
  const { register, control, handleSubmit, reset } = useForm();
  const router = useRouter();
  const [subadmins, setSubadmins] = useState([]);
  const { isLoading, setIsLoading } = useLoadingContext();
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  React.useEffect(() => {
    setIsLoading(true);
    SubAdminService.getSubadmins()
      .then((res) => {
        setSubadmins(res.data["Sub Admins"]);
        setSearchResults(res.data["Sub Admins"]); // Инициализируем результаты поиска
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  const handleSearchInputChange = (e: any) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filteredResults = subadmins.filter(
      (subadmin: any) =>
        subadmin.name.toLowerCase().includes(query.toLowerCase()) ||
        subadmin.email.toLowerCase().includes(query.toLowerCase()) ||
        subadmin.phone.includes(query)
    );

    setSearchResults(filteredResults);
  };
  const removeSubadmin = (id: string) => {
    setIsLoading(true);
    SubAdminService.removeSubadmin(id)
      .then((response) => {
        SubAdminService.getSubadmins()
          .then((res) => {
            setSubadmins(res.data["Sub Admins"]);
            setSearchResults(res.data["Sub Admins"]);
            displaySuccessMessage(response.data.message);
          })
          .catch((err) => console.log(err)); // Инициализируем результаты поиска
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };
  if (!subadmins.length) return <Preloader />;
  return (
    <section className="section">
      <div className="section__header">
        <div className="section__header-left">
          <h2>Sub Admins</h2>
          {/* <div className="section__header-select">
            <InputSelect
              prefix="default"
              control={control}
              options={[]}
              placeholder="Listings Approval"
              register={{ ...register("project__leads") }}
            />
          </div> */}
        </div>
        <div className="section__header-right">
          <div className="section__header-search">
            <Search />
            <input
              placeholder="Search"
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
          <button onClick={() => router.push("subadmin/add")} className="btn">
            Add New
          </button>
        </div>
      </div>
      <div className="section__content">
        {searchResults && searchResults.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <SubTable removeSubadmin={removeSubadmin} items={searchResults} />
        )}
      </div>
    </section>
  );
};

export default LeadsUsersPage;
