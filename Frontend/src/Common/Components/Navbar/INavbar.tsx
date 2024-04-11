import {RefObject} from "react";

export interface INavbar {
    introRef: RefObject<HTMLDivElement>
    featuresRef: RefObject<HTMLDivElement>
    howItWorksRef: RefObject<HTMLDivElement>,
    contactRef: RefObject<HTMLDivElement>

}