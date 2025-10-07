import { createBrowserRouter } from "react-router";

import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Catalog from "../pages/catalog/Catalog";
import AuthLayout from "../layout/AuthLayout";
import Landing from "../pages/landing/Landing";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Landing,
        },
        {
            path: "register",
            Component: Register,
        },
        {
            path: "login",
            Component: Login,
        },
        {
            path: "auth",
            Component: AuthLayout,
            children: [
                {
                    path: "catalog",
                    Component: Catalog,
                },
            ],
        },
    ],
    { basename: "/TechStore" }
);

export default router;
