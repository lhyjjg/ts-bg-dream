import styles from "@/src/app/styles/feedback.module.css";
import Modal from "./modal";
import { useState } from "react";

export default function Feedback() {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {!modalOpen && (
        <section className={styles.feedbackContainer}>
          <h4>이 콘텐츠는 어때요?</h4>
          <ul>
            <li onClick={() => setModalOpen(true)}>
              <div className={styles.goodIcon}></div>
              <div>좋았어요</div>
            </li>
            <li onClick={() => setModalOpen(true)}>
              <div className={styles.badIcon}></div>
              <div>별로에요</div>
            </li>
          </ul>
        </section>
      )}
      {modalOpen && <Modal modalClose={closeModal} />}
    </>
  );
}
