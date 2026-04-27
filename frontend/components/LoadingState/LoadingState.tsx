import styles from "./LoadingState.module.css";

interface ILoadingStateProps {
  text?: string;
}

const LoadingState: React.FC<ILoadingStateProps> = ({
  text = "Loading content",
}) => {
  return (
    <div className={styles.loadingStateWrapper}>
      <div className={styles.loadingState} role="status">
        <span className={styles.spinner} aria-hidden="true" />
        <span>{text}</span>
      </div>
    </div>
  );
};

export default LoadingState;
