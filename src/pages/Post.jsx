import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import firebase from "../firebase";
import { Button } from "antd";
import { TwitterOutlined } from "@ant-design/icons";
import Header from "../components/Header";

const Post = () => {
  const { postId: paramsId } = useParams();
  const [post, setPost] = useState("");
  const [twUrl, setTwUrl] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("cards")
      .where("postId", "==", paramsId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            url: doc.data().url,
            postId: doc.data().postId,
            created_at: doc.data().created_at,
          };
          setPost(data);
          setTwUrl(
            `https://twitter.com/intent/tweet?text=YATTA%EF%BC%81+%E5%AC%89%E3%81%97%E3%81%84%E3%81%93%E3%81%A8%E3%80%81%E3%82%B7%E3%82%A7%E3%82%A2%0D%0A&url=https://yatta-81a6f.web.app/s/${data.postId}&hashtags=YATTA%EF%BC%81%0D%0A&via=MegEngineer`
          );
        });
      });
  }, []);

  return (
    <div>
      <Header />
      <div style={{ textAlign: "center", background: "#fffff2" }}>
        <div>
          <img src={post.url} alt="Card image cap" />
        </div>
        <container>
          <div>
            <Link to={{ pathname: twUrl }} target="_blank">
              <Button shape="round" type="primary" icon={<TwitterOutlined />}>
                Twitterで共有する
              </Button>
            </Link>
          </div>
          <div>
            {" "}
            <Link to="/">
              <Button shape="round">もどる</Button>
            </Link>
          </div>
        </container>
      </div>
    </div>
  );
};

export default Post;
