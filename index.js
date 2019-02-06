const express = require('express');
const bodyParse = require('body-parser');
const app = express();

app.use(bodyParse.urlencoded({ extend: false }));
app.use(bodyParse.json());

require('./src')(app);

app.listen(9000, () => {
    console.log('Servidor rodando na porta 9000');
})