import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";
import { Input, Button } from "antd";
import Header from "../components/Header";
import SvgCard from "../components/SvgCard";
import SvgTitle from "../components/SvgTitle";
import SvgImg from "../components/SvgImg";
import Footer from "../components/Footer";

const Home = () => {
  const { TextArea } = Input;
  const history = useHistory();
  const svgCard = useRef(null);
  const [text, setText] = useState("ケーキもらった");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  //画像生成
  function svg2imageData(svgElement, successCallback, errorCallback) {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 500;
    const context = canvas.getContext("2d"); // 二次元グラフィックスのコンテキストを取得
    const image = new Image(); //新たな画像作成
    const svgData = new XMLSerializer().serializeToString(svgElement.current); //svgを文字列へ変換

    image.src =
      "data:image/svg+xml;charset=utf-8;base64," +
      btoa(unescape(encodeURIComponent(svgData)));
    image.onload = () => {
      context.drawImage(image, 0, 0, 800, 500);
      successCallback(canvas.toDataURL());
    };
    image.onerror = (e) => {
      errorCallback(e);
    };
  }

  //firebase function保存url用文字列作成
  function getUniqueStr(myStrong) {
    var strong = 1000;
    if (myStrong) strong = myStrong;
    return (
      new Date().getTime().toString(16) +
      Math.floor(strong * Math.random()).toString(16)
    );
  }

  //入力した文字列を分割してsvg上に表示
  function createMessage(e) {
    const data = e.target.value;
    setText(data.substring(0, 15));
    setText2(data.substring(15, 30));
    setText3(data.substring(30, 45));
    setText4(data.substring(45, 60));
  }

  //firebase Cloud Storageにアップロード、firestoreに保存
  async function createCard() {
    svg2imageData(svgCard, async (data) => {
      const sRef = firebase.storage().ref();
      var uuid = getUniqueStr();
      const fileRef = sRef.child(`${uuid}.png`);
      // Firebase Cloud Storageにアップロード
      await fileRef.putString(data, "data_url");
      const url = await fileRef.getDownloadURL();
      // Firestoreに保存
      const card = firebase.firestore().collection("cards");
      await card.add({
        url,
        text,
        postId: uuid,
        createdAt: new Date(),
      });
      setText("");
      setText2("");
      setText3("");
      setText4("");
      history.push(`/post/${uuid}`);
    });
  }

  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          background: "#fffff2",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "80%",
            height: "100%",
            margin: "0 auto",
            padding: "30% 0 0",
          }}
        >
          <svg
            ref={svgCard}
            width="800px"
            height="500px"
            viewBox="0 0 1200 630"
            style={{
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <g>
              <SvgCard />
              <g>
                <rect
                  width="1000"
                  height="500"
                  rx="17.23"
                  transform="translate(100 70)"
                  fill="#fff"
                />
                <SvgTitle />
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
                <SvgImg />
                <text
                  transform="translate(103.29 347.281)"
                  fill="black"
                  fontSize="29"
                  fontFamily="HiraginoSans-W5, Hiragino Sans"
                  letterSpacing="-0.002em"
                  wordBreak="normal"
                >
                  <tspan x="230" y="30">
                    {text}
                  </tspan>
                  <tspan x="230" y="70">
                    {text2}
                  </tspan>
                  <tspan x="230" y="110">
                    {text3}
                  </tspan>
                  <tspan x="230" y="150">
                    {text4}
                  </tspan>
                </text>
              </g>
            </g>
          </svg>
        </div>
        <div style={{ width: "50%" }}>
          <p>やった！</p>
          <div>
            <TextArea
              rows={4}
              showCount
              maxLength={100}
              minlength={1}
              style={{ width: "80%" }}
              required
              onChange={createMessage}
              placeholder="嬉しかったことをここに入力してね！"
            />
            <div>
              <Button size="large" shape="round" onClick={createCard}>
                作成する
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
