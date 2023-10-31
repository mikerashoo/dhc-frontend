import React from "react";
import { ChangeHandler } from "react-hook-form";

import { Controller } from "react-hook-form";
import { FormControlLabel, Checkbox } from "@mui/material";

type Props = {
  register: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: React.Ref<any>;
    name: string;
  };

  control: any;
  name?: string;
  label?: React.ReactNode;
  value?: string;
};

const CheckboxInput: React.FC<Props> = ({
  register,
  name,
  control,
  label,
  value,
}) => {
  return (
    <>
      <FormControlLabel
        control={
          <Controller
            name={name || register.name}
            control={control}
            render={({ field: props }) => (
              <Checkbox
                {...props}
                ref={register.ref}
                checked={props.value}
                value={value}
                onChange={(e) => props.onChange(e.target.checked)}
              />
            )}
          />
        }
        label={label}
      />
    </>
  );
};

export default CheckboxInput;
