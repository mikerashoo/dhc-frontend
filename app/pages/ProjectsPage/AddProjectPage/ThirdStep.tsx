import FileInput from "@/app/components/Form/FileInput";
import FormControl from "@/app/components/Form/FormControl";
import Input from "@/app/components/Form/Input";
import InputSelect from "@/app/components/Form/Select";
import TextArea from "@/app/components/Form/TextArea";
import File from "@/app/icons/File";
import React, { FC } from "react";
import { Control, FieldValues, UseFormRegister } from "react-hook-form";
type Props = {
    register: any;
    control: any;
    setStep: Function;
    attachedFiles: any;
    setAttachedFiles: Function;
};
const ThirdStep: FC<Props> = ({
    register,
    control,
    setStep,
    attachedFiles,
    setAttachedFiles,
}) => {
    return (
        <>
            <div className="project__form-title">
                Add photos of your <span>Project</span>
            </div>
            <div className="project__form-subtitle">
                A picture is more a thousand words. 87% of buyers look at photos
                before buying
            </div>
            <div className="project__form-wrapper">
                <h4>Choose a cover photo</h4>
                <FileInput
                    attachedFiles={attachedFiles}
                    setAttachedFiles={setAttachedFiles}
                    multiple
                    accept=".png, .jpg,"
                    icon={<File />}
                    register={{ ...register("images") }}
                />
                <button onClick={() => setStep(4)} className="btn">
                    Continue
                </button>
            </div>
        </>
    );
};

export default ThirdStep;
