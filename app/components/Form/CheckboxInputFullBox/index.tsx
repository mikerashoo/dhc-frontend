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
  value: string;
};

const CheckboxInputFullBox: React.FC<Props> = ({
  register,
  name,
  label,
  value,
}) => {
  return (
    <>
      <label className={style.fullBoxCheckbox}>
        <input
          name={name || register?.name}
          value={value}
          type="checkbox"
          onChange={register?.onChange}
          ref={register?.ref}
        />
        <span>{label}</span>
      </label>
    </>
  );
};

export default CheckboxInputFullBox;
