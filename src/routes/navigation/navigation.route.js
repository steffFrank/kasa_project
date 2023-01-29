import "./navigation.route.module.css";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/header.component";

export const Navigation = () => {
    return (
        <>
            <Header />
            <Outlet />
            <div>footer</div>
        </>
        
    )
}