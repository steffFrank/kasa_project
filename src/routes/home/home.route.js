import { useContext, useEffect } from "react";
import { AppartmentPreview } from "../../components/appartmentPreview/appartmentPreview.component";
import { appartementContext } from "../../context/appartment.context";
import styles from "./home.route.module.scss";
import { useNavigate } from "react-router-dom";
import { paths } from "../../utils/route.utils";

export const Home = () => {
    const { appartments, isLoading, error } = useContext(appartementContext);
    const navigate = useNavigate();

    useEffect(() => {
        error && navigate(paths.error);
    });

    return (
        <section className={styles.home}>
            <AppartmentPreview appartments={appartments} isLoading={isLoading} />
        </section>
    );
};
