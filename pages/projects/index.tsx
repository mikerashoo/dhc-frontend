import Wrapper from "@/app/components/Wrapper";
import LeadsManagersPage from "@/app/pages/Leads/LeadsManagersPage/LeadsManagersPage";
import ProjectsPage from "@/app/pages/ProjectsPage";
import { useEffect, useState } from "react";

export default function Projects() {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  if (rendered) {
    return (
      <Wrapper>
        <ProjectsPage />
      </Wrapper>
    );
  }
  return null;
}
