const express = require('express');
const app = express();

app.use(express.json()); 

app.post('/api/v1/somar/:id', (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = Number (num1) + Number (num2)

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ erro: "Envie num1 e num2" });
    }

    const resultado = num1 + num2;

    res.json({ resultado });
});

app.listen(3000, () => {
    console.log('Servidor rodando 3000');
});