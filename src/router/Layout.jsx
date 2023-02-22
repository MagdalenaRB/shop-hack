import { Outlet } from "react-router-dom";
import NavbarHack from "../components/NavbarHack";

function Layout() {
    return (
        <>
            <NavbarHack />
            <Outlet />
            
        </>
    )
}

export default Layout;