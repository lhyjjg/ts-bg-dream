import styles from "./footer.module.css";

export default function Footer() {
  const handleCopyClipBoard = async () => {
    try {
      const currentURL = window.location.href;
      await navigator.clipboard.writeText(currentURL);

      alert("복사되었습니다.");
    } catch (error) {
      alert("다시 시도해주세요.");
    }
  };

  return (
    <section className={styles.greeting}>
      <div className={styles.greetingContainer}>
        <div className={styles.clipboardIcon} onClick={handleCopyClipBoard} />
        <div className={styles.kakaoIcon} />
      </div>
    </section>
  );
}
