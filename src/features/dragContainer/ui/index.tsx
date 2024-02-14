import DragIcon from "shared/dragIcon/ui";
import { dragIcons } from "../constants";
import styles from './index.module.scss';

function DragContainer() {
    return (
        <div className={styles.wrapper}>
        {
            dragIcons.map((item) => 
            <DragIcon src={item.src} id={item.id} key={item.id}/>)
        }
    </div>
    )
}

export default DragContainer;