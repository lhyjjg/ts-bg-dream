import styles from "@/src/app/styles/greeting.module.css";

export default function Greeting() {
  return (
    <section className={styles.greeting}>
      <div className={styles.greetingContents}>
        <h3>
          올라!
          <br />
          트립스토어로부터.
        </h3>
        <p>
          어디로든 떠나고 싶은 마음이 더욱 간절해지는 요즘이에요. 오늘 하루
          조금이라도 산뜻한 기분을 느꼈으면 하는 바램으로 좋은 사진들을
          모아봤어요.
          <br />
          <br />
          다시 설레는 마음으로 비행기에 오르게 될 그 날까지 트립스토어는 누구나
          여행을 쉽게 떠날 수 있도록 단단히 준비해 놓고 있을게요.
          <br />
          <br />
          모두 안전하게 지내세요!
        </p>
        <a href="https://www.tripstore.kr/">트립스토어 바로가기</a>
      </div>
    </section>
  );
}
