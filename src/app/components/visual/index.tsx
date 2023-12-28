import styles from "@/src/app/styles/visual.module.css";

export default function Visual() {
  return (
    <>
      <section className={styles.visual}>
        <div className={styles.main_txt}>
          <h2>
            핸드폰으로
            <br />
            랜선여행
          </h2>
          <h3>떠나고 싶은 곳을 골라 배경화면으로.</h3>
        </div>
      </section>
    </>
  );
}
