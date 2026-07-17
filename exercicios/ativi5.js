import express from 'express'

const router = express.Router()

router.use(express.json());

router.post('/api/v1/milhas-km/:id', (req, res) => {
    const { milhas } = req.body;
    const quilometros = milhas

    if (typeof milhas !== 'number') {
        return res.status(400).json({ erro: 'Envie milhas como número.' });
    }

    const quilometros = milhas * 1.60934;

    res.json({ quilometros });
});

export default router