import List from 'shared/list/ui';
import TitleWithTime from 'shared/titleWithTime/ui';
import styles from './index.module.scss';

interface ExperienceCaseProps {
    name: string,
    time: string,
    description: string,
    stack?: string[],
    listItems?: string[]
}

function ExperienceCase({ name, time, stack, description, listItems }: ExperienceCaseProps) {
  return (
    <div className={styles.wrapper}>
      <TitleWithTime
        name={name}
        time={time}
      />
      <span className={styles.text}>{description}</span>
      {
        stack && <span className={styles.text}>Стек технологий: {stack.join(' / ')}.</span>
      }
      
      {
        listItems && 
        <>
          <span className={styles.text}>Обязанности:</span>
          <List items={listItems} />
        </>
      }
      
    </div>
  );
}

export default ExperienceCase;
