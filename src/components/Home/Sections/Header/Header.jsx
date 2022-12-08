import React, { useState, useCallback, useEffect, useRef } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import { StyledBurger } from '../../../StyledComponents/Navbar';
import { Sidebar } from '../../../StyledComponents/SideBar';
import { useAnimation, motion } from 'framer-motion';
import "./Header.scss";
import logo1 from "../../../../letter-e.png";
import $ from "jquery";
import { useNavigate } from 'react-router-dom';

function Header(props) {

    const [y, setY] = useState(null);

    const navigate = useNavigate();

    const [logoImage, setlogoImage] = useState(logo1);
    const [hamburgerColor, setHamburgerColor] = useState(false);
    const animationImg = useAnimation();

    const navRef = useRef();

    const a1Ref = useRef();
    const a2Ref = useRef();
    const a3Ref = useRef();
    const a4Ref = useRef();
    const a5Ref = useRef();
    const a6Ref = useRef();
    const a7Ref = useRef();

    const { isOpen, onOpen, onClose } = useDisclosure()

    const reload = () => {
        window.location.reload();
    }

    let isScollingUp = false;

    const imageOnScrollAnimation = () => {
        animationImg.start({
            x: [0, -10, 10, -10, 10, 0]
        });
    }

    const goToLogin = () => {
        // navigate('/login');
    };

    const handleNavigation = useCallback(
        (e) => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                isScollingUp = true;
                if (window.scrollY > 0) {
                    navRef.current.classList.add("nav_scroll");
                    navRef.current.style.position = "fixed";
                    a1Ref.current.style.color = "var(--primary-color)";
                    a2Ref.current.style.color = "var(--primary-color)";
                    a3Ref.current.style.color = "var(--primary-color)";
                    a4Ref.current.style.color = "var(--primary-color)";
                    a5Ref.current.style.color = "var(--primary-color)";
                    a6Ref.current.style.color = "var(--primary-color)";
                    a7Ref.current.style.color = "var(--primary-color)";
                    // $(".nav_item").before(function () {
                    //     $(this).css("color", "var(--primary-color)");
                    // });
                }
                else {
                    navRef.current.classList.remove("nav_scroll");
                    navRef.current.style.position = "fixed";
                    imageOnScrollAnimation();
                    a1Ref.current.style.color = "var(--tertiary-color)";
                    a2Ref.current.style.color = "var(--tertiary-color)";
                    a3Ref.current.style.color = "var(--tertiary-color)";
                    a4Ref.current.style.color = "var(--tertiary-color)";
                    a5Ref.current.style.color = "var(--tertiary-color)";
                    a6Ref.current.style.color = "var(--tertiary-color)";
                    a7Ref.current.style.color = "var(--tertiary-color)";
                    // $(".nav_item").before(function () {
                    //     $(this).css("color", "var(--tertiary-color)");
                    // });
                }
            } else if (y < window.scrollY) {
                navRef.current.style.position = "relative";
                isScollingUp = false;
                navRef.current.classList.remove("nav_scroll");
            }
            setY(window.scrollY);
        },
        [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    useEffect(() => {

        animationImg.set({
            y: -100,
            opacity: 0
        })

        animationImg.start({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.4
            },
        });

    }, []);

    return (
        <>
            <header className="navBar_header" ref={navRef}>
                <div className="left_content">
                    <motion.div style={{ cursor: "pointer" }} onClick={reload}
                        animate={animationImg}>
                        <img className="img_logo" src={logoImage} alt="logo" width="40" height="40" />
                    </motion.div>
                </div>
                <nav className="nav_container">
                    <ul className="nav_items">
                        <motion.li
                            initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 0.6 }}
                            className={`nav_item push_right`}
                        >
                            <a ref={a1Ref} href="#connect">Connect</a>
                        </motion.li>
                        <motion.li
                            initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 0.7 }}
                            className={`nav_item`}
                        >
                            <a ref={a2Ref} href="#college">College</a>
                        </motion.li>
                        <motion.li
                            initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 0.8 }}
                            className={`nav_item`}
                        >
                            <a ref={a3Ref} href="#features">Features</a>
                        </motion.li>
                        <motion.li
                            initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 0.9 }}
                            className={`nav_item`}
                        >
                            <a ref={a4Ref} href="#events">Events</a>
                        </motion.li>
                        <motion.li
                            initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 1.0 }}
                            className={`nav_item`}
                        >
                            <a ref={a5Ref} href="#competitions">Competitions</a>
                        </motion.li>
                        <motion.li
                            initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 1.1 }}
                            className={`nav_item`}
                        >
                            <a ref={a6Ref} href="#download">Download</a>
                        </motion.li>
                        <motion.li
                            initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 1.2 }}
                            className={`nav_item`}
                        >
                            <a ref={a7Ref} onClick={goToLogin}>Login</a>
                        </motion.li>
                    </ul>
                </nav>
                {
                    isOpen ? null :
                        <StyledBurger colorChange={hamburgerColor} onClick={onOpen}>
                            <div className="menu_item_burger"></div>
                        </StyledBurger>
                }
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    size={'xs'}
                >
                    <DrawerOverlay />
                    <DrawerContent maxW={250} bg={props.tertiary_color}>
                        <DrawerCloseButton zIndex={10} color="var(--secondary-color)" fontSize='1rem' />

                        <DrawerBody>
                            <Sidebar>
                                <nav>
                                    {props.navLinks && (
                                        <ol>
                                            {props.navLinks.map(({ url, name }, i) => (
                                                <li key={i}>
                                                    <a href={url} onClick={() => onClose()}>
                                                        {name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ol>
                                    )}
                                </nav>
                            </Sidebar>
                        </DrawerBody>

                    </DrawerContent>
                </Drawer>
            </header>
        </>
    )
}

export default Header