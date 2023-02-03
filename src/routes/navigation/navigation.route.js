import "./navigation.route.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";

export const Navigation = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}