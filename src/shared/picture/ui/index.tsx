import dots from 'assets/icons/dots.svg';
import figure from 'assets/icons/figure.svg';
import square from 'assets/icons/square.svg';
import squareBig from 'assets/icons/squareBig.svg';
import styles from './index.module.scss';

function Picture() {
    return (
        <div className={styles.wrapper}>
            <img src={dots} alt='Dots' className={styles.dotsTop}/>
            <img src={squareBig} alt='Square' className={styles.squareBig}/>
            <img src={dots} alt='Dots' className={styles.dots}/>
            <img src={figure} alt='Dots' className={styles.figure}/>
            <img src={square} alt='Dots' className={styles.square}/>
        </div>
    )
}

export default Picture;