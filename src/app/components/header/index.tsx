"use clinet";

import { useRouter } from "next/navigation";
import styles from "./header.module.css";
import HistoryBackIcon from "@/public/assets/icons/ico_history_back.svg";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header className={styles.topArea}>
        <button onClick={router.back} className={styles.historyBack}>
          <HistoryBackIcon color={"black"} width={"24px"} height={"24px"} />
        </button>
      </header>
    </>
  );
}
