import styles from './index.module.scss';

interface InfiniteContainerProps {
    infiniteText: React.ReactNode
}

function InfiniteContainer({ infiniteText }: InfiniteContainerProps) {
  return (
    <div className={styles.wrapper}>
        {
            infiniteText
        }
    </div>
  );
}

export default InfiniteContainer;
