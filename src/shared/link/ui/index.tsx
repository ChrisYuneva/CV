import styles from './index.module.scss';

interface LinkProps {
    href?: string,
    state: 'live' | 'code'
}

function Link({ href, state }: LinkProps) {
    return (
        <a 
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
        >
            {
                state === 'live' ? 'Live |>' : 'Code <~>'
            }
        </a>
    )
}

export default Link;