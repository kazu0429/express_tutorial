const express = require("express");
const router  = express.Router();

// ユーザルート
router.get("/", (req, res) => {
    res.send("ユーザーです"); 
})

router.get("/info", (req, res) => {
    res.send("ユーザー情報です"); 
})

module.exports = router;