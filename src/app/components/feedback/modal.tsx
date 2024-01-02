import styles from "./modal.module.css";

interface Props {
  closeModal: any;
}

export default function Modal({ closeModal }: Props) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <h3>
          소중한 의견
          <br />
          감사합니다!
        </h3>
        <div>
          <p>3분이면 돼요, 좀 더 자세한 의견을 들려주실 수 있을까요?</p>
        </div>
        <div className={styles.modalFooter}>
          <a onClick={() => closeModal(false)}>좋아요</a>
          <a onClick={() => closeModal(false)}>다음에요</a>
        </div>
      </div>
    </div>
  );
}
