import { Dispatch, SetStateAction, useEffect } from 'react';
import styles from './index.module.scss';

interface ModalProps {
    setOpen: Dispatch<SetStateAction<boolean>>;
    // children: ReactNode;
}

function Modal({ setOpen }: ModalProps) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset'
        };
    }, []);

    const handleSetOpen = () => {
        setOpen(false);
    }

    return (
        <div className={styles.modalWrapper}>
            <div className={styles.background} onClick={handleSetOpen}/>
            <div className={styles.centered}>
                {/* <div className={styles.modal}>{children}</div> */}
            </div>
        </div>
    );
}

export default Modal;
