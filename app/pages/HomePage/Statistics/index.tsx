import React from "react";
import Select, { components } from "react-select";
import { Controller, useForm } from "react-hook-form";
import InputSelect from "@/app/components/Form/Select";
import ArrowDown from "@/app/icons/ArrowDown";
import ProgressBar from "./ProgressBar";
type OptionType = {
  label: React.ReactNode;
  value: number;
  flag: string;
  items: Array<{ title: string; number: string }>;
};
const stat = [
  {
    id: 1,
    title: "India",
    flag: "/assets/images/select.png",
    items: [
      { title: "Delhi", number: "7,400" },
      { title: "Mumbai", number: "9,372" },
      { title: "Punjab", number: "6,332" },
      { title: "Pune", number: "7,667" },
      { title: "Thane", number: "10,543" },
      { title: "Chennai", number: "4,400" },
      { title: "Kolkata", number: "5,760" },
    ],
  },
  {
    id: 2,
    title: "Canada",
    flag: "/assets/images/select.png",
    items: [
      { title: "1", number: "7,400" },
      { title: "2", number: "9,372" },
      { title: "3", number: "6,332" },
      { title: "4", number: "7,667" },
      { title: "5", number: "10,543" },
      { title: "Chennai", number: "4,400" },
      { title: "Kolkata", number: "5,760" },
    ],
  },
  {
    id: 3,
    title: "USA",
    flag: "/assets/images/select.png",
    items: [
      { title: "6", number: "7,400" },
      { title: "7", number: "9,372" },
      { title: "8", number: "6,332" },
      { title: "9", number: "7,667" },
      { title: "Thane", number: "10,543" },
      { title: "Chennai", number: "4,400" },
      { title: "Kolkata", number: "5,760" },
    ],
  },
];
const selectOptions: OptionType[] = stat.map((item) => ({
  label: (
    <div className="statistics__select-label">
      <img src={item.flag} alt={item.title} />
      {item.title}
    </div>
  ),
  value: item.id,
  flag: item.flag,
  items: item.items,
}));
const Statistics = () => {
  const [selectedCountry, setSelectedCountry] =
    React.useState<OptionType | null>(selectOptions[0]);
  const { register, control, handleSubmit, reset } = useForm();
  const CustomDropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        {/* Замените на вашу собственную иконку */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.80752 6.75H13.1925C13.3409 6.75062 13.4857 6.79521 13.6087 6.87813C13.7316 6.96106 13.8273 7.07859 13.8835 7.21586C13.9397 7.35313 13.9539 7.50399 13.9244 7.64935C13.8948 7.79471 13.8228 7.92804 13.7175 8.0325L9.53253 12.2175C9.4628 12.2878 9.37985 12.3436 9.28846 12.3817C9.19706 12.4197 9.09903 12.4393 9.00002 12.4393C8.90102 12.4393 8.80299 12.4197 8.71159 12.3817C8.6202 12.3436 8.53725 12.2878 8.46752 12.2175L4.28252 8.0325C4.17721 7.92804 4.10523 7.79471 4.07569 7.64935C4.04615 7.50399 4.06038 7.35313 4.11657 7.21586C4.17277 7.07859 4.26841 6.96106 4.39139 6.87813C4.51438 6.79521 4.6592 6.75062 4.80752 6.75Z"
            fill="white"
          />
        </svg>
      </components.DropdownIndicator>
    );
  };

  const handleCountryChange = (selectedOption: OptionType | null) => {
    setSelectedCountry(selectedOption);
  };
  const maxNumber = selectedCountry
    ? Math.max(
        ...selectedCountry.items.map((item) =>
          parseInt(item.number.replace(/,/g, ""))
        )
      )
    : 0;
  return (
    <div className="home__statistics statistics">
      <h3>Users across the Globe</h3>
      <div className="statistics__select">
        <Controller
          name="select"
          control={control}
          defaultValue={selectedCountry}
          render={({ field }) => (
            <Select
              components={{ DropdownIndicator: CustomDropdownIndicator }}
              {...field}
              classNamePrefix={"static"}
              options={selectOptions}
              placeholder="Select a country..."
              isSearchable
              onChange={(selectedOption) => {
                field.onChange(selectedOption);
                handleCountryChange(selectedOption);
              }}
            />
          )}
        />
      </div>
      <div className="statistics__items">
        {selectedCountry &&
          selectedCountry.items.map((el) => (
            <ProgressBar
              value={el.number}
              maxValue={maxNumber}
              title={el.title}
            />
          ))}
      </div>
    </div>
  );
};

export default Statistics;
