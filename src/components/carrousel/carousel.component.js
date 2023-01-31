import styles from "./carousel.component.module.scss";
import { ReactComponent as Arrow } from "../../assets/images/Vector.svg";


export const Carousel = ({pictures}) => {
    return (
        <main className={styles.main}>
            <div className={styles.arrows}>
                <Arrow className={styles.left} />
                <Arrow className={styles.right} />
            </div>
            <footer className={styles.footer}><span>/</span></footer>
        </main>
    )
} 