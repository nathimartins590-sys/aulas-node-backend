import express from 'express'

const router = express.Router()

router.use(express.json());

router.post('/par-impar', (req, res) => {
    const { numero } = req.body;

    if (!Number.isInteger(numero)) {
        return res.status(400).json({ erro: 'Envie numero como um número inteiro.' });
    }

    const resultado = numero % 2 === 0 ? 'par' : 'ímpar';

    res.json({ resultado });
});

export default router