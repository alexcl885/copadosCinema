import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";

import ListMoviesPage from "./pages/ListMoviesPage";



const AppRouter = () => {
    return ( 
        <>
            <p>Bienvenido!</p>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login/>} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/home" element={<Layout />}>
                            <Route index element={<HomePage/>}/>
                            <Route path="/home/movies" element={<ListMoviesPage/>}/>
                        </Route>
                            

                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
     );
}
 
export default AppRouter;