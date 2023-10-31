import Wrapper from "@/app/components/Wrapper";
import LeadsUsersPage from "@/app/pages/Leads/LeadsUsersPage/LeadsUsersPage";
import { useEffect, useState } from "react";

export default function LeadsUsers() {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  if (rendered) {
    return (
      <Wrapper>
        <LeadsUsersPage />
      </Wrapper>
    );
  }
  return null;
}
