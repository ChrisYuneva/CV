import { forwardRef } from 'react';
import ExperienceCase from 'shared/experienceCase/ui';
import Title from 'shared/title/ui';
import { workItems } from '../constants';
import styles from './index.module.scss';

const ExperienceWork = forwardRef<HTMLDivElement>(function ExperienceWork(_, ref) {
  return (
    <section className={`${styles.wrapper} container`} ref={ref}>
      <Title titleText='опыт работы' classNameLine={styles.line} />
      <div className={styles.cases}>
        {workItems.map((item) => (
          <ExperienceCase
            name={item.name}
            time={item.time}
            description={item.description}
            stack={item.stack}
            listItems={item.listItems}
            key={item.name}
          />
        ))}
      </div>
      <div className={styles.back}></div>
    </section>
  );
});

export default ExperienceWork;
