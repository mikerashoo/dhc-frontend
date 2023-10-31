import { Inter } from "next/font/google";
import Wrapper from "@/app/components/Wrapper";
import HomePage from "@/app/pages/HomePage";
import VideosPage from "@/app/pages/BlogsPage.tsx/VideosPage";
import { useEffect, useState } from "react";

export default function Videos() {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  if (rendered) {
    return (
      <Wrapper>
        <VideosPage />
      </Wrapper>
    );
  }
  return null;
}
