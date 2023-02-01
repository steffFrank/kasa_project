import styles from "./hostContainer.component.module.scss";
import { Stars } from "../stars/stars.component";
import { Host } from "../host/host.component";


export const HostContainer = ({rating, name, picture}) => {
    return (
       <div className={styles.container}> 
            <Stars rating={rating}/>
            <Host name={name} picture={picture} />
        </div>  
    )
}