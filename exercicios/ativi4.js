const express = require('express');
const app = express();

app.use(express.json()); 

app.post('/api/v1/celsius-fahrenheit/:id', (req, res) => {
    const { celsius } = req.body;
    const fahrenheit = celsius

    if (typeof celsius !== 'number') {
        return res.status(400).json({ erro: 'Envie um grau em celsius' });
    }

    const fahrenheit = (9 * celsius + 160) / 5;

    res.json({ fahrenheit });
});

app.listen(3000, () => {
    console.log('Servidor rodando 3000');
});