import Text from "../Text/Text.tsx";
import "./_navbar.scss"
import {useThemeContext} from "../../../Contexts/ThemeContext/useThemeContext.tsx";
import {themes} from "../../Enums/themes.tsx";
import React, {RefObject, useEffect, useRef, useState} from "react";
import {INavbar} from "./INavbar.tsx";
import {useNavigate} from "react-router";

export function Navbar({
    introRef,
    featuresRef,
    howItWorksRef,
    contactRef
}: INavbar) {
    const {theme, handleToggleTheme} = useThemeContext();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);
    const profileIconRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    /* Close menu by clicking anywhere */
    useEffect(() => {
        function closeOpenMenus(e: MouseEvent): void {
            if (menuRef.current == null) return;
            if (!menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("click", closeOpenMenus);
        return (): void => {
            document.removeEventListener("click", closeOpenMenus);
        }

    }, []);

    useEffect(() => {
        function closeProfileMenu(e: MouseEvent): void {
            e.stopPropagation();
            if (profileRef.current == null) return;
            if (!profileRef.current.contains(e.target as Node)) {
                setProfileMenuOpen(false);
            }
        }
        document.addEventListener("click", closeProfileMenu);
        return (): void => {
            document.removeEventListener("click", closeProfileMenu);
        }

    }, []);

    /* For opening the menu with the menu icon */
    function handleToggleMenu(e: React.MouseEvent): void {
        e.stopPropagation();
        setMenuOpen(menuOpen => !menuOpen);

    }

    function handleToggleProfileMenu(e: React.MouseEvent): void {
        e.stopPropagation();
        if (e.target === profileIconRef.current) {

            setProfileMenuOpen(profileMenuOpen => !profileMenuOpen);
        }
    }

    function scroll(ref: RefObject<HTMLDivElement>) {
        if (ref == null) return;
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    }

    return (
        <div className={theme}>
            <div className="navbar">
                <div className="left__items">
                    <div onClick={handleToggleMenu} className="material-symbols-outlined left__items__menu">menu</div>
                    {
                        menuOpen &&
                            <div className="menu" ref={menuRef}>
                                <ul>
                                    <li onClick={() => scroll(howItWorksRef)}>
                                        <Text>How it works</Text>
                                    </li>
                                    <li onClick={() => scroll(featuresRef)}>
                                        <Text>Features</Text>
                                    </li>
                                    <li onClick={() => scroll(contactRef)}>
                                        <Text>Contact</Text>
                                    </li>
                                </ul>
                            </div>
                    }

                    <div className='logo-container' onClick={() => scroll(introRef)}>

                        <span className="material-symbols-outlined">linked_camera</span>
                        <span className='logo'>Learna</span>
                    </div>
                    <div onClick={() => scroll(howItWorksRef)}>

                        <Text className='left__item'>How it works</Text>
                    </div>
                    <div onClick={() => scroll(featuresRef)}>

                        <Text className='left__item'>Features</Text>
                    </div>
                    <div onClick={() => scroll(contactRef)}>

                        <Text className='left__item'>Contact</Text>
                    </div>
                </div>
                <div className="right__items">


                    <Text onClick={() => navigate("/auth")} className="right__item">Get Started</Text>

                    {
                        theme === themes.lightTheme ?
                            <div onClick={handleToggleTheme} className="material-symbols-outlined light-icon">dark_mode</div> :
                            <div onClick={handleToggleTheme} className="material-symbols-outlined night-icon">light_mode</div>
                    }
                    <div ref={profileIconRef} onClick={handleToggleProfileMenu} className="material-symbols-outlined profile-menu-icon">
                        account_circle
                        {
                            profileMenuOpen &&
                                <div className='profile-menu' ref={profileRef}>
                                    <Text onClick={() => navigate("/auth")} className='profile-menu__login'>Login</Text>
                                </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}