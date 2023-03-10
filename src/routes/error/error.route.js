import styles from "./error.route.module.scss";
import { Link } from "react-router-dom";
import { paths } from "../../utils/route.utils";

export const Error = () => {
    return (
        <>
            <section className={styles.error}>
                <h1 className={styles.number}>404</h1>
                <p className={styles.message}>
                    <span>Oups! La page que </span>
                    <span>vous demandez n'existe pas.</span>
                </p>
                <Link className={styles.link} to={paths.home}>Retourner sur la page d'accueil</Link>
            </section>
        </>
    )
}