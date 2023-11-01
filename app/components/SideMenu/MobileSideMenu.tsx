"use client";
import { Fragment, useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import { Transition, Dialog } from "@headlessui/react";
import useSideBar from "@/app/context/sidebar";

export default function MobileSideBar() {
    const { isOpen, setIsOpen } = useSideBar();

    const openMobileMenu = () => setIsOpen(true);
    const closeMobileMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen]);

    return (
        <Transition show={isOpen}>
            <Dialog onClose={closeMobileMenu} className="relative z-50">
                <Transition.Child
                    as={Fragment}
                    enter="transition-all ease-in-out duration-300"
                    enterFrom="opacity-0 backdrop-blur-none"
                    enterTo="opacity-100 backdrop-blur-[.5px]"
                    leave="transition-all ease-in-out duration-200"
                    leaveFrom="opacity-100 backdrop-blur-[.5px]"
                    leaveTo="opacity-0 backdrop-blur-none"
                >
                    <div
                        className="fixed inset-0 bg-black/30"
                        aria-hidden="true"
                    />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="transition-all ease-in-out duration-300"
                    enterFrom="translate-x-[-100%]"
                    enterTo="translate-x-0"
                    leave="transition-all ease-in-out duration-200"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-[-100%]"
                >
                    <Dialog.Panel className="fixed bottom-0 left-0 right-36 top-0 flex h-full w-full flex-col">
                        <SideMenu />
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
}
