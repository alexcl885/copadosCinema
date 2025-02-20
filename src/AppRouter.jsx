import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login/Login";

const AppRouter = () => {
    return ( 
        <>
            <p>Bienvenido!</p>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login/>} />

                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
     );
}
 
export default AppRouter;