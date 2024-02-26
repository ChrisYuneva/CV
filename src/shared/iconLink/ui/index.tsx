import styles from './index.module.scss';

interface IconLinkProps {
    imgSrc: string,
    href: string
}

function IconLink({ imgSrc, href }: IconLinkProps) {
    return (
        <a 
            href={href} 
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
        >
            <img src={imgSrc} alt="Icon"/>
        </a>
    )
}

export default IconLink;