import styles from "./stars.component.module.scss";
import { ReactComponent as Star } from "../../assets/images/redStar.svg";

const NUM_STARS = 5;

export const Stars = ({ rating }) => {

    const stars = Array.from({ length:NUM_STARS }, (_, i) => (
        <Star key={i} className={i < rating ? styles.rated : styles.unrated } />
    ));
    return (
        <div className={styles.stars}>
            {stars}
        </div>
    )
}