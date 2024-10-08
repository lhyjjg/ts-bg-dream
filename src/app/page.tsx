"use client";

import Header from "@/src/app/components/header/index";
import Visual from "./components/visual";
import Content from "./components/contents/index";
import { group1, group2, group3 } from "@/public/assets/contents/group.js";
import Feedback from "./components/feedback";
import Greeting from "./components/greeting";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Visual />
      <Content dataList={group1} title="👒 따뜻한 봄볕이 그리울 때" />
      <Content dataList={group2} title="🏖 까맣게 태워도 좋아" />
      <Content dataList={group3} title="💼 나는야 차가운 도시의 여행자" />
      <Feedback />
      <Greeting />
      <Footer />
    </main>
  );
}
