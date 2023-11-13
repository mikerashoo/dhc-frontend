import InputSelect from "@/app/components/Form/Select";
import SectionSearch from "@/app/components/SectionSearch";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ManagersTable from "./ManagersTable";
import { useLoadingContext } from "@/app/context/loading";
import { CustomersService } from "@/app/services/CustomersService";
import Preloader from "@/app/components/Preloader/Preloader";
import Search from "@/app/icons/Search";

const CustomersManagersPage = () => {
    const { register, control, handleSubmit, reset } = useForm();
    const [users, setUsers] = React.useState<any>([]);
    const { isLoading, setIsLoading } = useLoadingContext();
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    React.useEffect(() => {
        setIsLoading(true);
        CustomersService.getCustomers("Manager")
            .then((res) => {
                setUsers(res.data.Customers);
                setSearchResults(res.data.Customers);
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
    if (!users.length) return <Preloader />;
    return (
        <section className="section">
            <div className="section__header flex flex-wrap px-2">
                <div className="section__header-left">
                    <h2>Customers-Managers</h2>
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
                </div>
            </div>
            <div className="section__content">
                {searchResults && searchResults.length === 0 ? (
                    <p>No results found.</p>
                ) : (
                    <ManagersTable items={searchResults} />
                )}
            </div>
        </section>
    );
};

export default CustomersManagersPage;
