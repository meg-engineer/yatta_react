import React, { useState } from "react";
import Header from "../components/Header";
import SvgCard from "../components/SvgCard";
import SvgTitle from "../components/SvgTitle";
import SvgImg from "../components/SvgImg";

const Home = () => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  function createMessage(e) {
    const data = e.target.value;
    setText(data.substring(0, 15));
    setText2(data.substring(15, 30));
    setText3(data.substring(30, 45));
    setText4(data.substring(45, 60));
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
          // className="card-container"
          style={{
            position: "relative",
            width: "80%",
            height: "100%",
            margin: "0 auto",
            padding: "30% 0 0",
          }}
        >
          <svg
            width="800px"
            height="500px"
            viewBox="0 0 1200 630"
            // className="card-svg"
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
                {/* <path
                  d="M661.24,304.69l-10.53-10.54a6.76,6.76,0,0,1,9.56-9.56l1,1,1-1a6.763,6.763,0,1,1,9.57,9.56h0Z"
                  fill="#e50132"
                />
                <path
                  d="M722.48,304.69,712,294.15a6.76,6.76,0,0,1,9.56-9.56l1,1,1-1a6.763,6.763,0,1,1,9.57,9.56Z"
                  fill="#e50132"
                /> */}
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
        <div className="input-container" style={{ width: "50%" }}>
          <p>やった！</p>
          <div className="message-input">
            <textarea
              v-model="text"
              type="text"
              maxlength="100"
              minlength="1"
              required
              rows="4"
              className="textarea"
              style={{ width: "80%", padding: "0.625em", resize: "vertical" }}
              onChange={createMessage}
            ></textarea>
            <div class="create-button center">
              <button className="button-color" onClick={() => null}>
                作成する
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
