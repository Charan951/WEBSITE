const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authmiddleware');

router.get('/admin', verifyToken, (req, res) => {
    res.send('Hello Admin! This is a protected route.');
});

router.get('/manager', verifyToken, (req, res) => {
    res.send('Hello Manager! This is a protected route.');
});
router.get('/user', verifyToken, (req, res) => {
    res.send('Hello User! This is a protected route.');
}
);

module.exports = router;