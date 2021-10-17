import React from "react";

import Error404 from "../features/error/page/Error404Page";

import HomePage from "../features/home/page/HomePage";

import LoginPage from "../features/auth/page/LoginPage";
import LogoutPage from "../features/auth/page/LogoutPage";

import RegisterPage from "../features/register/page/RegisterPage";

import ProfilePage from "../features/profile/page/ProfilePage";
import ProfileEditPage from "../features/profile/page/ProfileEditPage";

import AboutPage from "../features/about/page/AboutPage";
import AboutLinkNoSelectPage from "../features/about/page/AboutLinkNoSelectPage";
import AboutLinkPage from "../features/about/page/AboutLinkPage";
import AboutLinkCreatePage from "../features/about/page/AboutLinkCreatePage";
import AboutLinkEditPage from "../features/about/page/AboutLinkEditPage";

const routes = [
    {
        auth: true,
        path: "/",
        exact: true,
        main: () => <HomePage />,
    },
    {
        auth: false,
        path: "/login",
        exact: true,
        main: () => <LoginPage />,
    },
    {
        auth: true,
        path: "/logout",
        exact: true,
        main: () => <LogoutPage />,
    },
    {
        auth: false,
        path: "/register",
        exact: true,
        main: () => <RegisterPage />,
        AboutLinkPage,
    },
    {
        auth: false,
        path: "/profile",
        exact: true,
        main: () => <ProfilePage />,
    },

    {
        auth: true,
        path: "/profile/edit",
        exact: true,
        main: () => <ProfileEditPage />,
    },
    {
        auth: true,
        path: "/about",
        exact: true,
        main: () => <AboutPage />,
    },
    {
        auth: true,
        path: "/about/link",
        exact: true,
        main: () => <AboutLinkPage />,
    },
    {
        auth: true,
        path: "/about/link-no-select",
        exact: true,
        main: () => <AboutLinkNoSelectPage />,
    },
    {
        auth: true,
        path: "/about/create",
        exact: true,
        main: () => <AboutLinkCreatePage />,
    },
    {
        auth: true,
        path: "/about/edit",
        exact: true,
        main: () => <AboutLinkEditPage />,
    },
    {
        auth: false,
        path: "/404",
        exact: true,
        main: () => <Error404 />,
    },
    {
        auth: false,
        path: "*",
        exact: true,
        main: () => <Error404 />,
    },
];

export default routes;
