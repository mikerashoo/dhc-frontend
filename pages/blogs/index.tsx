import { Inter } from "next/font/google";
import Wrapper from "@/app/components/Wrapper";
import HomePage from "@/app/pages/HomePage";
import BlogsPage from "@/app/pages/BlogsPage.tsx";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  if (rendered) {
    return (
      <Wrapper>
        <BlogsPage />
      </Wrapper>
    );
  }
  return null;
}
