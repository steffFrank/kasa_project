import { useState } from "react";
import styles from "./dropdown.component.module.scss";
import { ReactComponent as Arrow } from "../../assets/images/Vector.svg";

const DROPDOWN_TYPES_CLASSES = {
    medium: styles.medium,
    large: styles.large
}

export const Dropdown = ({type, title, children}) => {
    const [isDropdownOpen, setIsdropdownOpen] = useState(true);

    const toggleDropdown = () => {
        setIsdropdownOpen(prevState => !prevState);
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.bar} ${DROPDOWN_TYPES_CLASSES[type]}`}>
                <h2 className={styles.title}>{title}</h2>
                <Arrow onClick={toggleDropdown} className={isDropdownOpen ? `${styles.arrow} ${styles.open}` : `${styles.arrow}`}/>
            </div>
            <div className={isDropdownOpen ? `${styles.textBox} ${styles.boxOpen}` : `${styles.textBox}`}>{children}</div>
        </div>
    )
}