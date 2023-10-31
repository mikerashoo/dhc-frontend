import React, { forwardRef, useRef, useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import { ChangeHandler, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import kk from "date-fns/locale/kk";
import Calendar from "../../../icons/Calendar";
import moment from "moment";
type Props = {
  control: any;
  register: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: React.Ref<any>;
    name: string;
  };
  icon?: React.ReactNode;
  range?: boolean;
  rounded?: boolean;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  selected?: any;
  showTimeSelect?: boolean;
};
const DatePickerInput: React.FC<Props> = ({
  control,
  register,
  rounded,
  icon,
  range,
  placeholder,
  minDate,
  maxDate,
  selected,
  disabled,
  showTimeSelect,
}) => {
  registerLocale("ru", ru);
  registerLocale("kk", kk);

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div
      className={`datePicker__wrapper ${
        rounded ? "datePicker__wrapper-rounded" : ""
      }`}
    >
      <Controller
        name={register.name}
        control={control}
        render={({ field: { value, onChange, onBlur, ref } }) => {
          return (
            <>
              <ReactDatePicker
                ref={register.ref}
                dateFormat="dd.MM.yyyy"
                placeholderText={placeholder ?? ``}
                onChange={
                  range
                    ? (update: any) => {
                        setDateRange(update);
                      }
                    : (date: any) => onChange(date)
                }
                selected={value}
                wrapperClassName="datePicker"
                locale={"en"}
                selectsRange={range}
                startDate={startDate}
                endDate={endDate}
                minDate={minDate || undefined}
                maxDate={maxDate || undefined}
                disabled={disabled}
                showTimeSelect={showTimeSelect ? true : false}
                showYearDropdown
                yearDropdownItemNumber={15}
                scrollableYearDropdown
              />
            </>
          );
        }}
      />
      <div className="datePicker--svg">{icon ?? <Calendar />}</div>
    </div>
  );
};

export default DatePickerInput;
