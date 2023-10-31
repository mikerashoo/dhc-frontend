import React from "react";
import { ChangeHandler, Controller } from "react-hook-form";
import Select from "react-select";
import "./styles.module.scss";
type Props = {
  register: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: React.Ref<any>;
    name: string;
  };
  options: any[];
  control: any;
  backgroundColor?: string;
  border?: string;
  placeholder?: string;
  name?: string;
  forNotification?: boolean;
  handleSelect?: Function;
  defaultValue?: number | Array<number>;
  selectedOptions?: any[];
  multiple?: boolean;
  prefix?: string;
  disabled?: boolean;
};

const InputSelect: React.FC<Props> = ({
  register,
  defaultValue,
  name,
  options,
  control,
  placeholder,
  multiple,
  disabled,
  prefix,
}) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      // borderRadius: 53,
      border: "1px solid #A0A0A0",
      boxShadow: "none",
      fontSize: 12,
      maxHeight: 142,
      overflow: "auto",
      "&::-webkit-scrollbar": {
        width: 2,
      },
      "&::-webkit-scrollbar-track": {
        background: " #838383",
      },
      /* Handle */
      "&::-webkit-scrollbar-thumb ": {
        background: "#f69f34",
      },
      "&:hover": {
        border: "1px solid #9FAAB7",
      },
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: "12px 15px",
      fontSize: 12,
    }),
    input: (provided: any) => ({
      ...provided,
      margin: 0,
      padding: 0,
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      backgroundColor: "none",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "#9FAAB7",
      "&:hover": {
        color: "#9FAAB7",
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      zIndex: 15,
      "@media (max-width: 1500px)": {
        // minHeight:"175px",
        // maxHeight:"175px",
        // overflow:"scroll"
      },
    }),
    options: (provided: any) => ({
      ...provided,
      fontSize: 12,
    }),
    multiValue: (provided: any) => ({
      ...provided,
      borderRadius: 53,
      backgroundColor: "#0f85ee",
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: "#fff",
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: "#fff",
      cursor: "pointer",
      borderRadius: "0 53px 53px 0",
      transition: "0.2s all ease",
      "& path": {
        fill: "#fff",
        transition: "0.2s all ease",
      },
      ":hover": {
        backgroundColor: "#eee",

        "& path": {
          fill: "#000",
        },
      },
    }),
  };

  return (
    <>
      <Controller
        name={name || register?.name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { value, onChange, ref, onBlur } }) => {
          return (
            <Select
              classNamePrefix={prefix ?? ""}
              styles={customStyles}
              ref={register.ref}
              theme={(theme) => ({
                ...theme,
                borderRadius: 6,
                colors: {
                  ...theme.colors,
                  primary: "#0f85ee",
                },
              })}
              closeMenuOnScroll={true}
              onBlur={() => onBlur()}
              value={
                multiple
                  ? options.filter((option) => value?.includes(option.value))
                  : options.filter((item) =>
                      defaultValue
                        ? defaultValue === item.value
                        : value === item.value
                    )
              }
              isSearchable
              defaultValue={options.filter(
                (item) => defaultValue === item.value
              )}
              onChange={
                multiple
                  ? (options) =>
                      onChange(options?.map((option: any) => option.value))
                  : (item) => onChange(item?.value)
              }
              getOptionValue={(option) => `${option["value"]}`}
              getOptionLabel={(option) => `${option["label"]}`}
              placeholder={placeholder}
              noOptionsMessage={() => `no_matches_found`}
              options={options}
              isMulti={multiple ? multiple : false}
              isDisabled={disabled}
            />
          );
        }}
      />
    </>
  );
};

export default InputSelect;
