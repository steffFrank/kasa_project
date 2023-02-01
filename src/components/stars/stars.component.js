import styles from "./stars.component.module.scss";
import { ReactComponent as Star } from "../../assets/images/redStar.svg";

const NUM_STARS = 5;
const createStarsArray = (rating) => {
    let stars = [];
    for (let i = 0; i< NUM_STARS; i++) {
        if (i < rating) {
            stars.push(<Star key={i} className={styles.rated}/>)
        } else {
            stars.push(<Star key={i} className={styles.unrated} />)
        }
    }
    return stars;
}
export const Stars = ({rating}) => {
 

    return (
        <div className={styles.stars}>
            {createStarsArray(rating)}
        </div>
    )
}