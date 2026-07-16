const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/v1/tabuada', (req, res) => {
    const { numero } = req.body;

    if (!Number.isInteger(numero)) {
        return res.status(400).json({ erro: 'Envie numero como um número inteiro.' });
    }

    const tabuada = [];
    for (let i = 0; i <= 10; i++) {
        tabuada.push(`${numero} x ${i} = ${numero * i}`);
    }

    res.json({ tabuada });
});

app.listen(3000, () => {
    console.log('Servidor rodando 3000');
});