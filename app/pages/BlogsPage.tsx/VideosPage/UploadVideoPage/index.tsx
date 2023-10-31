import FormControl from "@/app/components/Form/FormControl";
import FormErrorMessage from "@/app/components/Form/FormErrorMessage";
import FormLabel from "@/app/components/Form/FormLabel";
import Input from "@/app/components/Form/Input";
import { IAddVideo } from "@/app/constants/interfaces";
import { UploadSchema } from "@/app/constants/validation";
import { useLoadingContext } from "@/app/context/loading";
import ArrowLeft from "@/app/icons/ArrowLeft";
import { BlogsService } from "@/app/services/BlogsService";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "@/app/utils/helpers";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
const types = ["Housing Loans", "RERA", "Analytics and Insights"];

const UploadVideoPage = () => {
  const [tags, setTags] = React.useState<string[]>([]);
  const { isLoading, setIsLoading } = useLoadingContext();

  const { formState, register, handleSubmit, control, setValue } =
    useForm<IAddVideo>({
      mode: "onBlur",
      resolver: yupResolver(UploadSchema),
    });
  const { errors } = formState;
  const router = useRouter();

  const onSubmit = (data: any) => {
    setIsLoading(true);
    data.tags = tags;
    data.isTranding = true;
    // Проверьте, что хотя бы один тег выбран
    if (data.tags.length === 0) {
      setIsLoading(false);
      displayErrorMessage("Select tags");
      return;
    }
    BlogsService.uploadVideo(data)
      .then((res) => {
        displaySuccessMessage("Video uploaded");
        router.push("/blogs/videos");
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setTags((prevTags) => [...prevTags, type]);
    } else {
      setTags((prevTags) => prevTags.filter((item) => item !== type));
    }
  };
  return (
    <section className="section">
      <div className="section__header">
        <div className="section__header-left">
          <h2>Upload Video</h2>
          <span
            className="section__header-back"
            onClick={() => router.push("/blogs/videos")}
          >
            <ArrowLeft />
          </span>
        </div>
      </div>
      <div className="section__content">
        <div className="blogs__video-upload">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <Input
                placeholder="YouTube video link"
                register={{ ...register("videoUrl") }}
              />
              <FormErrorMessage>
                {errors?.videoUrl?.message && errors?.videoUrl?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <Input placeholder="Title" register={{ ...register("title") }} />
              <FormErrorMessage>
                {errors?.title?.message && errors?.title?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <Input
                placeholder="Name of Author"
                register={{ ...register("author") }}
              />
              <FormErrorMessage>
                {errors?.author?.message && errors?.author?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Add Tag</FormLabel>
              <div className="custom-checkbox-wrapper">
                {types.map((el: any, index: number) => (
                  <label className="custom-checkbox sblog__check">
                    <input
                      name={`tags[${index}]`}
                      value={el}
                      type="checkbox"
                      onChange={(e) => handleCheckboxChange(e, el)}
                      checked={tags.includes(el)}
                    />
                    <span className="checkmark"></span>
                    {el}
                  </label>
                ))}
              </div>
              <FormErrorMessage>
                {tags.length === 0 && "Select at least one tag"}
              </FormErrorMessage>
            </FormControl>
            <button className="btn">Upload</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UploadVideoPage;
