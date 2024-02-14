import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './index.module.scss'

interface InfinitеTextProps {
    speed: number,
    direction: "right" | "left",
    children: React.ReactNode
}

function InfinitеText({ speed, direction, children }: InfinitеTextProps) {
    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    function resetAnimation() {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "false");
    
          setTimeout(() => {
            if (innerRef?.current) {
              innerRef.current.setAttribute("data-animate", "true");
            }
          }, 50);
        }
      }

    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return;

        const { width } = innerRef.current.getBoundingClientRect();

        const { width: parentWidth } = outerRef.current.getBoundingClientRect();

        const instanceWidth = width / innerRef.current.children.length;

        if (width < parentWidth + instanceWidth) {
            setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
        }

        resetAnimation();
  }, [looperInstances]);

    useEffect(() => {
        setupInstances();
    }, []);

    return (
        <div className={styles.looper} ref={outerRef}>
        <div className={styles.looper__innerList} ref={innerRef}>
          {[...Array(looperInstances)].map((_, i) => (
            <div
              key={i}
              className={styles.looper__listInstance}
              style={{
                animationDuration: `${speed}s`,
                animationDirection: direction === "right" ? "reverse" : "normal",
              }}
            >
              {children}
            </div>
          ))}
        </div>
      </div>
    )
}

export default InfinitеText;