const express = require("express");
const router = express.Router();
const path = require('path')

const options = {
    root: path.join(__dirname),
  }
router.get('/*', (req, res) => {
    res.header("Access-Control-Allow-Origin","http://localhost:3000")
    res.header("Access-Control-Allow-Methods","GET")
    res.sendFile(`${req.path}`,options)
})

module.exports = router;