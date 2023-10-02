const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const PORT = 3000;

// app.use(express.static("public")); // 静的ファイル
app.set("view engine", "ejs"); // 動的なテンプレートファイル


app.get("/", (req, res) => {
    // console.log("hello express"); // コンソール表示
    // res.send("こんにちは"); // ブラウザ表示
    // res.sendStatus(500); // サーバーエラー
    // res.sendStatus(400); // クライアントエラー
    // res.status(500).send("error"); // ブラウザ上にエラー表示
    // res.status(500).json({msg:"error"});
    res.render("index", {text:"NodejsとExpress"})
})

// ルーティング
app.use("/user", userRouter);


app.listen(PORT, () =>console.log("start server"));