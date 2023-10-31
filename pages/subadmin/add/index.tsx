import Wrapper from "@/app/components/Wrapper";
import { useLoadingContext } from "@/app/context/loading";
import AddSubAdminPage from "@/app/pages/SubAdminPage/AddSubAdminPage";
import { useEffect, useState } from "react";

export default function AddSubAdmin() {
  const [rendered, setRendered] = useState(false);
  const { isLoading, setIsLoading } = useLoadingContext();
  useEffect(() => {
    setIsLoading(false);
    setRendered(true);
  }, []);
  if (rendered) {
    return (
      <Wrapper>
        <AddSubAdminPage />
      </Wrapper>
    );
  }
  return null;
}
