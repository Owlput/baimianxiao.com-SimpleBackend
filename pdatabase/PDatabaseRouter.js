const express = require("express");
const router = express.Router();
const fs = require('fs')

router.get("/imageData/:data", (req, res) => {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods","GET")
    res.json(JSON.parse(fs.readFileSync(`./pdatabase/data/imageData/${req.params.data}.json`,"utf8")))
})
router.get("/thumbData/:data", (req, res) => {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods","GET")
    res.json(JSON.parse(fs.readFileSync(`./pdatabase/data/thumbData/${req.params.data}.json`,"utf8")))
})



module.exports = router;