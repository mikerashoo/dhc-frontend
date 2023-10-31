import Wrapper from "@/app/components/Wrapper";
import { useLoadingContext } from "@/app/context/loading";
import LeadsManagersPage from "@/app/pages/Leads/LeadsManagersPage/LeadsManagersPage";
import ProjectsPage from "@/app/pages/ProjectsPage";
import AddProjectPage from "@/app/pages/ProjectsPage/AddProjectPage";
import { useEffect, useState } from "react";

export default function Add() {
  const [rendered, setRendered] = useState(false);
  const { isLoading, setIsLoading } = useLoadingContext();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoading(false);
      setRendered(true);
    }
  }, []);
  if (rendered) {
    return (
      <Wrapper>
        <AddProjectPage />
      </Wrapper>
    );
  }
  return null;
}
