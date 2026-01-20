const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authmiddleware');
const verifyuser = require('../middleware/usermiddleware');
const { verify } = require('jsonwebtoken');

router.get('/admin', verifyToken, verifyuser('admin'), (req, res) => {
    res.send('Hello Admin! This is a protected route.');
});

router.get('/manager', verifyToken, verifyuser('manager','admin'), (req, res) => {
    res.send('Hello Manager! This is a protected route.');
});
router.get('/user', verifyToken, verifyuser('user','admin','manager'), (req, res) => {
    res.send('Hello User! This is a protected route.');
}
);

module.exports = router;