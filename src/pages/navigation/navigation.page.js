import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import "./navigation.page.module.scss";

export const Navigation = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
