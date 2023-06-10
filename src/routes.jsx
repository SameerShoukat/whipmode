import {
    Routes,
    Route,

} from "react-router-dom";
import Home from "./pages/Index";
import Helping from "./pages/Helping";
import HowitsWorkpage from "./pages/HowitsWorkpage";
import Pricing from "./pages/Pricing";
import WebWrapper from "./sections/wrapper";
// admin routes
// userAuth
import { ProtectedRoute, AdminProtectedRoute, SupervisorProtectedRoute } from './hooks/useAuth';

export default function AppRoutes() {
    return (
        <Routes>
            {/* <Route path="/signin" element={<SignInPage />} /> */}
            {/* <Route path="/new_purchaser" element={<AddPurchaser />} /> */}
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
                
                
            </Route>

        </Routes>
    )
}

