import { forwardRef } from 'react';
import dots from 'assets/icons/dots.svg';
import figure from 'assets/icons/figure.svg';
import square from 'assets/icons/square.svg';
import CardContainer from 'shared/cardContainer/ui';
import Chip from 'shared/chip/ui';
import Picture from 'shared/picture/ui';
import Title from 'shared/title/ui';
import { skills } from '../constants';
import styles from './index.module.scss';

const Skills = forwardRef<HTMLDivElement>(function Skills(_, ref) {
  return (
    <section className={`${styles.skills} container`} ref={ref}>
      <Title titleText='навыки' classNameLine={styles.line} />
      <div className={styles.test}>      
        <div className={styles.chipWrapper}>
        {
          skills.map((item) => <Chip imgSrc={item.imgSrc} name={item.name} key={item.name}/>)
        }
        
      </div>

      </div>

      <img src={dots} alt='Dots' className={styles.dots}/>
        <img src={figure} alt='Dots' className={styles.figure}/>
        <img src={square} alt='Dots' className={styles.square}/>
      {/* <div className={styles.content}>
      <Picture />
      <CardContainer />
      </div> */}
    </section>
  );
})

export default Skills;
