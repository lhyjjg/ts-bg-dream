import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/src/app/styles/content.module.css";

interface GroupType {
  img: string;
  explanation: string;
}

interface ContentProps {
  dataList: GroupType[];
  title: string;
}

export default function Content({ dataList, title }: ContentProps) {
  SwiperCore.use([Scrollbar]);
  const swiperRef = useRef<SwiperCore>();

  return (
    <div className={styles.group}>
      <h3 className={styles.title}>{title}</h3>
      <Swiper
        className={styles.swiper_container}
        loop
        slidesPerView={"auto"}
        centeredSlides={true}
      >
        {dataList?.map((item, index) => (
          <SwiperSlide key={index} className={styles.swiper_slide}>
            <img src={item.img} alt={item.explanation} />
            <div>
              <h4 className={styles.explanation}>{item.explanation}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
