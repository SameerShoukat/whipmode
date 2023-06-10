
import Header from "./Header"
import Footer from './Footer'
import { Outlet } from "react-router-dom"

export default function WebWrapper(){
    return(
        <>
        <Header />
            <Outlet />
        <Footer />
        </>
    )
}