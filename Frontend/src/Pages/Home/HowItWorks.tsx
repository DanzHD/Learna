import Text from "../../Common/Components/Text/Text.tsx";
import Button from "../../Common/Components/Button/Button.tsx";
import {useNavigate} from "react-router";

export default function HowItWorks() {
    const navigate = useNavigate();

    return (
        <section className="how-it-works">
            <Text className="how-it-works__header" heading bold>How it works</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
            </Text>
            <div className="how-it-works__button" >

                <Button onClick={() => navigate("/auth")} small>Sign up</Button>
            </div>

        </section>
    )
}