import styles from "./main.component.module.scss";


export const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.darken}>
                <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
            </div>
        </main>
    )
}