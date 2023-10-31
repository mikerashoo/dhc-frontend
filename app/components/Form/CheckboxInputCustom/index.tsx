import React from "react";
import { ChangeHandler } from "react-hook-form";
import style from "./style.module.scss";
import { Controller } from "react-hook-form";
import { FormControlLabel, Checkbox } from "@mui/material";

type Props = {
  register: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: React.Ref<any>;
    name: string;
  };
  name?: string;
  label?: React.ReactNode;
  value: string | number;
  classname?: string;
  disabled?: boolean;
};

const CheckboxInputCustom: React.FC<Props> = ({
  register,
  name,
  classname,
  disabled,
  label,
  value,
}) => {
  return (
    <div className={`input-radio-box ${classname ?? ""}`}>
      <label htmlFor={name || register?.name}>
        <input
          type={"checkbox"}
          name={name || register?.name}
          disabled={disabled ?? false}
          ref={register?.ref}
          onChange={register?.onChange}
          onBlur={register?.onBlur}
        />
        <span>
        </span>
      </label>
    </div>
  );
};

export default CheckboxInputCustom;
