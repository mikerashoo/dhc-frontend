import Tabs from "@/app/components/Tabs";
import React, { useState } from "react";
import All from "./All";
import Pending from "./Pending";
import Approved from "./Approved";
import Rejected from "./Rejected";
import Our from "./Our";
import { useRouter } from "next/router";
import { useLoadingContext } from "@/app/context/loading";
import { ProjectsService } from "@/app/services/Projects.service";
import Preloader from "@/app/components/Preloader/Preloader";
import Search from "@/app/icons/Search";
import { displaySuccessMessage } from "@/app/utils/helpers";
import ContentWrapper from "@/app/components/ContentWrapper";
interface Projects {
    [key: string]: any[]; // Здесь any[] может быть заменен на более конкретный тип, если у вас есть специфические данные
}
const ProjectsPage = () => {
    const { isLoading, setIsLoading } = useLoadingContext();
    const [projects, setProjects] = React.useState<any>();
    const [searchQuery, setSearchQuery] = useState(""); // Состояние для поискового запроса

    const router = useRouter();
    React.useEffect(() => {
        setIsLoading(true);
        ProjectsService.getProjects()
            .then((res) => {
                setProjects(res.data.Projects);
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);
    const filteredProjects: Projects = projects
        ? Object.keys(projects).reduce((filtered, category) => {
              if (projects[category]) {
                  filtered[category] = projects[category].filter(
                      (project: any) =>
                          project.projectName
                              .toLowerCase()
                              .includes(searchQuery.toLowerCase())
                  );
              }
              return filtered;
          }, {} as Projects)
        : {};
    if (!projects) return <Preloader />;
    return (
        <ContentWrapper>
            <div className="section__header flex flex-wrap gap-2">
                <div>
                    {" "}
                    <h2>List Projects</h2>
                </div>
                {/* <div className="flex items-center"> */}
                <div className="section__header-search flex items-center">
                    <Search />
                    <input
                        placeholder="Search"
                        type="text"
                        className="w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button
                    onClick={() => router.push("/projects/add")}
                    className="btn "
                >
                    List <span className="hidden md:inline">Project</span>
                </button>
                {/* </div> */}
            </div>
            <div className="flex flex-wrap w-full">
                {projects["All"] && (
                    <Tabs>
                        <div title={`All (${filteredProjects["All"].length})`}>
                            <All items={filteredProjects["All"]} />
                        </div>
                        <div
                            title={`Pending (${filteredProjects["Pending"].length})`}
                        >
                            <Pending items={filteredProjects["Pending"]} />
                        </div>
                        <div
                            title={`Approved (${filteredProjects["Approved"].length})`}
                        >
                            <Approved items={filteredProjects["Approved"]} />
                        </div>
                        <div
                            title={`Rejected (${filteredProjects["Rejected"].length})`}
                        >
                            <Rejected items={filteredProjects["Rejected"]} />
                        </div>
                        <div
                            title={`Our Listings (${filteredProjects["Our Listings"].length})`}
                        >
                            <Our items={filteredProjects["Our Listings"]} />
                        </div>
                    </Tabs>
                )}
            </div>
        </ContentWrapper>
    );
};

export default ProjectsPage;
