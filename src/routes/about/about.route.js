import styles from "./about.route.module.scss";
import { Dropdown } from "../../components/dropdown/dropdown.component";
import { aboutTexts } from "../../utils/about.utils";

export const About = () => {
    return (
        <section className={styles.about}>
            <main className={styles.main}>
                <div className={styles.darken}></div>
            </main>
            <div className={styles.description}>
                {aboutTexts.map((text, index) => {
                    return <Dropdown key={index} type="large" title={text.title}>{text.message}</Dropdown>
                })}
            </div>
        </section>
    )
}

