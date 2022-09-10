import { HOME_ROUTE, LOGIN_ROUTE } from "./utils/const";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    }
]