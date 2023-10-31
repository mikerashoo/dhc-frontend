import Preloader from "@/app/components/Preloader/Preloader";
import Wrapper from "@/app/components/Wrapper";
import { useLoadingContext } from "@/app/context/loading";
import SingleProjectPage from "@/app/pages/ProjectsPage/SingleProjectPage";
import { ProjectsService } from "@/app/services/Projects.service";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

export default function SingleProject({ id }: any) {
  const [rendered, setRendered] = useState(false);
  const { isLoading, setIsLoading } = useLoadingContext();
  const [singleProjectData, setSingleProjectData] = useState<any>();

  useEffect(() => {
    setIsLoading(true);
    ProjectsService.getSingleProject(id)
      .then((res) => setSingleProjectData(res.data.Details))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));

    setRendered(true);
  }, []);
  if (rendered) {
    return (
      <Wrapper>
        {singleProjectData ? (
          <SingleProjectPage data={singleProjectData} />
        ) : (
          <Preloader />
        )}
      </Wrapper>
    );
  }
  return null;
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;

  try {
    return {
      props: { id: id },
    };
  } catch (e: any) {
    return {
      notFound: true,
    };
  }
};
