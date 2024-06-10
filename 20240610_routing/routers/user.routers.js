const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// user API
router.get('/login', (req, res) => {
    const filePath = path.join(__dirname, "..", "user", "login.html")
    fs.readFile(filePath, "utf-8", (err = 404, data) => {
        if (err) return res.send(err);
        res.send(data);
    })
})

router.get('/signup', (req, res) => {
    const filePath = path.join(__dirname, "..", "user", "signup.html")
    fs.readFile(filePath, "utf-8", (err = 404, data) => {
        if (err) return res.send(err);
        res.send(data);
    })
})

router.get('/info', (req, res) => {
    const filePath = path.join(__dirname, "..", "user", "info.html")
    fs.readFile(filePath, "utf-8", (err = 404, data) => {
        if (err) return res.send(err);
        res.send(data);
    })
})

module.exports = router;