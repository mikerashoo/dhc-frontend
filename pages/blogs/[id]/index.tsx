import Wrapper from "@/app/components/Wrapper";
import { useLoading, useLoadingContext } from "@/app/context/loading";
import SingleBlogPage from "@/app/pages/BlogsPage.tsx/SingleBlogPage";
import { BlogsService } from "@/app/services/BlogsService";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

export default function SingleBlog({ id }: any) {
  const [rendered, setRendered] = useState(false);
  const [singleBlogData, setSingleBlogData] = useState<any>();
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    setIsLoading(true);
    BlogsService.getSingleBlogs(id, "Artical")
      .then((res) => setSingleBlogData(res.data.Details))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
    setRendered(true);
  }, []);
  if (rendered) {
    return (
      <Wrapper>
        {singleBlogData && <SingleBlogPage data={singleBlogData} />}
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
