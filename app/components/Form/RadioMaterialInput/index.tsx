import React from "react";
import { ChangeHandler } from "react-hook-form";

import { Controller } from "react-hook-form";
import { FormControlLabel, Checkbox, Radio } from "@mui/material";

type Props = {
  register: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: React.Ref<any>;
    name: string;
  };

  control?: any;
  name?: string;
  label?: React.ReactNode;
};

const RadioMaterialInput: React.FC<Props> = ({
  register,
  name,
  control,
  label,
}) => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  return (
    <>
      <FormControlLabel
        control={
          <Controller
            name={name || register.name}
            control={control}
            render={({ field: props }) => (
              <Radio
                {...props}
                ref={register.ref}
                checked={props.value}
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

export default RadioMaterialInput;
