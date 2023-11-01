import React from "react";
import Progress from "./Progress";
import FirstStep from "./FirstStep";
import { useForm } from "react-hook-form";
import ArrowLeft from "@/app/icons/ArrowLeft";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import LastStep from "./LastStep";
import { IAddProject } from "@/app/constants/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddProjectSchema } from "@/app/constants/validation";
import { HandbookService } from "@/app/services/HandbookService";
import { useLoadingContext } from "@/app/context/loading";
import {
    displayErrorMessage,
    displaySuccessMessage,
    uploadImages,
} from "@/app/utils/helpers";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../firebase";
import { ProjectsService } from "@/app/services/Projects.service";
import { useRouter } from "next/router";
import Steppers from "./Steppers";

const AddProjectPage = () => {
    const [step, setStep] = React.useState<number>(1);
    const [states, setStates] = React.useState([]);
    const [aprtType, setAprtType] = React.useState<string[]>([]);
    const [amenties, setAmenties] = React.useState<string[]>([]);
    const [attachedFiles, setAttachedFiles] = React.useState<File[]>([]);
    const [floorPlans, setFloorPlans] = React.useState([]);
    const router = useRouter();
    const { isLoading, setIsLoading } = useLoadingContext();
    const userString = localStorage.getItem("user");
    const userObject = JSON.parse(userString ?? "");
    console.log(userObject.id);
    const { formState, register, handleSubmit, control, setValue, watch } =
        useForm<IAddProject>({
            mode: "all",
            resolver: yupResolver(AddProjectSchema),
        });
    const { errors } = formState;
    console.log(floorPlans.map((plan: any) => plan.image));

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        const imageUrls = await uploadImages(attachedFiles);
        data.images = imageUrls;
        try {
            const downloadURLs = await uploadImages(
                floorPlans.map((plan: any) => plan.image)
            );
            const updatedFloorPlans = floorPlans.map((plan: any, index) => {
                if (plan.image) {
                    plan.image = downloadURLs[index];
                }
                return plan;
            });
            data.FloorPlans = updatedFloorPlans;
        } catch (error) {
            console.error("Error uploading images:", error);
        }
        data.country = "India";
        data.devID = "-NZ_NUEsi90fj_4FoK_O";
        data.isTranding = true;
        data.isFeatured = true;
        data.ApartmentType = aprtType;
        if (data.ApartmentType.length === 0) {
            setIsLoading(false);
            displayErrorMessage("Select apartment type");
            return;
        }
        data.amenities = amenties;
        if (data.amenities.length === 0) {
            setIsLoading(false);
            displayErrorMessage("Select amenities");
            return;
        }
        ProjectsService.createProject(data)
            .then((res) => {
                displaySuccessMessage(res.data.message);
                router.push("/projects");
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    };
    React.useEffect(() => {
        HandbookService.getStates(101)
            .then((res) =>
                setStates(
                    res.data.result.map((item: any) => ({
                        value: item.name,
                        id: item.id,
                        label: item.name,
                    }))
                )
            )
            .catch((err) => console.log(err))
            .finally(() => {});
    }, []);
    return (
        <section className="section">
            <div className="section__header">
                <h2>List Projects</h2>
            </div>
            <div className="section__content project__section">
                <div className="project__top flex md:flex-row flex-col-reverse">
                    {step > 1 && (
                        <div
                            onClick={() => {
                                if (step <= 1) setStep(1);
                                setStep(step - 1);
                            }}
                            className="flex"
                        >
                            <ArrowLeft />
                            Go Back
                        </div>
                    )}
                    {/* <Progress currentStep={step} /> */}
                    <Steppers currentStep={step} />
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="project__form"
                >
                    <div
                        className={`project__form-step ${
                            step === 1 ? "project__form-step-active" : ""
                        }`}
                    >
                        <FirstStep
                            setStep={setStep}
                            register={register}
                            states={states}
                            errors={errors}
                            control={control}
                        />
                    </div>
                    <div
                        className={`project__form-step ${
                            step === 2 ? "project__form-step-active" : ""
                        }`}
                    >
                        <SecondStep
                            errors={errors}
                            setValue={setValue}
                            aprt={aprtType}
                            setAprtType={setAprtType}
                            setStep={setStep}
                            register={register}
                            control={control}
                            states={states}
                            amenties={amenties}
                            setAmenties={setAmenties}
                        />
                    </div>
                    <div
                        className={`project__form-step ${
                            step === 3 ? "project__form-step-active" : ""
                        }`}
                    >
                        <ThirdStep
                            setStep={setStep}
                            register={register}
                            control={control}
                            attachedFiles={attachedFiles}
                            setAttachedFiles={setAttachedFiles}
                        />
                    </div>
                    <div
                        className={`project__form-step ${
                            step === 4 ? "project__form-step-active" : ""
                        }`}
                    >
                        <LastStep
                            errors={errors}
                            aprtType={aprtType}
                            setStep={setStep}
                            register={register}
                            floorPlans={floorPlans}
                            setFloorPlans={setFloorPlans}
                            control={control}
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddProjectPage;
