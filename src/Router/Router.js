import { createBrowserRouter } from "react-router-dom";
// import Main from "../../src/Layout/Main";
// import Home from "../../src/Pages/HomePage/Home/Home";
// import Login from "../../src/Pages/RegisterPage/Login/Login";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/RegisterPage/Login/Login";

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
            }
        ]
    }
])

export default router;