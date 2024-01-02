"use clinet";

import { useRouter } from "next/navigation";
import styles from "@/src/app/styles/header.module.css";
import Link from "next/link";
import HistoryBackIcon from "@/public/assets/icons/ico_history_back.svg";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header className={styles.topArea}>
        <Link
          href="/"
          onClick={() => router.back()}
          className={styles.historyBack}
        >
          <HistoryBackIcon color={"black"} width={"24px"} height={"24px"} />
        </Link>
      </header>
    </>
  );
}
