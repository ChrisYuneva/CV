import { forwardRef } from 'react';
import CaseCard from 'shared/caseCard/ui';
import Title from 'shared/title/ui';
import { cases } from '../constants';
import styles from './index.module.scss';

const Cases = forwardRef<HTMLDivElement>(function Cases(_, ref) {
  return (
    <div className={`${styles.cases} container`} ref={ref}>
      <Title titleText='кейсы' classNameLine={styles.line} />
      {cases.map((item, i) => (
        <CaseCard
          imgSrc={item.imgSrc}
          title={item.title}
          stack={item.stack}
          description={item.description}
          hrefDemo={item.hrefDemo}
          reverse={i % 2 !== 0}
          hrefCode={item.hrefCode}
          key={item.title}
        />
      ))}
    </div>
  );
});

export default Cases;
