import { useEffect, useState } from 'react';
import arrow from 'assets/icons/arrow.svg';
import styles from './index.module.scss';

interface SliderProps {
    images: string[]
}

function Slider({ images }: SliderProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleChangeActiveImg(previous: boolean) {
        if(previous) {
            if(activeIndex!==images.length-1) {
                setActiveIndex((prev) => prev+1);
            }
            else {
                setActiveIndex(0);
            }
        }
        else {
            if(activeIndex===0) {
                setActiveIndex(images.length-1);
            }
            else {
                setActiveIndex((prev) => prev-1);
            }
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(activeIndex<images.length-1) {
                setActiveIndex((prev) => prev+1);
            }
            else {
                setActiveIndex(0);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.slider}>
                <img src={arrow} alt='Arrow icon' onClick={() => handleChangeActiveImg(false)} className={styles.arrow}/>
                <img 
                    src={images[activeIndex]} 
                    className={styles.img} 
                    alt='Image' 
                    // style={{
                    //     transform: `translate(-${activeIndex * 100}%)`,
                    // }}
                />
                <img src={arrow} alt='Arrow icon' className={`${styles.arrow} ${styles.arrowNext}`} onClick={() => handleChangeActiveImg(true)} />
            </div>
            <div className={styles.dots}>
                {
                    images.map((_, i) => (
                        <div className={`${styles.dot} ${i===activeIndex ? styles.dotActive : ''}`} key={i}></div>
                    ))
                }
            </div>
        </div>
    )
}

export default Slider;