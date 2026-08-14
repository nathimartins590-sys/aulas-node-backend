import express from 'express'

const router = express.Router()

router.use(express.json());

router.post('/positivo-negativo', (req, res) => {
    const { numero } = req.body;

    if (typeof numero !== 'number') {
        return res.status(400).json({ erro: 'Envie numero como número.' });
    }

    const resultado = numero >= 0 ? 'positivo' : 'negativo';

    res.json({ resultado });
});

export default router