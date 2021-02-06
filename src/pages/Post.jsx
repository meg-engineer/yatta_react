import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import firebase from "../firebase";
import Header from "../components/Header";

const Post = () => {
  const { post_id: paramsId } = useParams();
  const [post, setPost] = useState("");
  const [twUrl, setTwUrl] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("cards")
      .where("post_id", "==", paramsId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            url: doc.data().url,
            post_id: doc.data().post_id,
            created_at: doc.data().created_at,
          };
          setPost(data);

          setTwUrl(
            `https://twitter.com/intent/tweet?text=YATTA%EF%BC%81+%E5%AC%89%E3%81%97%E3%81%84%E3%81%93%E3%81%A8%E3%80%81%E3%82%B7%E3%82%A7%E3%82%A2%0D%0A&url=https://yatta.tokyo/s/${post.post_id}&hashtags=YATTA%EF%BC%81%0D%0A&via=MegEngineer`
          );
        });
      });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div>
          <img src={post.url} alt="Card image cap" />
        </div>
        <div>
          <Link to={twUrl} target="_blank">
            twitterで共有する
          </Link>
          <Link to="/">もどる</Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
