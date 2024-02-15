import Link from 'shared/link/ui';
import styles from './index.module.scss';

interface CaseCardInterface {
    imgSrc: string,
    title: string,
    description: string,
    stack: string[],
    href: string
}

function CaseCard({ imgSrc, title, stack, description, href }: CaseCardInterface) {
    return (
        <div className={styles.card}>
            <img src={imgSrc} alt='Project' className={styles.img}/>
            <div className={styles.stack}>
                <span>{stack.join(' / ')}</span>
            </div>
            <div className={styles.content}>
                <span className={styles.title}>{title}</span>
                <span className={styles.description}>{description}</span>
                <Link href={href} />
            </div>
        </div>
    )
}

export default CaseCard;