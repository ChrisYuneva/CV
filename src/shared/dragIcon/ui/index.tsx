import styles from './index.module.scss';

interface DragIconProps {
    src: string,
    id: string
}

function DragIcon({ src, id }: DragIconProps) {
    function onDragStart(e: React.DragEvent<HTMLImageElement>) {
        e.dataTransfer.setData('id', e.target.id);
    }

    return (
        <img 
            src={src} 
            alt="Drag icon" 
            className={styles.icon}
            id={id}
            draggable={true} 
            onDragStart={onDragStart}/>
    )
}

export default DragIcon;