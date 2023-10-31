import Wrapper from "@/app/components/Wrapper";
import LeadsManagersPage from "@/app/pages/Leads/LeadsManagersPage/LeadsManagersPage";
import LeadsUsersPage from "@/app/pages/Leads/LeadsUsersPage/LeadsUsersPage";
import { useEffect, useState } from "react";

export default function LeadsManagers() {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  if (rendered) {
    return (
      <Wrapper>
        <LeadsManagersPage />
      </Wrapper>
    );
  }
  return null;
}
