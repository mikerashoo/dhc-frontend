import React, { FC } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
    stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import { StepIconProps } from "@mui/material";

const steps = [
    "Developer Details",
    "Project Details",
    "Photos",
    "Pricing & Floor Plan",
];

const ColorlibStepIconRoot = styled("div")<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
    borderColor: "black",
    color: "grey",
    zIndex: 1,
    borderWidth: 2,
    fontWeight: "bold",
    fontSize: 16,
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
        backgroundColor: "black",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
        color: "goldenrod",
    }),
    ...(ownerState.completed && {
        backgroundColor: "black",
        color: "goldenrod",
    }),
}));

function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
        1: <>1</>,
        2: <>2</>,
        3: <>3</>,
        4: <>4</>,
    };

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "black",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "black",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
        borderRadius: 1,
    },
}));
type Props = {
    currentStep: number;
};
const Steppers: FC<Props> = ({ currentStep }) => {
    return (
        <Stepper
            activeStep={currentStep - 1}
            alternativeLabel
            connector={<ColorlibConnector />}
        >
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                        {label}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    );
    return (
        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li className="flex md:w-full items-center  after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block  after:mx-6 xl:after:mx-10 dark:after:border-gray-700 after:content-['']">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Personal{" "}
                    <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                </span>
            </li>

            <li className="flex md:w-full items-center  after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block  after:mx-6 xl:after:mx-10 dark:after:border-gray-700 after:content-['']">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Account{" "}
                    <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                </span>
            </li>
        </ol>
    );
};

export default Steppers;
