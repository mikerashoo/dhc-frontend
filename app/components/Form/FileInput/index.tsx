import React, { SyntheticEvent, useState } from "react";
import { ChangeHandler } from "react-hook-form";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Delete from "@/app/icons/Delete";
import Plus from "@/app/icons/Plus";
type Props = {
  className?: string;
  setAttachedFiles: Function;
  attachedFiles: any;
  register?: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: React.Ref<any>;
    name: string;
  };
  placeholder?: string | React.ReactNode;
  name?: string;
  accept?: string;
  multiple?: boolean;
  big?: boolean;
  icon?: React.ReactElement;
  showIcon?: boolean;
  hideAttachedFileNames?: boolean;
  afterImageUpload?: (files: File[]) => void;
  handleChange?: (files: File[]) => void;
  disabled?: boolean;
};

const FileInput: React.FC<Props> = ({
  className,
  register,
  placeholder,
  name,
  attachedFiles,
  setAttachedFiles,
  accept,
  multiple,
  icon,
  big,
  showIcon,
  hideAttachedFileNames,
  afterImageUpload,
  handleChange,
  disabled,
}) => {
  //   const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImages = Array.from(e.target.files || []);
    setAttachedFiles([...attachedFiles, ...selectedImages]);

    const selectedPreviewImages = selectedImages.map((image) =>
      URL.createObjectURL(image)
    );
    setPreviewImages([...previewImages, ...selectedPreviewImages]);
  };
  const handleDeleteImage = (index: number) => {
    // Remove the image at the specified index from both arrays
    const newAttachedFiles = [...attachedFiles];
    newAttachedFiles.splice(index, 1);

    const newPreviewImages = [...previewImages];
    newPreviewImages.splice(index, 1);

    setAttachedFiles(newAttachedFiles);
    setPreviewImages(newPreviewImages);
  };
  return (
    <>
      <input
        ref={register?.ref}
        onChange={handleImageUpload}
        onBlur={register?.onBlur}
        className={classNames(styles.input)}
        name={register?.name || name}
        id={register?.name || name}
        type="file"
        accept={accept || "application/pdf, .png, .jpg, .docx, .xlsx"}
        multiple={multiple}
        disabled={disabled}
      />
      {previewImages.length === 0 && (
        <label
          className={classNames(
            styles.label,
            styles.fileInputLabel,
            className,
            attachedFiles[0]?.name ? styles.grey : ""
          )}
          htmlFor={register?.name || name}
        >
          {" "}
          {icon ?? ""}
          {/* {placeholder} */}
          Upload images up to resolution <br /> 1500px by 1000px
        </label>
      )}
      {previewImages.length > 0 && (
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Navigation]}
            navigation={{
              prevEl: ".arrow--prev",
              nextEl: ".arrow--next",
            }}
            className={`${styles.swiper} ${className}`}
          >
            {previewImages.reverse().map((image, index) => (
              <SwiperSlide
                className={`${styles.slide} ${big ? styles.bigSlide : ""}`}
                key={index}
              >
                <div
                  className={`${styles.slideImage} ${
                    big ? styles.bigSlideImage : ""
                  }`}
                >
                  <img src={image} />
                  <div className={styles.btns}>
                    {multiple !== (undefined || false) && (
                      <>
                        <input
                          id="file-input" // Add an ID for the file input
                          ref={register?.ref}
                          onChange={handleImageUpload}
                          onBlur={register?.onBlur}
                          className={classNames(styles.input)}
                          name={register?.name || name}
                          type="file"
                          accept={
                            accept ||
                            "application/pdf, .png, .jpg, .docx, .xlsx"
                          }
                          multiple={multiple}
                          disabled={disabled}
                          style={{ display: "none" }} // Hide the input
                        />
                        <label
                          className={classNames(
                            styles.add,
                            className,
                            attachedFiles[0]?.name ? styles.grey : ""
                          )}
                          htmlFor={register?.name || name}
                        >
                          <Plus /> Add images
                        </label>
                      </>
                    )}
                    <span
                      className={styles.delete}
                      onClick={() => handleDeleteImage(index)}
                    >
                      <Delete /> Delete images
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={`slider__arrows--block ${styles.arrows}`}>
            <div
              className={`slider__arrow arrow--prev ${styles.prev}`}
              slot="prev"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 6L9 12L15 18"
                  stroke="#F19728"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className={`slider__arrow arrow--next ${styles.next}`}
              slot="next"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#F19728"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </>
      )}
      {/* {!hideAttachedFileNames &&
        attachedFiles.map((file, index) => (
          <small key={index}>{file.name}</small>
        ))} */}
    </>
  );
};

export default FileInput;
