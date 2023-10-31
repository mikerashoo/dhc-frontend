import Wrapper from "@/app/components/Wrapper";
import { useLoadingContext } from "@/app/context/loading";
import SingleManagerPage from "@/app/pages/CustomersPage/CustomersManagersPage/SingleManagerPage";
import { CustomersService } from "@/app/services/CustomersService";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

export default function CustomersManagersSingle({ id }: any) {
  const [rendered, setRendered] = useState(false);
  const [singleManager, setSingleManager] = useState<any>();
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    setIsLoading(true);
    CustomersService.getSingleCustomer(id)
      .then((res) => setSingleManager(res.data.details))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
    setRendered(true);
  }, []);
  if (rendered) {
    return (
      <Wrapper>
        {singleManager && <SingleManagerPage data={singleManager} />}
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
