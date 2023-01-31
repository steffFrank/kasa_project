import { Tag } from "../tag/tag.component";
import styles from "./titleContainer.component.module.scss";


export const TitleContainer = ({appartment}) => {
    const {title, location, rating, tags, host, _id } = appartment;
    console.log(tags);
    const tagList = tags.map(((tag, index) => {
        const tagId = _id + index;
        return <Tag key={tagId} tagName={tag} />
    }));
    
    return (
        <div className={styles.tagList}>{tagList}</div>
    )
}