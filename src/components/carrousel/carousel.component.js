import styles from "./carousel.component.module.scss";
import { ReactComponent as Arrow } from "../../assets/images/Vector.svg";
import { useEffect, useState } from "react";

export const Carousel = ({ pictures }) => {
    const [index, setIndex] = useState(1);
    const maxIndex = pictures.length;

    const handleClick = (side) => {
        if (side === "right") {
            setIndex(index === maxIndex ? 1 : index + 1);
        } else if (side === "left") {
            setIndex(index === 1 ? maxIndex : index - 1);
        }
    };

    useEffect(() => {
        if (pictures.length > 1) {
            const intervalId = setInterval(() => {
                handleClick("right");
            }, 5000);
            return () => clearInterval(intervalId);
        }
    });

    return (
        <main className={styles.main}>
            <img
                className={styles.img}
                src={`${pictures[index - 1]}`}
                alt={`Room ${index} of ${maxIndex}`}
            />
            {pictures.length !== 1 && (
                <div className={styles.arrows}>
                    <Arrow onClick={() => handleClick("left")} className={styles.left} />
                    <Arrow
                        onClick={() => handleClick("right")}
                        className={styles.right}
                    />
                </div>
            )}
            {pictures.lengh !== 1 && (
                <footer className={styles.footer}>
                    <span>
                        {index} / {maxIndex}
                    </span>
                </footer>
            )}
        </main>
    );
};
