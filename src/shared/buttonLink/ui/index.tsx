import styles from './index.module.scss';

interface ButtonLinkProps {
    text: string,
    onClick: () => void
}

function ButtonLink({ text, onClick }: ButtonLinkProps) {
    return (
        <button className={styles.btn} onClick={onClick}>{text}</button>
    )
}

export default ButtonLink;