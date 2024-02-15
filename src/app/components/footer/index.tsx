import styles from "./footer.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Footer() {
  // window is not defined 에러 조건 추가
  const currentURL = typeof window !== 'undefined' ? window.location.href : "";
  
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
