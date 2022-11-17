import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appoinment/Appointment";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/RegisterPage/Login/Login";
import Register from "../Pages/RegisterPage/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home  ></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    }
])

export default router;