import DragContainer from 'features/dragContainer/ui';
import Navigation from 'features/navigation/ui';
import styles from './index.module.scss';
interface HeaderProps {
    scrollTo: (num: number) => void
}

function Header({ scrollTo }: HeaderProps) {

    return (
        <header className={styles.header}>
            <div className={styles.titleWrap}>
            <h1 className={styles.title}>Кристина Юнева</h1>
            </div>
            <Navigation scrollTo={scrollTo}/>
            <DragContainer />
        </header>
    )
}

export default Header;