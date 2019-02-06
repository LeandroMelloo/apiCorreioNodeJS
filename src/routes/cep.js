const express = require('express');
const router = express.Router();
const Correios = require('node-correios');
const correios = new Correios();

router.post('/', (req, res) => {
    correios.consultaCEP({ cep: req.body.cep }, (err, result) => {
        res.json(result);
    });
});

module.exports = router;