import CardContainer from 'shared/cardContainer/ui';
import Picture from 'shared/picture/ui';
import Title from 'shared/title/ui';
import styles from './index.module.scss';

function Skills() {
  return (
    <section className={`${styles.skills} container`}>
      <Title titleText='навыки' classNameLine={styles.line} />
      <div className={styles.content}>
      <Picture />
      <CardContainer />
      </div>
    </section>
  );
}

export default Skills;
