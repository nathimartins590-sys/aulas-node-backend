const express = require('express');
const app = express();

app.use(express.json()); 


app.post('/api/v1/salario/:id', (req, res) => {
    const { valorPorHora, horasTrabalhadas } = req.body;
    const totalReceber = Number (valorPorHora) * Number (horasTrabalhadas)

    if (typeof valorPorHora !== 'number' || typeof horasTrabalhadas !== 'number') {
        return res.status(400).json({ erro: 'Envie valor por hora e horas trabalhadas' });
    }

    const totalReceber = valorPorHora * horasTrabalhadas;

    res.json({ totalReceber });
});

app.listen(3000, () => {
    console.log('Servidor rodando 3000');
});