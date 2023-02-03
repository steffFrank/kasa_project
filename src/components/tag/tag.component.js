import styles from "./tag.component.module.scss";

export const Tag = ({ tagName }) => {
    return (
        <div className={styles.tag}>
            <h4 className={styles.title}>{tagName}</h4>
        </div>
    );
};
