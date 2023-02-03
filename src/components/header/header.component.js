import styles from "./header.component.module.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { links } from "../../utils/page.utils";

export const Header = () => {

    return (
        <header className={styles.header}>
            <Logo className={styles.logo} />
            <nav>
                <ul className={styles.nav}>
                    {links.map((link) => {
                        return <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => isActive ? `${styles.active} ${styles.navItem}` : `${styles.navItem}`}>
                            <li>{link.text}</li>
                        </NavLink>
                    })}
                </ul>
            </nav>
        </header>
    )
}