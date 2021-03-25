const express = require('express');
const router = express.Router();
const routerMedicine = require('./router-medicine');

router.get('/', (req, res) => {
    res.send('WELCOME')
});

router.use('/medicines', routerMedicine);

module.exports = router;