import styles from './index.module.scss';

interface LinkProps {
    href: string
}

function Link({ href }: LinkProps) {
    return (
        <a 
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
        >
            Live &lt;~&gt;   
        </a>
    )
}

export default Link;