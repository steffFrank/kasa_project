import { useContext } from "react";
import { Main } from "../../components/main/main.component";
import { AppartementContext } from "../../context/appartment.context";
import { Thumb } from "../../components/thumb/thumb.component";
import styles from "./home.route.module.scss";


export const Home = () => {

    const { appartments, isLoading } = useContext(AppartementContext);

    return (
        <section className={styles.home}>
            <Main />
         {isLoading ? <div>Loading...</div> : (<div className={styles.houses}>{appartments.map(appartment => {
                return <Thumb key={appartment._id} title={appartment.title} id={appartment._id} cover={appartment.cover} />
         })}</div>)}  
        </section>
    )
}