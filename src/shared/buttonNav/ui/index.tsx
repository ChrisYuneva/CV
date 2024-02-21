import styles from './index.module.scss';

interface ButtonNavProps {
    text: string,
    scrollTo: () => void
}

function ButtonNav({ text, scrollTo }: ButtonNavProps) {
    return (
        <button className={styles.btn} onClick={scrollTo}>{text}</button>
    )
}

export default ButtonNav;