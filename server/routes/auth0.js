const express = require('express');
const router = express.Router();

const auth0Path = '/auth0';

// Serve the index page for all other requests
router.get(`${auth0Path}`, (_, res) => {
    res.sendFile(join(__dirname, "../", "index.html"));
});

module.exports = router;


