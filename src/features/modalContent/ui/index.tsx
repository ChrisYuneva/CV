import Slider from 'features/slider/ui';
import Link from 'shared/link/ui';
import TitleCard from 'shared/titleCard/ui';
import { ftp, kut } from '../constants';
import styles from './index.module.scss';

interface ModalContentProps {
  caseName: string
}

function ModalContent({ caseName }: ModalContentProps) {
  console.log(caseName)
  function currentCase() {
    switch(caseName) {
      case 'FTP': 
        return ftp;
      case 'KUT': 
        return kut;
      default:
        return ftp;
    }
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.titleWrap}>
        <TitleCard title={currentCase().name} />
        <span className={styles.title}>— каталог бесплатных игр с подробным описанием</span>
      </div>
      <div className={styles.contentWrap}>
        <Slider images={currentCase().imgSrc}/>
        <div className={styles.content}>
        <span className={styles.text}>
          Стек технологий: {currentCase().stack}
        </span>
        <span className={styles.text}>
          {currentCase().firstDes}
        </span>
        <span className={styles.text}>
          {currentCase().secondDes}
        </span>
          <div className={styles.btnWrap}>
            <Link state='live' href={currentCase().demoHref}/>
            {
              currentCase().codeHref && <Link state='code' href={currentCase().codeHref} />
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModalContent;
