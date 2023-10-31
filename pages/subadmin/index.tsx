import Wrapper from "@/app/components/Wrapper";
import SubAdminPage from "@/app/pages/SubAdminPage";
import { useEffect, useState } from "react";

export default function SubAdmin() {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  if (rendered) {
    return (
      <Wrapper>
        <SubAdminPage />
      </Wrapper>
    );
  }
  return null;
}
