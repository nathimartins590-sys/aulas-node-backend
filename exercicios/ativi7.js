import express from 'express'

const router = express.Router()

router.use(express.json());

router.post('/api/v1/km-metros-cm', (req, res) => {
    const { quilometros } = req.body;

    if (typeof quilometros !== 'number') {
        return res.status(400).json({ erro: 'Envie quilometros como número.' });
    }

    const metros = quilometros * 1000;
    const centimetros = quilometros * 100000;

    res.json({ metros, centimetros });
});

export default router