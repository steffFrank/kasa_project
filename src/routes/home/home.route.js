import { useContext } from "react";
import { AppartmentPreview } from "../../components/appartmentPreview/appartmentPreview.component";
import { Main } from "../../components/main/main.component";
import { appartementContext } from "../../context/appartment.context";
import styles from "./home.route.module.scss";


export const Home = () => {

    const { appartments, isLoading } = useContext(appartementContext);

    return (
        <section className={styles.home}>
            <Main />
            {isLoading ? <div>loading</div> : <AppartmentPreview appartments={appartments}/>}
        </section>
    )
}