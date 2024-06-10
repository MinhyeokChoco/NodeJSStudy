const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// board API
router.get('/', (req, res) => {
    const filePath = path.join(__dirname, "..", "board", "index.html")
    fs.readFile(filePath, "utf-8", (err = 404, data) => {
        if (err) return res.send(err);
        res.send(data);
    })
})

router.get('/list', (req, res) => {
    const filePath = path.join(__dirname, "..", "board", "list.html")
    fs.readFile(filePath, "utf-8", (err = 404, data) => {
        if (err) return res.send(err);
        res.send(data);
    })
})

router.get('/write', (req, res) => {
    const filePath = path.join(__dirname, "..", "board", "write.html")
    fs.readFile(filePath, "utf-8", (err = 404, data) => {
        if (err) return res.send(err);
        res.send(data);
    })
})

module.exports = router;