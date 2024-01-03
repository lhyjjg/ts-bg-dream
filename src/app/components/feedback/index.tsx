import styles from "@/src/app/styles/feedback.module.css";
import Modal from "./modal";
import { useState, useEffect } from "react";

export default function Feedback() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [hideIcon, setHideIcon] = useState(false);
  const [hideSection, setHideSection] = useState(false);

  const openModal = (option: string) => {
    setSelectedOption(option);
    setModalOpen(true);
    setHideIcon(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setHideIcon(true);
  };

  useEffect(() => {
    const feedbackTimeout = setTimeout(() => {
      if (hideIcon) {
        setHideIcon(true);

        const sectionTimeout = setTimeout(() => {
          setHideSection(true);
        }, 1000);

        return () => {
          clearTimeout(sectionTimeout);
        };
      }
    }, 3000);

    return () => {
      clearTimeout(feedbackTimeout);
    };
  }, [hideIcon]);

  return (
    <>
      {!hideSection && (
        <section className={styles.feedbackContainer}>
          <h4 className={hideIcon ? "" : styles.hide}>이 콘텐츠는 어때요?</h4>
          <h4 className={hideIcon ? `${styles.hide} ${styles.thanks}` : ""}>
            소중한 의견 감사합니다 💛
          </h4>
          {selectedOption === "good" ? (
            <ul className={hideIcon ? styles.iconHide : styles.after}>
              <li>
                <div className={styles.goodIcon}></div>
                <div>좋았어요</div>
              </li>
            </ul>
          ) : selectedOption === "nogood" ? (
            <ul className={hideIcon ? styles.iconHide : styles.after}>
              <li>
                <div className={styles.goodIcon}></div>
                <div>별로에요</div>
              </li>
            </ul>
          ) : (
            <ul>
              <li onClick={() => openModal("good")}>
                <div className={styles.goodIcon}></div>
                <div>좋았어요</div>
              </li>
              <li onClick={() => openModal("nogood")}>
                <div className={styles.badIcon}></div>
                <div>별로에요</div>
              </li>
            </ul>
          )}
          {modalOpen && <Modal closeModal={closeModal} />}
        </section>
      )}
    </>
  );
}
