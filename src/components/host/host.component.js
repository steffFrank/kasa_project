import styles from "./host.component.module.scss";


export const Host = ({name, picture}) => {
    return (
        <div className={styles.host}>
            <p className={styles.name}>{name}</p>
            <img src={picture} alt={`${name} profile`} className={styles.img} />
        </div>
    )
}