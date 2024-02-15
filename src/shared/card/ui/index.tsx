import styles from './index.module.scss';

interface CardProps {
    title: string,
    className: string,
    children: React.ReactNode
}

function Card({ title, className, children }: CardProps) {
    return (
        <div className={`${styles.card} ${className}`}>
            <span className={styles.title}>{title}</span>
            {children}
        </div>
    )
}

export default Card;