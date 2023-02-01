import styles from "./descriptionContainer.component.module.scss";
import { Dropdown } from "../dropdown/dropdown.component";

export const DescriptionContainer = ({equipements, description}) => {
    return (
        <section className={styles.description}>
            <Dropdown title="Description" type="medium">{description}</Dropdown>
            <Dropdown title="Équipements" type="medium">{equipements.map((equipement, index) => <li className={styles.listItem} key={index}>{equipement}</li>)}</Dropdown>
        </section>
    )
}