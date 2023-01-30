import { Main } from "../../components/main/main.component";
import styles from "./home.route.module.scss";


export const Home = () => {
    return (
        <section className={styles.home}>
            <Main />
        </section>
    )
}