import styles from './index.module.scss';

interface ListProps {
    items: string[]
}

function List({ items }: ListProps) {
    return (
        <ul>
            {
                items.map((item) => (
                    <li key={item} className={styles.list}>{item}</li>
                ))
            }
        </ul>
    )
}

export default List;