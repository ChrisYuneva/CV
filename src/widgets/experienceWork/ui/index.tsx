import ExperienceCase from 'shared/experienceCase/ui';
import Title from 'shared/title/ui';
import { workItems } from '../constants';
import styles from './index.module.scss';

function ExperienceWork() {
  return (
    <section className={`${styles.wrapper} container`}>
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
    </section>
  );
}

export default ExperienceWork;
