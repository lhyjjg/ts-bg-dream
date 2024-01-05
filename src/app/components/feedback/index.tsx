import styles from "@/src/app/styles/feedback.module.css";
import Modal from "./modal";
import { useState, useEffect } from "react";

export default function Feedback() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [hideIcon, setHideIcon] = useState(false);
  const [hideSection, setHideSection] = useState(false);

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

  if (hideSection) return null;

  const isGoodSelected = selectedOption === "good";
  const isNoGoodSelected = selectedOption === "nogood";

  const renderFeedbackOption = (option: string, text: string) => (
    <li
      onClick={() => openModal(option)}
      className={hideIcon ? styles.hideIcon : ""}
    >
      <div className={styles[`${option}Icon`]}></div>
      <div>{text}</div>
    </li>
  );

  const openModal = (option: string) => {
    setSelectedOption(option);
    setModalOpen(true);
    setHideIcon(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setHideIcon(true);
  };

  return (
    <section className={styles.feedbackContainer}>
      <h4 className={hideIcon ? "" : styles.hide}>이 콘텐츠는 어때요?</h4>
      <h4 className={hideIcon ? `${styles.hide} ${styles.thanks}` : ""}>
        소중한 의견 감사합니다 💛
      </h4>
      <ul
        className={
          hideIcon || isGoodSelected || isNoGoodSelected ? styles.after : ""
        }
      >
        {isGoodSelected && renderFeedbackOption("good", "좋았어요")}
        {isNoGoodSelected && renderFeedbackOption("bad", "별로에요")}
        {!isGoodSelected && !isNoGoodSelected && (
          <>
            {renderFeedbackOption("good", "좋았어요")}
            {renderFeedbackOption("bad", "별로에요")}
          </>
        )}
      </ul>
      {modalOpen && <Modal closeModal={closeModal} />}
    </section>
  );
}
