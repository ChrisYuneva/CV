import styles from './index.module.scss';

interface TitleWithTimeProps {
    name: string,
    time: string
}

function TitleWithTime({ name, time }: TitleWithTimeProps) {
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>{name}</span>
            <span className={styles.time}>{time}</span>
        </div>
    )
}

export default TitleWithTime;