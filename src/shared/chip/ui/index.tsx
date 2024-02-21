import styles from './styles.module.scss';

interface ChipProps {
    imgSrc: string,
    name: string
}

function Chip({ imgSrc, name }: ChipProps) {
    return (
        <div className={styles.chip}>
            <img src={imgSrc} alt='Icon' />
            <span className={styles.name}>{name}</span>
        </div>
    )
}

export default Chip;
