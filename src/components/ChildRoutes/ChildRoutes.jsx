import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import LazyLoader from '../LazyLoader/LazyLoader';
import "./ChildRoutes.scss";
import logoImage from "../../letter-e-nb.png";
import LocalStorageService from '../../configs/LocalStorageService';
import Avatar from 'react-avatar';

function ChildRoutes(props) {

    const Dashboard = lazy(() => import("./Home/Home"));
    const Events = lazy(() => import("./Events/Events"));
    const BookedEvents = lazy(() => import("./BookedEvents/BookedEvents"));

    const [loggedUser, setloggedUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        let user = JSON.parse(LocalStorageService.getUser());
        if (!user) {
            navigate("/login");
        }
        else {
            setloggedUser(user);
        }
    }, []);

    return (
        <div className="poppinsFont">
            {
                loggedUser ?
                    <>
                        <header className="navBar_header">
                            <div className="left_content">
                                <div onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                                    <img className="img_logo" src={logoImage} alt="logo" width="40" height="40" />
                                </div>
                            </div>
                            <nav className="nav_container">
                                <ul className="nav_items">
                                    <li
                                        className={`nav_item push_right`}
                                    >
                                        <a href="#">
                                            <Avatar name={loggedUser.firstName + " " + loggedUser.lastName} size="35" round={true} /> &nbsp;
                                            {loggedUser.firstName + " " + loggedUser.lastName}</a>
                                    </li>
                                </ul>
                            </nav>
                        </header>
                        <Suspense fallback={LazyLoader()}>
                            <Routes>
                                <Route
                                    exact
                                    path="/"
                                    element={<Dashboard user={loggedUser} />}
                                >
                                </Route>
                                <Route exact path="events" element={<Events user={loggedUser} />} />
                                <Route exact path="booked-events" element={<BookedEvents user={loggedUser} />} />
                                <Route path="*" element={props.children} />
                            </Routes>
                        </Suspense>
                    </> : null
            }
        </div>
    )
}

export default ChildRoutes