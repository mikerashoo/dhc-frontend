import Wrapper from "@/app/components/Wrapper";
import { useLoadingContext } from "@/app/context/loading";
import VideosPage from "@/app/pages/BlogsPage.tsx/VideosPage";
import UploadVideoPage from "@/app/pages/BlogsPage.tsx/VideosPage/UploadVideoPage";
import { useEffect, useState } from "react";

export default function VideosUpload() {
  const [rendered, setRendered] = useState(false);
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    setRendered(true);
    setIsLoading(false);
  }, []);
  if (rendered) {
    return (
      <Wrapper>
        <UploadVideoPage />
      </Wrapper>
    );
  }
  return null;
}
