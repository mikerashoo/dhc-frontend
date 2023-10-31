import React from "react";
import HomeHeader from "./HomeHeader";
import Cards from "./Cards";
import LeadTable from "./LeadTable";
import Statistics from "./Statistics";
import Lists from "./Lists";
import { useLoadingContext } from "@/app/context/loading";
import { HomeService } from "@/app/services/HomeService";
import Preloader from "@/app/components/Preloader/Preloader";

const HomePage = () => {
  const { isLoading, setIsLoading } = useLoadingContext();
  const [data, setData] = React.useState<any>();
  React.useEffect(() => {
    setIsLoading(true);
    HomeService.getHome()
      .then((res) => setData(res.data.Details))
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }, []);
  if (!data) return <Preloader />;
  return (
    <div className="home">
      <HomeHeader />
      <div className="home__wrapper">
        <div className="home__left">
          <Cards
            Users={data.Users}
            Managers={data.Managers}
            Leads={data.Leads}
          />
          <LeadTable table={data["Today Leads"]} />
        </div>
        <div className="home__right">
          {/* <Statistics /> */}
          <Lists blogs={data.LiveBlogs} projects={data.Projects} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
