import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appoinment/Appointment";
import Dashboard from "../Pages/Dashboards/Dashboard/Dashboard";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/RegisterPage/Login/Login";
import Register from "../Pages/RegisterPage/Register/Register";
import PrivateRoute from "./PrivateRouter";

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
    },
    {
        path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard> </PrivateRoute>    
    }
])

export default router;