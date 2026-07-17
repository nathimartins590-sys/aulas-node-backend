import express from 'express'

const router = express.Router()

router.use(express.json());


router.post('/api/v1/salario/:id', (req, res) => {
    const { valorPorHora, horasTrabalhadas } = req.body;
    const totalReceber = Number (valorPorHora) * Number (horasTrabalhadas)

    if (typeof valorPorHora !== 'number' || typeof horasTrabalhadas !== 'number') {
        return res.status(400).json({ erro: 'Envie valor por hora e horas trabalhadas' });
    }

    const totalReceber = valorPorHora * horasTrabalhadas;

    res.json({ totalReceber });
});

export default router