import { useContext } from "react";
import { Main } from "../../components/main/main.component";
import { AppartementContext } from "../../context/appartment.context";
import styles from "./home.route.module.scss";


export const Home = () => {

    const { appartments, isLoading } = useContext(AppartementContext);


    return (
        <section className={styles.home}>
            <Main />
         {isLoading ? <div>Loading...</div> : ( appartments.map(appartment => {
                return <li key={appartment._id}>{appartment.host.name}</li>
         }))}  
        </section>
    )
}