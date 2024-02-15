import ButtonNav from 'shared/buttonNav/ui';
import { navItems } from '../constants/constants';
import styles from './index.module.scss';

function Navigation() {
    return (
        <nav className={styles.nav}>
            {
                navItems.map((item) => 
                    <ButtonNav 
                        text={item.text} 
                        key={item.text}
                        onClick={() => console.log(item.path)}
                    />)
            }
        </nav>
    )
}

export default Navigation;