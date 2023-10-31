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
  checked?: boolean;
  disabled?: boolean;
};

const RadioBoxInput: React.FC<Props> = ({
  className,
  type,
  register,
  name,
  onChange,
  ref,
  onBlur,
  label,
  disabled,
  ...props
}) => {
  return (
    <div className={`input-radio-box ${className ?? ""}`}>
      <label htmlFor={name || register?.name}>
        <input
          type={"radio"}
          name={name || register?.name}
          className={``}
          ref={ref || register?.ref}
          onChange={onChange || register?.onChange}
          onBlur={onBlur || register?.onBlur}
          disabled={disabled ?? false}
          {...props}
        />
        <span>
          {/* <Check /> */}
        </span>
      </label>
    </div>
  );
};

export default RadioBoxInput;
