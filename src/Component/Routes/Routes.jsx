import Home from "../Home";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import About from "../Header/About/About";
import ContactUs from "../Header/ContactUs/ContactUs";
import Login from "../Header/Login/Login";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])