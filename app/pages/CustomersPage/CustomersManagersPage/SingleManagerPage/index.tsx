import FormControl from "@/app/components/Form/FormControl";
import FormLabel from "@/app/components/Form/FormLabel";
import Input from "@/app/components/Form/Input";
import Preloader from "@/app/components/Preloader/Preloader";
import React from "react";

const SingleManagerPage = ({ data }: any) => {
  if (!data) return <Preloader />;
  return (
    <section className="section">
      <div className="section__header">
        <h2>Manager Profile</h2>
      </div>
      <div className="section__content">
        <div className="manager">
          <form>
            <FormControl>
              <Input disabled value={data.name} />
            </FormControl>
            <FormControl>
              <Input disabled value={data.phone} />
            </FormControl>
            <FormControl>
              <Input disabled value={data.email} />
            </FormControl>
            <FormControl>
              <Input disabled value={data.position} />
            </FormControl>
            {/* <FormLabel>Projects Handled</FormLabel> */}
            {/* <div className="manager__projects">
              <div className="manager__projects-item">
                <img src="/assets/images/m1.png" alt="" />
              </div>
              <div className="manager__projects-item">
                <img src="/assets/images/m2.png" alt="" />
              </div>
              <div className="manager__projects-item">
                <img src="/assets/images/m3.png" alt="" />
              </div>
              <div className="manager__projects-item">
                <img src="/assets/images/m4.png" alt="" />
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SingleManagerPage;
