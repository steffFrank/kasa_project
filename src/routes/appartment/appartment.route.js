import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "../../components/carrousel/carousel.component";
import { appartementContext } from "../../context/appartment.context";
import styles from "./appartment.route.module.scss";


export const Appartment = () => {
    const { appartments, isLoading } = useContext(appartementContext);
    const { id } = useParams();
    const appartment = appartments.find(appartment => appartment._id === id);
    
    return (
        isLoading ? <div>...Loading</div> : <section className={styles.appartment}>
            <Carousel pictures={appartment.pictures}/>
        </section>
    )
}