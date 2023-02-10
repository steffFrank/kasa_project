import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Carousel } from "../../components/carrousel/carousel.component";
import { appartementContext } from "../../context/appartment.context";
import { TitleContainer } from "../../components/titleContainer/titleContainer.component";
import { DescriptionContainer } from "../../components/descriptionContainer/descriptionContainer.component";
import { Loading } from "../../components/loading/loading.component";
import { paths } from "../../utils/route.utils";
import styles from "./appartment.route.module.scss";



export const Appartment = () => {
    const { appartments, isLoading, error } = useContext(appartementContext);

    const navigate = useNavigate();
    const { id } = useParams();
    const appartment = appartments.find(appartment => appartment._id === id);

    useEffect(() => {
        if (!appartment || error) {
            navigate(paths.error);
        }
    });
    
    return (
        isLoading ? <Loading /> : <section className={styles.appartment}>
            <Carousel pictures={appartment.pictures} />
            <TitleContainer appartment={appartment} />
            <DescriptionContainer description={appartment.description} equipements={appartment.equipments} />
        </section>
    )
}