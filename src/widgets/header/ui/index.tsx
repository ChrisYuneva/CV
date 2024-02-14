import DragContainer from 'features/dragContainer/ui';
import Navigation from 'features/navigation/ui';
import styles from './index.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.titleWrap}>
            <h1 className={styles.title}>Кристина Юнева</h1>
            </div>
            <Navigation />
            <DragContainer />
        </header>
    )
}

export default Header;