import "./_auth.scss"
import Text from "../../Common/Components/Text/Text.tsx";
import Button from "../../Common/Components/Button/Button.tsx";
import Input from "../../Common/Components/Input/Input.tsx";
import {inputType} from "../../Common/Components/Input/IInput.tsx";
import {useThemeContext} from "../../Contexts/ThemeContext/useThemeContext.tsx";
import {themes} from "../../Common/Enums/themes.tsx";
import Tabs, {Tab} from "../../Common/Components/Tabs/Tabs.tsx";
import {useState} from "react";
import {tabs} from "./EAuth.tsx";
import {ButtonOptions} from "../../Common/Components/Button/IButton.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';





export default function Auth() {
    const {theme, handleToggleTheme} = useThemeContext();
    const [tab, setTab] = useState<tabs>(tabs.LOGIN);

    return (
        <>

            <ToastContainer position="top-center" theme={theme === themes.lightTheme ? "light" : "dark"}  />
            <div className="auth">
                <div className="auth__container">
                    <div className="tabs--selector">

                        <Tabs fullWidth>
                            <Tab setSelectedTab={setTab} tabName={tabs.LOGIN} selectedTab={tab}>{tabs.LOGIN}</Tab>
                            <Tab setSelectedTab={setTab} tabName={tabs.REGISTER} selectedTab={tab}>{tabs.REGISTER} </Tab>
                        </Tabs>
                    </div>
                    {
                        theme === themes.lightTheme ?
                            <div onClick={handleToggleTheme} className="material-symbols-outlined dark-icon">dark_mode</div> :
                            <div onClick={handleToggleTheme} className="material-symbols-outlined light-icon">light_mode</div>
                    }

                    <section className="auth__container__header">
                        <Text className="auth__logo" heading bold>Learna</Text>
                        {
                            tab === tabs.LOGIN ?
                            <Text>Log in to continue</Text> :
                            <Text>Register to continue</Text>
                        }
                    </section>

                    <section className="auth__container__body">
                        <form >

                            <div className="form__input" >
                                <label><Text>Username</Text></label>
                                <Input required name="username" type={inputType.TEXT} placeholder="Enter Username" fullWidth />
                            </div>
                            <div className="form__input">

                                <label><Text>Password</Text></label>
                                <Input required name="password" type={inputType.PASSWORD} placeholder="Enter Password" fullWidth />
                            </div>
                            {
                                tab === tabs.LOGIN ?
                                    <Button buttonOption={ButtonOptions.SUBMIT} small fullWidth>
                                            <div>login</div>

                                    </Button> :
                                    <>
                                        <div className="form__input">
                                            <label><Text>Confirm Password</Text></label>
                                            <Input required name="confirmPassword" type={inputType.PASSWORD} placeholder="Confirm Password" fullWidth></Input>
                                        </div>
                                        <Button buttonOption={ButtonOptions.SUBMIT} small fullWidth>
                                            <div>Register</div>

                                        </Button>

                                    </>
                            }
                        </form>

                    </section>

                    <section className="auth__container__footer">
                        {
                            tab === tabs.LOGIN &&
                            <>
                                <div className="forgot-password">
                                    <Text>Can't log in?</Text>
                                </div>
                            </>
                        }

                    </section>



                </div>
            </div>
        </>
    )
}
