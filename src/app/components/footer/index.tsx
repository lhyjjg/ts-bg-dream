import styles from "./footer.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Footer() {
  const currentURL = window.location.href;
  const handleCopyClipBoard = async () => {
    try {
      alert("복사되었습니다.");
    } catch (error) {
      alert("다시 시도해주세요.");
    }
  };

  return (
    <section className={styles.greeting}>
      <div className={styles.greetingContainer}>
        <CopyToClipboard text={currentURL} onCopy={handleCopyClipBoard}>
          <div className={styles.clipboardIcon}></div>
        </CopyToClipboard>
        <div className={styles.kakaoIcon} />
      </div>
    </section>
  );
}
