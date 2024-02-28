import { Dispatch, SetStateAction, useEffect } from 'react';
import ModalContent from 'features/modalContent/ui';
import styles from './index.module.scss';

interface ModalProps {
    setOpen: Dispatch<SetStateAction<boolean>>;
    caseName: string
    // children: ReactNode;
}

function Modal({ setOpen, caseName }: ModalProps) {
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
                <div className={styles.modal}>
                    <ModalContent caseName={caseName} />
                </div>
            </div>
        </div>
    );
}

export default Modal;
