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
      <span>{description}</span>
      {
        stack && <span>Стек технологий: {stack.join(' / ')}.</span>
      }
      
      {
        listItems && 
        <>
          <span>Обязанности:</span>
          <List items={listItems} />
        </>
      }
      
    </div>
  );
}

export default ExperienceCase;
