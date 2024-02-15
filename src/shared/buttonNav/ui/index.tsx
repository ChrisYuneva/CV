import styles from './index.module.scss';

interface ButtonNavProps {
    text: string,
    onClick: () => void
}

function ButtonNav({ text, onClick }: ButtonNavProps) {
    return (
        <button className={styles.btn} onClick={onClick}>{text}</button>
    )
}

export default ButtonNav;