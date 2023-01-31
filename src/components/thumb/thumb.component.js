import { Link } from "react-router-dom";
import styles from "./thumb.component.module.scss";


export const Thumb = ({title, id, cover}) => {

    const divStyle = {
        background: `url(${cover})`,
        backgroundSize: "cover"
    };
    
    return (
        <Link className={styles.link} to={id}>
            <article className={styles.article} style = {divStyle}>
                <div className={styles.darken}>   
                    <h2 className={styles.title}>{title}</h2>
                </div>
            </article>
        </Link>
    )
}