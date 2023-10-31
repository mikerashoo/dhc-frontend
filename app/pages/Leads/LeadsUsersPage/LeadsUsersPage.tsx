import Select from "react-select";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TableUsers from "./TableUsers";
import { LeadsService } from "@/app/services/LeadsService";
import Preloader from "@/app/components/Preloader/Preloader";
import { useLoadingContext } from "@/app/context/loading";
import Search from "@/app/icons/Search";
const options = [
  { value: 1, label: "Project Leads" },
  { value: 2, label: "Contact Leads" },
  { value: 3, label: "Refer Leads" },
];
const secondOptions = [
  { value: 1, label: "All Leads" },
  { value: 2, label: "Contacted" },
  { value: 3, label: "Not Contacted" },
];
const LeadsUsersPage = () => {
  const { register, control, handleSubmit, reset } = useForm();
  const [users, setUsers] = React.useState<any>();
  const [selectedOption, setSelectedOption] = useState<number | null>(1);
  const [selectedStatus, setSelectedStatus] = useState<number | null>(1);
  const [filteredData, setFilteredData] = useState<any>([]);
  const { isLoading, setIsLoading } = useLoadingContext();
  const [searchQuery, setSearchQuery] = useState("");

  React.useEffect(() => {
    if (users) {
      // Determine which object to select based on selectedOption
      let selectedObject: string = "";
      if (selectedOption === 1) {
        selectedObject = "Project Leads";
      } else if (selectedOption === 2) {
        selectedObject = "Contact Leads";
      } else if (selectedOption === 3) {
        selectedObject = "Refer Leads";
      }
      setFilteredData(users[selectedObject]["All"]);

      if (selectedStatus) {
        let selectedArray: string[] = [];
        if (selectedStatus === 1) {
          selectedArray = users[selectedObject]["All"];
        } else if (selectedStatus === 2) {
          selectedArray = users[selectedObject]["Contacted"];
        } else if (selectedStatus === 3) {
          selectedArray = users[selectedObject]["Not Contacted"];
        }

        setFilteredData(selectedArray);
      }
    }
  }, [selectedOption, selectedStatus, users]);
  React.useEffect(() => {
    setIsLoading(true);
    LeadsService.getUsers()
      .then((res) => {
        setUsers(res.data["User Leads"]);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  const exportLeads = () => {
    const items= filteredData.filter((item: any) => {
      if (item.phone && item.email) {
        const phoneLowerCase = item.phone.toLowerCase();
        const emailLowerCase = item.email.toLowerCase();
        const searchQueryLower = searchQuery.toLowerCase();

        return (
          phoneLowerCase.includes(searchQueryLower) ||
          emailLowerCase.includes(searchQueryLower)
        );
      }
      return false; // Возвращаем false, если поле "phone" или "email" отсутствует
    }); // Array of objects
    const ws = XLSX.utils.json_to_sheet(items);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "user_leads.xlsx");
  };
  const handleSearch = (event: any) => {
    setSearchQuery(event.target.value);
  };
  if (!users) return <Preloader />;
  return (
    <section className="section">
      <div className="section__header">
        <div className="section__header-left">
          <h2>Users Leads</h2>
          <div className="section__header-select">
            <Select
              classNamePrefix="default"
              options={options}
              defaultValue={options[0]}
              onChange={(option: any) => setSelectedOption(option.value)}
            />
            {/* <InputSelect
              prefix="default"
              control={control}
            //   defaultValue={1}
              options={options}
              register={{ ...register("project__leads") }}
            /> */}
          </div>
          <div className="section__header-select">
            {" "}
            <Select
              placeholder="Status"
              classNamePrefix="default"
              options={secondOptions}
              defaultValue={secondOptions[0]}
              onChange={(option: any) => setSelectedStatus(option.value)}
            />
            {/* <InputSelect
              prefix="default"
              //   defaultValue={1}
              control={control}
              options={secondOptions}
              onChange={(option: any) => setSelectedOption(option.value)}
              placeholder="Status"
              register={{ ...register("all__leads") }}
            /> */}
          </div>
        </div>
        <div className="section__header-right">
          <div className="section__header-search">
            <Search />
            <input
              placeholder="Search"
              type="text"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <button onClick={() => exportLeads()} className="btn">
            Export Leads
          </button>
        </div>
      </div>
      <div className="section__content">
        {users && (
          <TableUsers
            items={filteredData.filter((item: any) => {
              if (item.phone && item.email) {
                const phoneLowerCase = item.phone.toLowerCase();
                const emailLowerCase = item.email.toLowerCase();
                const searchQueryLower = searchQuery.toLowerCase();

                return (
                  phoneLowerCase.includes(searchQueryLower) ||
                  emailLowerCase.includes(searchQueryLower)
                );
              }
              return false; // Возвращаем false, если поле "phone" или "email" отсутствует
            })}
          />
        )}
      </div>
    </section>
  );
};

export default LeadsUsersPage;
