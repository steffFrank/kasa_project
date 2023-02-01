import styles from "./carousel.component.module.scss";
import { ReactComponent as Arrow } from "../../assets/images/Vector.svg";
import { useState } from "react";

export const Carousel = ({pictures}) => {
    const [index, setIndex] = useState(1);
    const maxIndex = pictures.length;

    const handleClick = (side) => {
        if (side === "right") {
            setIndex(index === maxIndex ? 1 : index + 1);
        } else if (side === "left") {
            setIndex(index === 1 ? maxIndex : index - 1);
        }
    }

    return (
        <main className={styles.main}>
            <img className={styles.img} src={`${pictures[index-1]}`} alt={`Room ${index} of ${maxIndex}`}/>
            <div className={styles.arrows}>
                <Arrow onClick={() => handleClick("left")} className={styles.left} />
                <Arrow onClick={() => handleClick("right")} className={styles.right} />
            </div>
            <footer className={styles.footer}>
                <span>{index} / {maxIndex}</span>
            </footer>
        </main>
    )
}