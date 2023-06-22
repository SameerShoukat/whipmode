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
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Return from "./pages/return";
import Disclaimer from "./pages/disclaimer";
import Policy from "./pages/policy";
import Eula from "./pages/eula";

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
                <Route path="/privacy" element={
                    <Privacy />
                }>
                </Route>
                <Route path="/terms" element={
                    <Terms />
                }>
                </Route>
                <Route path="/return" element={
                    <Return />
                }>
                </Route>
                <Route path="/disclaimer" element={
                    <Disclaimer />
                }>
                </Route>
                <Route path="/policy" element={
                    <Policy />
                }>
                </Route>
                <Route path="/eula" element={
                    <Eula />
                }>
                </Route>
            </Route>

        </Routes>
    )
}

