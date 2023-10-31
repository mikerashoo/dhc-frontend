import { Inter } from "next/font/google";
import Wrapper from "@/app/components/Wrapper";
import HomePage from "@/app/pages/HomePage";
import { useEffect, useState } from "react";

export default function Home() {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);

  if (rendered) {
    return (
      <Wrapper>
        <HomePage />
      </Wrapper>
    );
  }
  return null;
}
