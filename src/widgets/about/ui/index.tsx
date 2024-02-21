import { forwardRef } from 'react';
import Education from 'shared/education/ui';
import Title from 'shared/title/ui';
import { aboutDescription, educactionItems } from '../constants';
import styles from './index.module.scss';

const About = forwardRef<HTMLDivElement>(function About(_, ref) {
  return (
    <section className={`${styles.wrapper} container`} ref={ref}>
      <Title titleText='о себе' classNameLine={styles.line} />
      <span className={styles.description}>{aboutDescription}</span>
      <Title titleText='образование' classNameLine={styles.line} />
      <>
        {educactionItems.map((item) => (
          <Education
            name={item.name}
            time={item.time}
            description={item.description}
            key={item.time}
          />
        ))}
      </>
    </section>
  );
});

export default About;
