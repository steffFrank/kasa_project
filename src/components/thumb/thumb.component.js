import { Link } from "react-router-dom";
import styles from "./thumb.component.module.scss";


export const Thumb = ({ title, id, cover }) => {

    return (
        <Link className={styles.link} to={id}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.darken}>
                <article className={`${styles.article} `}>
                    <img src={cover} alt={title} className={styles.img} />
                </article>
            </div>
        </Link>
    )
}