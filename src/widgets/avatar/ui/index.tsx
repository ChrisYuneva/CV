import { useEffect, useState } from 'react';
import img from 'assets/images/face3.png';
import InfiniteContainer from 'features/infiniteContainer/ui';
import InfinitеText from 'features/infiniteText/ui';
import { infiniteTextsBig, infiniteTextsSmall } from '../constants';
import styles from './index.module.scss';
interface Actions {
  cake: number;
  potion: number;
}

function Avatar() {
  const [classSection, setClassSection] = useState(styles.avatar);
  const [classImg, setClassImg] = useState(styles.imgWrap);
  const [actions, setActions] = useState<Actions>({
    cake: 0,
    potion: 0,
  });
  const [actionsCounter, setActionsCounter] = useState(0);

  function handleOnDragOver(e: React.DragEvent<HTMLElement>) {
    e.preventDefault();
    setClassSection(`${classSection} ${styles.shadow}`);
  }

  function handleOnDragLeave() {
    setClassSection(styles.avatar);
  }

  function changeActionValue(id: string) {
    const actionValue = actions[id as keyof Actions]; 
    setActions({...actions, [id]: actionValue===2 ? actionValue : actionValue+1});
    if(id==='cake') {
      setClassImg(actionValue ? styles.bigImg : styles.middleImg);
    }
  }

  function handleOnDrop(e: React.DragEvent<HTMLElement>) {
    const dragElemId = e.dataTransfer.getData('id');
    if(dragElemId) {
      changeActionValue(dragElemId);
    }
    if (dragElemId === 'eraser') {
      setClassImg(styles.imgWrap);
      setActions({
        cake: 0,
        potion: 0,
      });
    }

    setClassSection(styles.avatar);
  }

  function changeActionsCounter() {
    let count = 0;
    for(const key in actions) { 
      count+=actions[key as keyof Actions];
      setActionsCounter(count);
    }
  }

  useEffect(() => {
    changeActionsCounter();
  }, [actions])

  return (
    <section
      className={classSection}
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}
      onDragLeave={handleOnDragLeave}
      draggable={false}
    >
      <div className={styles.test}>
        <h1 className={styles.test2}>lorenm ispim resvf fgbgd</h1>
      </div>
      {
        (actions.cake>0 || actions.potion>0) && <div className={styles.counter}>
        {
          Array.from(Array(actionsCounter).keys()).map((item) => (
            <div key={item} className={styles.count}></div>
          ))
        }
      </div>
      }
      {actions.potion ? (
        <InfiniteContainer
          infiniteText={
            (actions.potion === 1 ? infiniteTextsSmall : infiniteTextsBig).map((item) => (
              <InfinitеText
                speed={item.speed}
                direction={item.direction}
                key={item.text}
              >
                <span className={`${styles.textShadow} ${styles[item.className]}`}>{item.text}</span>
              </InfinitеText>
          ))}
        />
      ): null}
      <div className={classImg}>
        <img src={img} alt='face' className={styles.img} draggable={false} />
      </div>
    </section>
  );
}

export default Avatar;
