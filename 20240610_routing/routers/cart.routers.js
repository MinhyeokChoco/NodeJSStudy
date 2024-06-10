const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// cart API
router.get('/', (req, res) => {
    const filePath = path.join(__dirname, "..", "cart", "index.html")
    fs.readFile(filePath, "utf-8", (err = 404, data) => {
        if (err) return res.send(err);
        res.send(data);
    })
})

router.get('/add', (req, res) => {
    const filePath = path.join(__dirname, "..", "cart", "add.html")
    fs.readFile(filePath, "utf-8", (err = 404, data) => {
        if (err) return res.send(err);
        res.send(data);
    })
})

module.exports = router;