import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TableManagers from "./TableManagers";
import { LeadsService } from "@/app/services/LeadsService";
import { useLoadingContext } from "@/app/context/loading";
import Preloader from "@/app/components/Preloader/Preloader";
import Search from "@/app/icons/Search";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
const LeadsUsersPage = () => {
  const { register, control, handleSubmit, reset } = useForm();
  const [users, setUsers] = React.useState<any>([]);
  const { isLoading, setIsLoading } = useLoadingContext();
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  React.useEffect(() => {
    setIsLoading(true);
    LeadsService.getManagers()
      .then((res) => {
        setUsers(res.data["Dev Leads"]);
        setSearchResults(res.data["Dev Leads"]);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  const handleSearchInputChange = (e: any) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filteredResults = users.filter(
      (subadmin: any) =>
        subadmin.name.toLowerCase().includes(query.toLowerCase()) ||
        subadmin.email.toLowerCase().includes(query.toLowerCase()) ||
        subadmin.phone.includes(query)
    );

    setSearchResults(filteredResults);
  };
  const exportLeads = () => {
    const data = searchResults; // Array of objects
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "leads.xlsx");
  };
  if (!users.length) return <Preloader />;

  return (
    <section className="section">
      <div className="section__header">
        <div className="section__header-left">
          <h2>Manager Leads</h2>
          {/* <div className="section__header-select">
            {" "}
            <InputSelect
              prefix="default"
              placeholder="All Leads"
              control={control}
              options={[]}
              register={{ ...register("all__leads") }}
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
          <button onClick={() => exportLeads()} className="btn">
            Export Leads
          </button>
        </div>
      </div>
      <div className="section__content">
        {searchResults && searchResults.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <TableManagers items={searchResults} />
        )}
      </div>
    </section>
  );
};

export default LeadsUsersPage;
