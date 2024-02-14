import img from 'assets/images/face3.png';
import { useState } from 'react';
import styles from './index.module.scss';

interface Actions {
    cake: number,
    potion: number
}

function Avatar() {
  const [className, setClassName] = useState(styles.avatar);
  const [classImg, setClassImg] = useState(styles.img);
  const [actions, setActions] = useState<Actions>({
    cake: 0,
    potion: 0
  });

  function handleOnDragOver(e: React.DragEvent<HTMLElement>) {
    e.preventDefault();
    setClassName(`${className} ${styles.shadow}`);
  }

  function handleOnDrop(e: React.DragEvent<HTMLElement>) {
    const dragElemId = e.dataTransfer.getData('id');
    if(dragElemId==='cake' && actions[dragElemId]===0) {
        setClassImg(styles.middleImg);
        setActions({...actions, [dragElemId]: 1});
    }
    if(dragElemId==='cake' && actions[dragElemId]===1) {
        setClassImg(styles.bigImg);
        setActions({...actions, [dragElemId]: 2});
    }
    if(dragElemId==='eraser') {
        setClassImg(styles.img);
        setActions({
            cake: 0,
            potion: 0
        })
    }
    
    setClassName(styles.avatar);
  }

  return (
    <section
      className={className}
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}
    >
      <img src={img} alt='face' className={classImg} />
    </section>
  );
}

export default Avatar;
