import LinkNav from 'shared/linkNav/ui';
import styles from './index.module.scss';

interface NavItem {
    text: string,
    refNum: number
}

interface NavigationProps {
    items: NavItem[],
    scrollTo: (num: number) => void
}

function Navigation({ items, scrollTo }: NavigationProps) {
    return (
        <nav className={styles.nav}>
            {
                items.map((item) => 
                    <LinkNav 
                        text={item.text} 
                        key={item.text}
                        scrollTo={() => scrollTo(item.refNum)}
                    />)
            }
        </nav>
    )
}

export default Navigation;