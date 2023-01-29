import "./navigation.route.module.css";
import { Outlet } from "react-router-dom";

export const Navigation = () => {
    return (
        <>
            <div>Header</div>
                <Outlet />
            <div>footer</div>
        </>
        
    )
}