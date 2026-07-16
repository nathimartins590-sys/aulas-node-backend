const express = require('express');
const app = express();

app.use(express.json());

app.post('/peso-ideal', (req, res) => {
    const { sexo, altura } = req.body;

    if (typeof altura !== 'number' || (sexo !== 'H' && sexo !== 'M')) {
        return res.status(400).json({ erro: 'Envie sexo como "H" ou "M" e altura como número.' });
    }

    let pesoIdeal;
    if (sexo === 'H') {
        pesoIdeal = (72.7 * altura) - 58;
    } else {
        pesoIdeal = (62.1 * altura) - 44.7;
    }

    res.json({ pesoIdeal });
});

app.listen(3000, () => {
    console.log('Servidor rodando 3000');
});