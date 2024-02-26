import { forwardRef } from "react";
import IconLink from "shared/iconLink/ui";
import Title from "shared/title/ui";
import { iconsLinkItems } from "../constants";
import styles from './index.module.scss';

const Contacts = forwardRef<HTMLDivElement>(function Contacts(_, ref) {
    return (
        <footer className={`${styles.contacts} container`} ref={ref}>
            <Title titleText="контакты" />
            <div className={styles.links}>
                {
                    iconsLinkItems.map((item, i) => (
                        <>
                            <IconLink imgSrc={item.imgSrc} href={item.href} key={item.href}/>
                            {
                                i !== iconsLinkItems.length-1 && <div className={styles.line}></div>
                            }
                        </>
                    ))
                }
            </div>
        </footer>
    )
});

export default Contacts;