import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import { ChangeHandler } from "react-hook-form";
import classNames from "classnames";
import styles from "./styles.module.scss";
import InputMask from "react-input-mask";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  type?: string;
  name?: string;
  defaultPhone?: string;
  register?: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: React.Ref<any>;
    name: string;
  };
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  ref?: string;
  label?: string;
};

const RadioInput: React.FC<Props> = ({
  className,
  type,
  register,
  name,
  onChange,
  ref,
  onBlur,
  label,
  ...props
}) => {
  return (
    <div className={"input-radio"}>
      <input
        type={"radio"}
        name={name || register?.name}
        className={``}
        ref={ref || register?.ref}
        onChange={onChange || register?.onChange}
        onBlur={onBlur || register?.onBlur}
        {...props}
      />
      <label htmlFor={name || register?.name}>
        {/* <i><RadioCheck /></i> */}
        {label}</label>
    </div>
  );
};

export default RadioInput;
