import { HostContainer } from "../hostContainer/hostContainer.component";
import { Tag } from "../tag/tag.component";
import styles from "./titleContainer.component.module.scss";


export const TitleContainer = ({appartment}) => {
    const {title, location, rating, tags, host, _id } = appartment;
    const tagList = tags.map(((tag, index) => {
        const tagId = _id + index;
        return <Tag key={tagId} tagName={tag} />
    }));
    
    return (
        <section className={styles.infos}>
            <div className={styles.leftContainer}>
                <div className={styles.titles}>
                    <h2 className={styles.title}>{title}</h2>
                    <h3 className={styles.location}>{location}</h3>
                </div>
                <div className={styles.tagList}>{tagList}</div>
            </div>
            <HostContainer rating={rating} name={host.name} picture={host.picture} />
        </section>
    )
}