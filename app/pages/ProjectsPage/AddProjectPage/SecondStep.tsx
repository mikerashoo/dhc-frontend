import FormControl from "@/app/components/Form/FormControl";
import FormErrorMessage from "@/app/components/Form/FormErrorMessage";
import FormLabel from "@/app/components/Form/FormLabel";
import Input from "@/app/components/Form/Input";
import InputSelect from "@/app/components/Form/Select";
import { HandbookService } from "@/app/services/HandbookService";
import {
    Checkbox,
    FormControlLabel,
    Radio,
    RadioGroup,
    Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles"; // Import makeStyles from @mui/styles
import Select from "react-select";

import React, { FC } from "react";
import { Controller } from "react-hook-form";
type Props = {
    register: any;
    control: any;
    setStep: Function;
    setAprtType: Function;
    setAmenties: Function;
    amenties: any;
    errors: any;
    aprt: string[];
    states: any;
    setValue: Function;
};
const types = [
    "1 BHK",
    "1.5 BHK",
    "2 BHK",
    "2.5 BHK",
    "3 BHK",
    "3.5 BHK",
    "4 BHK",
    "4.5 BHK",
    "5 BHK",
    "6 BHK",
    "Duplex",
];
const amentiesOptions = [
    "24×7 Power Backup",
    "Club House",
    "Gymnasium",
    "Swimming Pool",
    "Lifts",
    "Kids Pool",
    "Security",
    "Children's Park",
    "Indoor Games",
    "Oxygen Zone",
    "Badminton Court",
    "Multipurpose Hall",
    "Library",
    "Jogging Track",
    "Reserved Parking",
];
const category = [
    { value: "Affordable", label: "Affordable" },
    { value: "Premium", label: "Premium" },
    { value: "Luxury", label: "Luxury" },
    { value: "Ultra Luxury", label: "Ultra Luxury" },
];
const SecondStep: FC<Props> = ({
    register,
    amenties,
    control,
    setAmenties,
    setStep,
    setValue,
    setAprtType,
    aprt,
    states,
    errors,
}) => {
    const [cities, setCities] = React.useState([]);
    const onStateClick = (option: any | null) => {
        setValue("state", option.value);
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
    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        type: string
    ) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            setAprtType([...aprt, type]);
        } else {
            setAprtType(aprt.filter((item) => item !== type));
        }
    };
    const handleAmenties = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setAmenties([...amenties, index]);
        } else {
            setAmenties(
                amenties.filter((item: any, index: number) => index !== index)
            );
        }
    };
    return (
        <>
            <div className="project__form-title">
                Where is your project <span>located?</span>
            </div>
            <div className="project__form-subtitle">
                Add accurate location to help connect the right buyers
            </div>
            <div className="project__form-wrapper">
                <FormControl>
                    <Input
                        placeholder="Project Name"
                        register={{ ...register("projectName") }}
                    />
                    <FormErrorMessage>
                        {errors?.projectName?.message &&
                            errors?.projectName?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <Controller
                        control={control}
                        name="state"
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={states}
                                placeholder="States"
                                onChange={(option) => {
                                    field.onChange(option.value);
                                    onStateClick(option);
                                }}
                                value={states.find(
                                    (option: any) =>
                                        option.value === field.value
                                )}
                            />
                        )}
                    />
                    <FormErrorMessage>
                        {errors?.state?.message && errors?.state?.message}
                    </FormErrorMessage>
                </FormControl>
                {cities && (
                    <FormControl>
                        <Controller
                            control={control}
                            name="city"
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={cities}
                                    placeholder="City"
                                    onChange={(selectedOption: any) => {
                                        field.onChange(selectedOption.value);
                                    }}
                                    value={cities.find(
                                        (option: any) =>
                                            option.value === field.value
                                    )} // Установите значение с помощью find
                                />
                            )}
                        />
                        <FormErrorMessage>
                            {errors?.city?.message && errors?.city?.message}
                        </FormErrorMessage>
                    </FormControl>
                )}
                <FormControl>
                    <Input
                        placeholder="Locality"
                        register={{ ...register("locality") }}
                    />
                    <FormErrorMessage>
                        {errors?.locality?.message && errors?.locality?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormLabel>Apartment Type</FormLabel>
                <FormControl>
                    <div className="custom-checkbox-wrapper">
                        {types.map((el: any) => (
                            <label className="custom-checkbox">
                                <input
                                    type="checkbox"
                                    onChange={(e) =>
                                        handleCheckboxChange(e, el)
                                    }
                                    checked={aprt.includes(el)}
                                />
                                <span className="checkmark"></span>
                                {el}
                            </label>
                        ))}
                    </div>
                    <FormErrorMessage>
                        {aprt.length === 0 && "Select at least one"}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <Controller
                        control={control}
                        name="category"
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={category}
                                placeholder="Category"
                                onChange={(option: any) => {
                                    field.onChange(option.value);
                                }}
                                value={category.find(
                                    (option: any) =>
                                        option.value === field.value
                                )}
                            />
                        )}
                    />
                    <FormErrorMessage>
                        {errors?.category?.message && errors?.category?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <FormLabel>Construction Stage</FormLabel>
                    <Controller
                        control={control}
                        name="ConstructionStage"
                        render={({ field }) => (
                            <RadioGroup
                                {...field}
                                sx={{ display: "flex", flexDirection: "row" }}
                            >
                                <FormControlLabel
                                    value="Ready to move"
                                    control={
                                        <Radio
                                            sx={{
                                                "&.Mui-checked": {
                                                    color: "var(--dark, #C4885A)",
                                                },
                                                "& .MuiSvgIcon-root": {
                                                    fontSize: 15,
                                                },
                                            }}
                                        />
                                    }
                                    label="Ready to move"
                                />
                                <FormControlLabel
                                    value="Under Construction"
                                    control={
                                        <Radio
                                            sx={{
                                                "&.Mui-checked": {
                                                    color: "var(--dark, #C4885A)",
                                                },
                                                "& .MuiSvgIcon-root": {
                                                    fontSize: 15,
                                                },
                                            }}
                                        />
                                    }
                                    label="Under Construction"
                                />
                            </RadioGroup>
                        )}
                    />
                    <FormErrorMessage>
                        {errors?.ConstructionStage?.message &&
                            errors?.ConstructionStage?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <Input
                        placeholder="Carpet Area Range (in sq.ft.)"
                        register={{ ...register("CarpetAreaRange") }}
                    />
                    <FormErrorMessage>
                        {errors?.CarpetAreaRange?.message &&
                            errors?.CarpetAreaRange?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <Input
                        placeholder="Total Towers"
                        register={{ ...register("total_tower") }}
                    />
                    <FormErrorMessage>
                        {errors?.total_tower?.message &&
                            errors?.total_tower?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <Input
                        placeholder="Towers"
                        register={{ ...register("towers") }}
                    />
                    <FormErrorMessage>
                        {errors?.towers?.message && errors?.towers?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <Input
                        placeholder="Total Units"
                        register={{ ...register("units") }}
                    />
                    <FormErrorMessage>
                        {errors?.units?.message && errors?.units?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <Input
                        placeholder="Project Area (in acres)"
                        register={{ ...register("ProjectArea") }}
                    />
                    <FormErrorMessage>
                        {errors?.ProjectArea?.message &&
                            errors?.ProjectArea?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <Input
                        placeholder="RERA ID"
                        register={{ ...register("RERAID") }}
                    />
                    <FormErrorMessage>
                        {errors?.RERAID?.message && errors?.RERAID?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <Input
                        placeholder="Type"
                        register={{ ...register("type") }}
                    />
                    <FormErrorMessage>
                        {errors?.type?.message && errors?.type?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <Input
                        placeholder="Location Link (Maps)"
                        register={{ ...register("LocationLink") }}
                    />
                    <FormErrorMessage>
                        {errors?.LocationLink?.message &&
                            errors?.LocationLink?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormLabel>Amenities</FormLabel>
                <FormControl>
                    <div className="custom-checkbox-wrapper">
                        {amentiesOptions.map((el: any, index: number) => (
                            <label className="custom-checkbox longer">
                                <input
                                    type="checkbox"
                                    onChange={(e) => handleAmenties(e, index)}
                                    checked={amenties.includes(index)}
                                />
                                <span className="checkmark"></span>
                                {el}
                            </label>
                        ))}
                    </div>
                    <FormErrorMessage>
                        {amenties.length === 0 && "Select at least one"}
                    </FormErrorMessage>
                </FormControl>
                <button
                    onClick={() => setStep(3)}
                    className="btn bg-rgb(219, 177, 127)"
                >
                    Continue
                </button>
            </div>
        </>
    );
};

export default SecondStep;
