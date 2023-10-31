import Wrapper from "@/app/components/Wrapper";
import { useLoadingContext } from "@/app/context/loading";
import UploadBlogPage from "@/app/pages/BlogsPage.tsx/UploadBlogPage";
import { useEffect, useState } from "react";

export default function UploadBlog() {
  const [rendered, setRendered] = useState(false);
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    // setIsLoading(false);
    setRendered(true);
  });
  if (rendered) {
    return (
      <Wrapper>
        <UploadBlogPage />
      </Wrapper>
    );
  }
  return null;
}
