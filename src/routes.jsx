import {
    Routes,
    Route,

} from "react-router-dom";
import Home from "./pages/Index";
import Helping from "./pages/Helping";
import HowitsWorkpage from "./pages/HowitsWorkpage";
import Pricing from "./pages/Pricing";
import WebWrapper from "./sections/wrapper";
import SignInPage from "./pages/sign";
import SignUpPage from "./pages/signup";
import SearchVehicel from "./pages/search";

import { ProtectedRoute, AdminProtectedRoute, SupervisorProtectedRoute } from './hooks/useAuth';

export default function AppRoutes() {
    return (
        <Routes>
    
            <Route path="/signup" element={<SignUpPage />} /> 
            <Route path="/signin" element={<SignInPage />} /> 
            <Route element={
                    <WebWrapper />
            }>
          
                <Route path="/" element={
                     <Home />
                }>
                </Route>
                <Route path="/helping" element={
                        <Helping />
                }>
                </Route>
                <Route path="/howItWork" element={
                        <HowitsWorkpage />
                }>
                </Route>
                <Route path="/pricing" element={
                        <Pricing />
                }>
                </Route>
                <Route path="/searchVehicel" element={
                        <SearchVehicel />
                        }>
                </Route>
                
            </Route>

        </Routes>
    )
}

