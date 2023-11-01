"use client";
import { useRouter } from "next/navigation";
import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from "react";
// define the props

interface SidebarProps {
    isOpen: boolean;

    setIsOpen(isOpen: boolean): void;
}

export const SidebarContext = createContext<SidebarProps | null>(null);

const useSideBar = (): SidebarProps => {
    // 2. use the useContext hook
    const context = useContext(SidebarContext);

    // 3. Make sure it's not null!
    if (!context) {
        throw new Error("Please use SidebarContext in parent component");
    }

    return context;
};

export const SideBarProvider = (props: PropsWithChildren) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
            {props.children}
        </SidebarContext.Provider>
    );
};
export default useSideBar;
