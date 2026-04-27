import styles from "./ComingSoonBanner.module.css";

interface IComingSoonBannerProps {
  text?: string;
}
const ComingSoonBanner: React.FC<IComingSoonBannerProps> = ({ text }) => {
  return (
    <div className={styles.comingSoonBanner}>{text || "Coming Soon 🌟"}</div>
  );
};

export default ComingSoonBanner;
