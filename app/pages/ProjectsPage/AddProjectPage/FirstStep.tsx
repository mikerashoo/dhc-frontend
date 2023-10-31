import FormControl from "@/app/components/Form/FormControl";
import FormErrorMessage from "@/app/components/Form/FormErrorMessage";
import Input from "@/app/components/Form/Input";
import InputSelect from "@/app/components/Form/Select";
import TextArea from "@/app/components/Form/TextArea";
import { AddProjectSchema } from "@/app/constants/validation";
import { HandbookService } from "@/app/services/HandbookService";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { FC } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
type Props = {
  register: any;
  control: any;
  setStep: Function;
  errors: any;
  states: any;
};
const FirstStep: FC<Props> = ({
  register,
  control,
  setStep,
  errors,
  states,
}) => {
  const [cities, setCities] = React.useState([]);
  const onStateClick = (option: any | null) => {
    setCities([]);
    HandbookService.getCities(101, option.id).then((res) =>
      setCities(
        res.data.result.map((item: any) => ({
          value: item.name,
          label: item.name,
        }))
      )
    );
  };
  return (
    <>
      <div className="project__form-title">
        Lorem ipsum <span>dolor sit</span>
      </div>

      <div className="project__form-wrapper">
        <FormControl>
          <Input placeholder="Name" register={{ ...register("devName") }} />
          <FormErrorMessage>
            {errors?.devName?.message && errors?.devName?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <TextArea
            placeholder="Description"
            register={{ ...register("description") }}
          />
          <FormErrorMessage>
            {errors?.description?.message && errors?.description?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          {/* <InputSelect
            options={states}
            placeholder="States"
            control={control}
            register={{
              ...register("stateSelect", {
                onChange: (option: any) => console.log(option),
              }),
            }}
          /> */}
          <Select
            placeholder="States"
            options={states}
            onChange={(option) => onStateClick(option)}
          />
        </FormControl>
        {cities && (
          <FormControl>
            <Controller
              control={control}
              name="OperatingCities"
              render={({ field }) => (
                <Select
                  {...field}
                  options={cities}
                  onChange={(selectedOptions) => {
                    const selectedCities = selectedOptions.map(
                      (option: any) => option.value
                    );
                    field.onChange(selectedCities);
                  }}
                  value={cities.filter(
                    (option: any) =>
                      field.value && field.value.includes(option.value)
                  )}
                  isMulti
                  placeholder="Operating in Cities"
                />
              )}
            />
            <FormErrorMessage>
              {errors?.OperatingCities?.message &&
                errors?.OperatingCities?.message}
            </FormErrorMessage>
          </FormControl>
        )}
        <FormControl>
          <Input
            placeholder="Years of Experience"
            register={{ ...register("YearofExperience") }}
          />
          <FormErrorMessage>
            {errors?.YearofExperience?.message &&
              errors?.YearofExperience?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <Input
            placeholder="About Dev"
            register={{ ...register("aboutdev") }}
          />
          <FormErrorMessage>
            {errors?.aboutdev?.message && errors?.aboutdev?.message}
          </FormErrorMessage>
        </FormControl>
        <button onClick={() => setStep(2)} className="btn">
          Continue
        </button>
      </div>
    </>
  );
};

export default FirstStep;
