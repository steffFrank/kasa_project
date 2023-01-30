import styles from "./header.component.module.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
    const [activeLinkIndex, setActiveLinkIndex] = useState(0);

    // List of links
    const links = [
        {path: "home", text: "accueil"},
        {path: "about", text: "a propos"}
    ]

    // Change the value of the activeLinkIndex to the index of the clicked link
    const toggleActive = (index) => {
        setActiveLinkIndex(index);
    }
    return (
        <header className={styles.header}>
            <Logo className={styles.logo}/>
            <nav>
                <ul className={styles.nav}>
                    {links.map((link, index) => {
                       return <Link 
                                onClick={() => toggleActive(index)}
                                key={link.path} 
                                to={link.path}>
                                <li 
                                // if the actual index is the one clicked, add the active style or remove it if it is not 
                                    className={index === activeLinkIndex ? `${styles.navItem} ${styles.active}` 
                                    : styles.navItem }>
                                        {link.text}
                                </li>
                        </Link>
                    })}
                </ul>
            </nav>
        </header>
    )
}