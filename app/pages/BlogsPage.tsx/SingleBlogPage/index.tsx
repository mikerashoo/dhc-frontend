import Preloader from "@/app/components/Preloader/Preloader";
import ArrowLeft from "@/app/icons/ArrowLeft";
import Delete from "@/app/icons/Delete";
import Edit from "@/app/icons/Edit";
import Trash from "@/app/icons/Trash";
import { useRouter } from "next/router";
import React from "react";

const SingleBlogPage = ({ data }: any) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  const [blogData, seBlogtData] = React.useState(data);
  const router = useRouter();
  if (!data) return <Preloader />;
  return (
    <div className="section">
      <div className="section__header sblog__header">
        <div className="section__header-left">
          <h2>Blogs</h2>
          <span
            className="section__header-back"
            onClick={() => router.push("/blogs")}
          >
            <ArrowLeft />
          </span>
        </div>
        {/* <div className="section__header-right">
          <button onClick={() => setEdit(!edit)} className="btn">
            {!edit ? "Edit Blog" : "Save"}
          </button>
        </div> */}
      </div>
      <div className="section__content sblog__section">
        <div className="sblog">
          <div className="sblog__img">
            <img src={data.image} alt="" />
            <div className="sblog__img-content">
              <p>
                {blogData.title}
                {/* Lorem ipsum dolor sit amet consectetur.{" "}
                <span>Porta gravida</span> tincidunt diam felis diam orci. */}
              </p>
              <div className="sblog__img-content-desc">
                {blogData["posted at"]} by <span>{blogData.author}</span>
              </div>
            </div>
          </div>
          <div className="sblog__content">
            {data.paragraph.map((el: any) => (
              <div className="sblog__content-item">
                <div className="sblog__content-wrapper">
                  <div className="sblog__content-item-title">
                    {el.paragraphTitle}
                  </div>
                  <p className="sblog__content-item-p">{el.Paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
