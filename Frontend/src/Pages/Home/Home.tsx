import "../../Styles/_index.scss";
import {Navbar} from "../../Common/Components/Navbar/Navbar.tsx";
import Intro from "./Intro.tsx";
import "./_home.scss"
import HowItWorks from "./HowItWorks.tsx";
import Features from "./Features.tsx";
import Contact from "./Contact.tsx";
import {useRef} from "react";

export default function Home() {
    const introRef = useRef(null);
    const featuresRef = useRef(null);
    const howItWorksRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <>
            <Navbar introRef={introRef} contactRef={contactRef} featuresRef={featuresRef} howItWorksRef={howItWorksRef} />
            <div ref={introRef}>

                <Intro />
            </div>
            <div ref={featuresRef}>

                <Features />
            </div>
            <div ref={howItWorksRef}>
                <HowItWorks />
            </div>
            <div ref={contactRef}>

                <Contact  />
            </div>
        </>

    )
}