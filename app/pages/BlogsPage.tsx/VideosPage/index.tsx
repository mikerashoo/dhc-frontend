import InputSelect from "@/app/components/Form/Select";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import Select, { components } from "react-select";
import { CustomDropdownIndicator } from "../CustomDropdown";
import { useLoadingContext } from "@/app/context/loading";
import { BlogsService } from "@/app/services/BlogsService";
type Option = {
  label: string;
  value: string;
};
const options = [
  { label: "Blogs", value: "/blogs", isOptionDisabled: false },
  { label: "Videos", value: "/blogs/videos", isOptionDisabled: true }, // Скрыть эту опцию
];
const VideosPage = () => {
  const { register, control, handleSubmit, reset } = useForm();
  const [videos, setVideos] = React.useState<any>([]);
  const [selectedValue, setSelectedValue] = React.useState(options[1]);
  const router = useRouter();
  const { isLoading, setIsLoading } = useLoadingContext();
  const handleSelectChange = (selectedOption: Option | null) => {
    if (selectedOption !== null) {
      router.push(selectedOption.value);
    }
  };
  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      display: state.data.isOptionDisabled ? "none" : "block",
    }),
  };
  React.useEffect(() => {
    setIsLoading(true);
    BlogsService.getBlogs()
      .then((res) => setVideos(res.data.Videos))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  const extractVideoIdFromUrl = (url: string) => {
    const urlObj = new URL(url);
    let videoId = null;

    if (
      urlObj.hostname === "www.youtube.com" ||
      urlObj.hostname === "youtube.com"
    ) {
      videoId = urlObj.searchParams.get("v");
    } else if (urlObj.hostname === "youtu.be") {
      videoId = urlObj.pathname.substr(1);
    }

    return videoId;
  };
  return (
    <section className="section">
      <div className="section__header">
        <div className="section__header-left">
          <div className="section__header-select">
            <div className="section__header-select-title">
              <Select
                components={{ DropdownIndicator: CustomDropdownIndicator }}
                classNamePrefix="blogs"
                options={options}
                value={selectedValue}
                onChange={(value) => handleSelectChange(value)}
                styles={customStyles} // Применяем наши стили
              />
            </div>
          </div>
        </div>
        <div className="section__header-right">
          <button
            onClick={() => router.push("/blogs/videos/upload")}
            className="btn"
          >
            Upload Video
          </button>
        </div>
      </div>
      <div className="section__content">
        <div className="blogs__video blogs__wrapper">
          {videos.map((el: any) => (
            <div className="blogs__video-item blogs__item">
              <div className="blogs__item-img">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${extractVideoIdFromUrl(
                    el.ytlink
                  )}?rel=0&modestbranding=1&autoplay=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  frameBorder={0}
                  aria-label="false"
                ></iframe>
              </div>
              <div className="blogs__item-content">
                <div className="blogs__item-content-wrapper">
                  {el.tags.map((el: string) => (
                    <div className="blogs__item-content-type">{el}</div>
                  ))}
                </div>
                <p>{el.title}</p>
                <div className="blogs__item-content-desc">
                  {el["posted at"]} by <span>{el.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {}
      </div>
    </section>
  );
};

export default VideosPage;
