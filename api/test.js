const express = require('express');
const router = express.Router();

const port = process.env.port || 3000

router.get('/', (req, res) => {
    res.send('Hello World');
})

router.get('/test', (req, res) => {
  res.send('Port: ' + port);
})

module.exports = router;