const express = require("express");
const router  = express.Router();

// router.use(userLogger); //ミドルウェアは一番上に宣言

// ユーザルート + ミドルウェア適応
router.get("/", userLogger,(req, res) => {
    res.send("ユーザーです"); 
})

router.get("/info", (req, res) => {
    res.send("ユーザー情報です"); 
})

router.get("/:id", (req, res) => {
    res.send(`${req.params.id}のユーザ情報を取得しました。`); 
})

// ミドルウェア
function userLogger(req, res, next){
    console.log(req.originalUrl);
    next(); // 次の流れへ
}


module.exports = router;