import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import styles from "./footer.component.module.scss";


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Logo className={styles.logo}/>
            <p className={styles.copy}>&copy; 2020 Kasa. All rights reserved</p>
        </footer>
    )
}