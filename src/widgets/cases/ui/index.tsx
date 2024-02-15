
import CaseCard from 'shared/caseCard/ui';
import Title from 'shared/title/ui';
import { cases } from '../constants';
import styles from './index.module.scss';

function Cases() {
  return (
    <div className={`${styles.cases} container`}>
      <Title titleText='кейсы' classNameLine={styles.line} />
      <div className={styles.cardsWrap}>
        {
            cases.map((item) => (
                <CaseCard
                    imgSrc={item.imgSrc}
                    title={item.title}
                    description={item.description}
                    stack={item.stack}
                    href={item.href}
                />
            ))
        }
      </div>
    </div>
  );
}

export default Cases;
