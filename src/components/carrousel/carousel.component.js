import styles from "./carousel.component.module.scss";
import { ReactComponent as Arrow } from "../../assets/images/Vector.svg";
import { useState } from "react";

export const Carousel = ({pictures}) => {
    const [index, setIndex] = useState(1);
    const maxIndex = pictures.length;

    const handleClick = (side) => {
        switch (side) {
            case "right": 
                if (index === maxIndex) {
                    setIndex(1);
                    return;
                }
                setIndex(prevIndex => prevIndex + 1);
                break;
            case "left":
                if (index === 1) {
                    setIndex(maxIndex);
                    return;
                }
                setIndex(prevIndex => prevIndex - 1);
                break;
            default:
                return;
        }
    }
    // Fix - put everything in scss
    const style = {
        backgroundImage: `url(${pictures[index-1]})`,
        backgroundSize: "cover"
    }

    return (
        <main className={styles.main} style={style}>
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