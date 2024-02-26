import styles from './index.module.scss';

interface LinkNavProps {
    text: string,
    scrollTo: () => void
}

function LinkNav({ text, scrollTo }: LinkNavProps) {
    return (
        <a className={styles.link} onClick={scrollTo}>{text}</a>
    )
}

export default LinkNav;