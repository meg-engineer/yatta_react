const functions = require("firebase-functions");
const express = require("express"); //express.jsをインポート
const app = express(); //毎回行うような処理を毎回書くのがアホらしいから、面倒な処理をミドルウェア関数として、expressインスタンスに登録して自動実行させる
const admin = require("firebase-admin");

admin.initializeApp({});

const db = admin.firestore();

const url = "https://yatta-81a6f.web.app/post";
const siteName = "YATTA!";
const title = "YATTA!";
const metaDescription = "嬉しいこと、シェアしよう";
const ogDescription = "嬉しいこと、シェアしよう";
const ogImageWidth = 800;
const ogImageHeight = 500;
const fbAppid = "";
const twDescription = "嬉しいこと、シェアしよう";
const twSite = "https://yatta-81a6f.web.app/post/";
const twCreator = "";

const genHtml = (imageUrl, postId) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <meta name="description" content="${metaDescription}">
    <meta property="og:locale" content="ja_JP">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${title}">
    <meta property="og:siteName" content="${siteName}">
    <meta property="og:description" content="${ogDescription}">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:image:width" content="${ogImageWidth}">
    <meta property="og:image:height" content="${ogImageHeight}">
    <meta property="fb:app_id" content="${fbAppid}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${twDescription}">
    <meta name="twitter:image" content="${imageUrl}">
    <meta name="twitter:site" content="${twSite}${postId}">
    <meta name="twitter:creator" content="${twCreator}">
  </head>
  <body>
    <script>
      location.href = '${twSite}${postId}'; // クローラーにはメタタグを解釈させて、クライアントは作成した画像ページに飛ばす
    </script>
  </body>
</html>
`;

//クライアントからパスへのGET要求があったときに行う処理をミドルウェア関数記述
app.get("/s/:id", (req, res) => {
  //firestoreへ該当のidのデータ取りに行ってhtmlに画像とid渡してOGP作成
  db.collection("cards")
    .where("postId", "==", req.params.id)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const html = genHtml(doc.data().url, req.params.id);
        res.send(html);
      });
    });
});

exports.s = functions.https.onRequest(app); // Expose Express API as a single Cloud Function
