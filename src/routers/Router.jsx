import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main/Main";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/SignIn";
import CreateTask from "../pages/task/CreateTask";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "createTask",
                element: <CreateTask />
            }
            
        ]
      
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'signIn',
        element: <SignIn />
    }
]);