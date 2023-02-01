import { useContext } from "react";
import { AppartmentPreview } from "../../components/appartmentPreview/appartmentPreview.component";
import { appartementContext } from "../../context/appartment.context";
import styles from "./home.route.module.scss";
import {Routes, Route} from "react-router-dom";
import { Appartment } from "../appartment/appartment.route";


export const Home = () => {

    const { appartments, isLoading } = useContext(appartementContext);

    return (
        <section className={styles.home}>
            <Routes>
                <Route index element={<AppartmentPreview appartments={appartments} />} />
                <Route path=":id" element={<Appartment />} />
            </Routes>

        </section>
       
    )
}