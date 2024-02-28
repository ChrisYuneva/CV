import styles from './index.module.scss';

interface TitleCardProps {
    title: string,
}

function TitleCard({ title }: TitleCardProps) {
    return (
        <span className={styles.title}>
            {title}
        </span>
    )
}

export default TitleCard;