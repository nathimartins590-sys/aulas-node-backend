const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/v1/milhas-km/:id', (req, res) => {
    const { milhas } = req.body;
    const quilometros = milhas

    if (typeof milhas !== 'number') {
        return res.status(400).json({ erro: 'Envie milhas como número.' });
    }

    const quilometros = milhas * 1.60934;

    res.json({ quilometros });
});

app.listen(3000, () => {
    console.log('Servidor rodando 3000');
});