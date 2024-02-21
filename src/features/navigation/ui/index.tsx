import ButtonNav from 'shared/buttonNav/ui';
import { navItems } from '../constants/constants';
import styles from './index.module.scss';

interface NavigationProps {
    scrollTo: (num: number) => void
}

function Navigation({ scrollTo }: NavigationProps) {
    return (
        <nav className={styles.nav}>
            {
                navItems.map((item) => 
                    <ButtonNav 
                        text={item.text} 
                        key={item.text}
                        scrollTo={() => scrollTo(item.refNum)}
                    />)
            }
        </nav>
    )
}

export default Navigation;