import React, { FC } from "react";
import Location from "@/app/icons/Location";
import Succes from "@/app/icons/Succes";
import Denied from "@/app/icons/Denied";
import { useRouter } from "next/router";
import WpIcon from "@/app/icons/WpIcon";
import Light from "@/app/icons/Light";
import House from "@/app/icons/House";
import Gym from "@/app/icons/Gym";
import SwimmingPool from "@/app/icons/SwimmingPool";
import KidsPool from "@/app/icons/KidsPool";
import Lift from "@/app/icons/Lift";
import Security from "@/app/icons/Security";
import Park from "@/app/icons/Park";
import Indoor from "@/app/icons/Indoor";
import Oxy from "@/app/icons/Oxy";
import Badminton from "@/app/icons/Badminton";
import Hall from "@/app/icons/Hall";
import Library from "@/app/icons/Library";
import Jogging from "@/app/icons/Jogging";
import Reserved from "@/app/icons/Reserved";
import { useLoadingContext } from "@/app/context/loading";
import { ProjectsService } from "@/app/services/Projects.service";
type Props = {
    el: any;
    type: string;
    //   changeStatus: Function;
};
const amentiesOptions = [
    { icon: <Light />, title: "24×7 PowerBackup" },
    { icon: <House />, title: "Club House" },
    { icon: <Gym />, title: "Gymnasium" },
    { icon: <SwimmingPool />, title: "Swimming Pool" },
    { icon: <Lift />, title: "Lifts" },
    { icon: <KidsPool />, title: "Kids Pool" },
    { icon: <Security />, title: "Security" },
    { icon: <Park />, title: "Children’s Park" },
    { icon: <Indoor />, title: "Indoor Games" },
    { icon: <Oxy />, title: "Oxygen Zone" },
    { icon: <Badminton />, title: "Badminton Court" },
    { icon: <Hall />, title: "Multipurpose Hall" },
    { icon: <Library />, title: "Library" },
    { icon: <Jogging />, title: "Jogging Track" },
    { icon: <Reserved />, title: "Reserved Parking" },
];
const ProjectItem: FC<Props> = ({ el, type }) => {
    const router = useRouter();
    const { isLoading, setIsLoading } = useLoadingContext();

    const changeStatus = (status: string, id: string, e: any) => {
        e.preventDefault();
        setIsLoading(true);
        ProjectsService.changeStatus({ projectID: id, status: status })
            .then((ress) => router.reload())
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    };
    return (
        <div className="project__item flex flex-wrap md:flex-nowrap gap-2">
            <div className="project__item-card flex flex-wrap md:flex-nowrap items-center">
                <div
                    className={`w-full project__item-card-img ${
                        type === "our" ? "project__item-card-img-big" : ""
                    }`}
                >
                    {" "}
                    <img src={el.images} alt="" />
                </div>
                <div className="project__item-content flex flex-wrap md:flex-nowrap  w-full gap-2">
                    <div className="project__item-content-left w-full">
                        <h3
                            style={{ cursor: "pointer" }}
                            onClick={() => router.push(`/projects/${el.id}`)}
                        >
                            {el.projectName}
                        </h3>
                        <span className="project__item-content-location">
                            <Location />
                            {`${el.country}, ${el.city}`}
                        </span>
                        {type === "default" ? (
                            <>
                                <span className="project__item-content-about">
                                    About Developer
                                </span>
                                <p>{el.aboutDev}</p>
                            </>
                        ) : (
                            <>
                                <div>
                                    <div className="project__item-content-our">
                                        <span>Carpet Area:</span>
                                        <span>{el.CarpetAreaRange}</span>
                                    </div>
                                    <div className="project__item-content-our">
                                        <span>Construction Stage:</span>
                                        <span>{el.ConstructionStage}</span>
                                    </div>
                                    <div className="project__item-content-our">
                                        <span>BHK:</span>
                                        <span>
                                            {el.ApartmentType.map(
                                                (el: any) => el + " "
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div className="project__item-features">
                                    {amentiesOptions.map((feature, index) => {
                                        if (el.amenities.includes(index)) {
                                            return (
                                                <span key={index}>
                                                    {feature.icon}
                                                    {feature.title}
                                                </span>
                                            );
                                        }
                                        return null; // Если индекс не присутствует в indicesToDisplay, возвращаем null
                                    })}
                                </div>
                            </>
                        )}
                    </div>
                    <div
                        className={`project__item-content-right ${
                            type === "our" ? "no-space" : ""
                        } items-start w-full`}
                    >
                        <span>{el.budget}</span>
                        {type === "default" && el.status === "Pending" ? (
                            <div className="project__item-btns flex gap-2">
                                <button
                                    onClick={(e) =>
                                        changeStatus("Approved", el.id, e)
                                    }
                                    className="btn"
                                >
                                    Approve
                                </button>
                                <button
                                    onClick={(e) =>
                                        changeStatus("Rejected", el.id, e)
                                    }
                                    className="btn"
                                >
                                    Reject
                                </button>
                            </div>
                        ) : type === "default" && el.status === "Approved" ? (
                            <div className="project__item-status-succes project__item-status">
                                <Succes /> Approved
                            </div>
                        ) : type === "default" && el.status === "Rejected" ? (
                            <div className="project__item-status-denied project__item-status">
                                <Denied /> Rejected
                            </div>
                        ) : null}
                        {type === "our" && (
                            <div>
                                <div className="project__item-our-right">{`EMI starts at ${el.EMI}`}</div>
                                <div className=" project__item-our-right project__item-manager-posted">
                                    Posted on:
                                </div>
                                <div project__item-our-right>
                                    {el["listed at"]}
                                </div>
                                <div className="project__item-our-right project__item-manager-posted">
                                    Posted From:
                                </div>
                                <div className="project__item-our-right">
                                    {el.state}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {type === "default" ? (
                <div className="project__item-manager w-full md:w-auto">
                    <span className="project__item-manager-name">
                        Manager Name
                    </span>
                    <span className="project__item-manager-subtitle">
                        {el.devDetails.name}
                    </span>
                    <span className="project__item-manager-posted">
                        Posted From:
                    </span>
                    <span className="project__item-manager-from">
                        {el.devDetails.ProjectLocation}
                    </span>
                    <a
                        className="project__item-manager-wp"
                        href={`https://wa.me/${el.devDetails.phone}`}
                        target="__blank"
                    >
                        {" "}
                        <div className="project__item-manager-wp">
                            <WpIcon />
                        </div>
                    </a>
                </div>
            ) : null}
        </div>
    );
};

export default ProjectItem;
