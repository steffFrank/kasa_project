import { Thumb } from "../../components/thumb/thumb.component";
import { Loading } from "../loading/loading.component";
import { Main } from "../main/main.component";
import styles from "./appartmentPreview.component.module.scss";

export const AppartmentPreview = ({appartments, isLoading}) => {

    return (
        <>
            <Main />
            {isLoading ? <Loading /> : <div className={styles.houses}>
                {appartments.map(appartment => {
                    return <Thumb 
                            key={appartment._id} 
                            title={appartment.title} 
                            id={appartment._id} 
                            cover={appartment.cover} 
                            />
                })}
            </div>}
        </>
    )
}