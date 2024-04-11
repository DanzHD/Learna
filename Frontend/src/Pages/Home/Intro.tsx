import "./_home.scss";
import Text from "../../Common/Components/Text/Text.tsx";
import Button from "../../Common/Components/Button/Button.tsx";
import {ButtonTypes} from "../../Common/Components/Button/IButton.tsx";
import {useNavigate} from "react-router";

export default function Intro() {

    const navigate = useNavigate();

    return (
        <section className="intro">
            <div className="intro__text">
                <div className="intro__text__header">
                    <Text heading bold>Learna</Text>
                    <Text heading bold>Effortlessly Organize Your Memories</Text>
                </div>
                <Text className="intro__text__description">Learna revolutionizes photo management with computer vision technology,
                    making it effortless to organize, categorise and share your memories

                </Text>
                <div className="intro__button">

                    <Button onClick={() => navigate("/auth")} type={ButtonTypes.primary} small>Get Started</Button>
                </div>
            </div>

            <div className="intro__image">
                <img alt="Mountain" src="../../Assets/Images/mountain.jpg" />
            </div>

        </section>
    )
}