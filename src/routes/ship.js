const express = require('express');
const router = express.Router();
const Correios = require('node-correios');
const correios = new Correios();

router.post('/', (req, res) => {
    correios.calcPreco(req.body, (err, result) => {
        res.json(result);
    });
});

module.exports = router;