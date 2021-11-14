import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import joy from "../components/img/joy.svg";
import happy from "../components/img/happy.svg";
import SvgImg from "../components/SvgImg";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setAnimation();
  });

  const setAnimation = () => {
    gsap.to("#joy", {
      duration: 2,
      ease: "bounce",
      scale: 1.5,
      delay: 1,
      scrollTrigger: {
        trigger: "#joy",
        start: "top 40%", //開始時のトリガー条件
        end: "bottom 40%", //終了時のトリガー条件
        scrub: true,
        markers: true, // マーカー表示
      },
    });
    gsap.to("#happy", {
      duration: 2,
      ease: "bounce",
      scale: 1.5,
      delay: 1,
      scrollTrigger: {
        trigger: "#happy",
        start: "top 40%", //開始時のトリガー条件
        end: "bottom 40%", //終了時のトリガー条件
        scrub: true,
        markers: true, // マーカー表示
      },
    });
  };
  return (
    <div>
      <Header />
      <main style={{ textAlign: "center", padding: "100px" }}>
        <p>日々の中であった嬉しいこと</p>
        <img src={joy} alt="joy" style={{ padding: "200px" }} id="joy" />
        <p>自慢したいこと</p>
        <img src={happy} alt="happy" style={{ padding: "200px" }} id="happy" />
        <p>
          YATTA!はやった！と思える嬉しかったことをカードにしてTwitterでつぶやくことができるアプリです。
        </p>
        <path
          d="M477.52,304.69,467,294.15a6.763,6.763,0,0,1,9.57-9.56h0l1,1,1-1a6.76,6.76,0,0,1,9.56,9.56Z"
          fill="#e50132"
        />
        <path
          d="M538.76,304.69l-10.54-10.54a6.763,6.763,0,0,1,9.57-9.56l1,1,1-1a6.76,6.76,0,0,1,9.56,9.56Z"
          fill="#e50132"
        />
        <path
          d="M600,304.69l-10.54-10.54a6.763,6.763,0,0,1,9.57-9.56h0l1,1,1-1a6.763,6.763,0,1,1,9.57,9.56h0Z"
          fill="#e50132"
        />
        <p>皆で嬉しかったことをシェアしてHappyになりましょう</p>　
        <SvgImg />
        　　
      </main>
    </div>
  );
};

export default About;
