import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ListMoviesPage from "./pages/ListMoviesPage";
import { MoviesProvider } from "./context/MoviesContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import './App.css';
import AboutPage from "./pages/AboutPage";

/**
 * ALL MY ROUTES IN MY APPLICATION
 */
const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<LoginPage></LoginPage>,
            },
            {
                path: "home",
                element: <HomePage></HomePage>
            },
            {
                path: "/movies",
                element: <ListMoviesPage></ListMoviesPage>
            },
            {
                path: "logout",
                element: <RegisterPage></RegisterPage>
            },
            {
                path: "register",
                element: <RegisterPage></RegisterPage>
            },
            {
                path: "about",
                element: <AboutPage></AboutPage>
            }
        ]
    }
])

const AppRouter = () => {
    return ( 
        <>  
        <AuthProvider>
            <MoviesProvider>

            <RouterProvider router={router}/>

            </MoviesProvider>
        </AuthProvider>
        </>
    );
}
 
export default AppRouter;

