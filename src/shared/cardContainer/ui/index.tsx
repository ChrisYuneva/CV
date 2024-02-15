import Card from 'shared/card/ui';
import styles from './index.module.scss';

function CardContainer() {
  return (
    <div className={styles.cards}>
        <div className={styles.column}>
        <Card title='Languages' className={styles.languages}>
        <div className={styles.languagesContent}>
          <span>JavaScript</span>
          <span>TypeScript</span>
        </div>
      </Card>
      <Card title='Frameworks' className={styles.frameworks}>
        <div className={styles.frameworksContent}>
          <span>React</span>
          <span>Redux Toolkit</span>
          <span>Angular</span>
        </div>
      </Card>
      <Card title='Tools' className={styles.tools}>
        <div className={styles.toolsContent}>
          <span>Git</span>
          <span>Webpack</span>
          <span>Vite</span>
        </div>
      </Card>
        </div>
      
      <Card title='Other' className={styles.other}>
        <div className={styles.otherContent}>
          <span>HTML</span>
          <span>CSS</span>
          <span>Sass</span>
        </div>
      </Card>
    </div>
  );
}

export default CardContainer;
