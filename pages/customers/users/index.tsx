import Wrapper from "@/app/components/Wrapper";
import CustomersUsersPage from "@/app/pages/CustomersPage/CustomersUsersPage";
import LeadsManagersPage from "@/app/pages/Leads/LeadsManagersPage/LeadsManagersPage";
import LeadsUsersPage from "@/app/pages/Leads/LeadsUsersPage/LeadsUsersPage";
import { useEffect, useState } from "react";

export default function CustomersUsers() {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  if (rendered) {
    return (
      <Wrapper>
        <CustomersUsersPage />
      </Wrapper>
    );
  }
  return null;
}
