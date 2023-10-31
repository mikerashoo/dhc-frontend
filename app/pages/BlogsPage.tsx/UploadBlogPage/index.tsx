import DatePickerInput from "@/app/components/Form/DatePicker";
import FileInput from "@/app/components/Form/FileInput";
import FormControl from "@/app/components/Form/FormControl";
import FormErrorMessage from "@/app/components/Form/FormErrorMessage";
import FormLabel from "@/app/components/Form/FormLabel";
import Input from "@/app/components/Form/Input";
import TextArea from "@/app/components/Form/TextArea";
import { IAddBlog } from "@/app/constants/interfaces";
import { AddBlogSchema } from "@/app/constants/validation";
import File from "@/app/icons/File";
import Image from "@/app/icons/Image";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import {
  displayErrorMessage,
  displaySuccessMessage,
  uploadImages,
} from "@/app/utils/helpers";
import { useLoadingContext } from "@/app/context/loading";
import { BlogsService } from "@/app/services/BlogsService";
import { useRouter } from "next/router";
import Preloader from "@/app/components/Preloader/Preloader";

const types = ["Housing Loans", "RERA", "Analytics and Insights"];
const UploadBlogPage = () => {
  const [tags, setTags] = React.useState<string[]>([]);
  const [attachedFiles, setAttachedFiles] = React.useState<any>([]);
  const [paragraphs, setParagraphs] = React.useState([
    { paragraphTitle: "", Paragraph: "" },
  ]);
  const { isLoading, setIsLoading } = useLoadingContext();

  const { formState, register, handleSubmit, control, setValue, watch } =
    useForm<IAddBlog>({
      mode: "all",
      resolver: yupResolver(AddBlogSchema),
    });
  const { errors } = formState;
  const router = useRouter();
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setTags([...tags, type]);
    } else {
      setTags(tags.filter((item) => item !== type));
    }
  };
  useEffect(() => {
    setIsLoading(false);
  }, []);
  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const imageUrl = await uploadImages(attachedFiles);
    data.imageUrl = imageUrl[0];
    data.isTrending = true;
    data.tags = tags;
    if (data.tags.length === 0) {
      setIsLoading(false);
      displayErrorMessage("Select tags");
      return;
    }
    data = { ...data, date: moment(data.date).format("DD-MM-YYYY") };
    console.log(data);
    setIsLoading(false);
    BlogsService.addBlog(data)
      .then((res) => {
        displaySuccessMessage(res.data.message);
        router.push("/blogs");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleAddParagraph = () => {
    const newParagraph = {
      paragraphTitle: "",
      Paragraph: "",
    };
    setParagraphs([...paragraphs, newParagraph]);
  };
  //   if (isLoading) return <Preloader />;
  return (
    <section className="section">
      <div className="section__header">
        <h2>Upload Blog</h2>
      </div>
      <div className="section__content sblog__section">
        <div className="sblog">
          <div className="sblog__img">
            <FileInput
              attachedFiles={attachedFiles}
              setAttachedFiles={setAttachedFiles}
              big={true}
              multiple={false}
              accept=".png, .jpg,"
              className="sblog__upload"
              icon={<Image />}
              name="image"
            />
          </div>
          <form className="sblog__form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <Input
                className="sblog__input"
                placeholder="Blog Title"
                register={{ ...register("title") }}
              />
              <FormErrorMessage>
                {errors?.title?.message && errors?.title?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <DatePickerInput
                control={control}
                placeholder="Date"
                register={{ ...register("date") }}
              />
              <FormErrorMessage>
                {errors?.date?.message && errors?.date?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <Input
                className="sblog__input"
                placeholder="Name of Author"
                register={{ ...register("author") }}
              />
              <FormErrorMessage>
                {errors?.author?.message && errors?.author?.message}
              </FormErrorMessage>
            </FormControl>
            <div className="sblog__add">
              {paragraphs.map((paragraph, index) => (
                <div key={index} className="sblog__add-wrapper">
                  <FormControl>
                    <Input
                      className="sblog__input"
                      placeholder={`Paragraph Title ${index + 1}`}
                      register={{
                        ...register(`paragraph.${index}.paragraphTitle`),
                      }}
                    />
                    <FormErrorMessage>
                      {errors.paragraph &&
                        errors.paragraph[index] &&
                        errors.paragraph[index]?.paragraphTitle &&
                        errors.paragraph[index]?.paragraphTitle?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl className="sblog__add-no">
                    <TextArea
                      className="sblog__area"
                      placeholder={`Paragraph ${index + 1}`}
                      register={{
                        ...register(`paragraph.${index}.Paragraph`),
                      }}
                    />
                    <FormErrorMessage>
                      {errors.paragraph &&
                        errors.paragraph[index] &&
                        errors.paragraph[index]?.Paragraph &&
                        errors.paragraph[index]?.Paragraph?.message}
                    </FormErrorMessage>
                  </FormControl>
                </div>
              ))}
              <div onClick={handleAddParagraph} className="sblog__add-btn">
                +Add
              </div>
            </div>
            <FormControl>
              <FormLabel>Add Tag</FormLabel>
              <div className="custom-checkbox-wrapper">
                {types.map((el: any) => (
                  <label className="custom-checkbox sblog__check">
                    <input
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
                {tags.length === 0 && "Select at least one"}
              </FormErrorMessage>
            </FormControl>
            <button type="submit" className="btn sblog__btn">
              Upload
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UploadBlogPage;
