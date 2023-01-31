import { Thumb } from "../../components/thumb/thumb.component";
import styles from "./appartmentPreview.component.module.scss";



export const AppartmentPreview = ({appartments}) => {

    return (
        (<div className={styles.houses}>{appartments.map(appartment => {
            return <Thumb key={appartment._id} title={appartment.title} id={appartment._id} cover={appartment.cover} />
     })}</div>)
    )
}