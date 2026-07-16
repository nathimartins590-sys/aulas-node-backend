const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/v1/km-metros-cm', (req, res) => {
    const { quilometros } = req.body;

    if (typeof quilometros !== 'number') {
        return res.status(400).json({ erro: 'Envie quilometros como número.' });
    }

    const metros = quilometros * 1000;
    const centimetros = quilometros * 100000;

    res.json({ metros, centimetros });
});

app.listen(3000, () => {
    console.log('Servidor rodando 3000');
});