import Link from 'shared/link/ui';
import styles from './index.module.scss';

interface CaseCardInterface {
    imgSrc: string,
    title: string,
    stack: string[],
    description: string,
    hrefDemo: string,
    reverse: boolean,
    hrefCode?: string,
}

function CaseCard({ imgSrc, title, stack, description, hrefDemo, reverse, hrefCode }: CaseCardInterface) {
    return (
        <div className={`${styles.card} ${reverse ? styles.reverseCard : ''}`}>
            <img src={imgSrc} alt='Project' className={`${styles.img} ${reverse ? styles.reverseImg : ''}`} />
            <div className={styles.content}>
                <span className={styles.title}>{title}</span>
                <span className={styles.stack}>{stack.join(' / ')}</span>
                <span className={styles.description}>{description}</span>
                <div className={styles.links}>
                    <Link href={hrefDemo} state='live'/>
                    {
                        hrefCode && <Link href={hrefCode} state='code'/> 
                    }
                </div>
            </div>
            {/* <div className={styles.stack}>
                <span>{stack.join(' / ')}</span>
            </div>
            <div className={styles.content}>
                <span className={styles.title}>{title}</span>
                <span className={styles.description}>{description}</span>
                <Link href={href} />
            </div> */}
        </div>
    )
}

export default CaseCard;