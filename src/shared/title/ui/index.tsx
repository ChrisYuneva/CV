import styles from './index.module.scss';

interface TitleProps {
    titleText: string,
    classNameLine?: string
}

function Title({ titleText, classNameLine }: TitleProps) {
    return (
        <div className={styles.title}>
            <span className={styles.lattice}>#</span>
            <span className={styles.text}>{ titleText }</span>
            <div className={`${styles.line} ${classNameLine}`}></div>
        </div>
    )
}

export default Title;