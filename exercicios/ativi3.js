import express from 'express'

const router = express.Router()

router.use(express.json());

router.post('/api/v1/media-pesos/:id', (req, res) => {
    const { pesos } = req.body;
    const media = pesos

    if (!Array.isArray(pesos) || pesos.length !== 5 || !pesos.every(p => typeof p === 'number')) {
        return res.status(400).json({ erro: 'Envie um peso para 5 pessoas' });
    }

    const soma = pesos.reduce((acc, peso) => acc + peso, 0);
    const media = soma / 5;

    res.json({ media });
});

export default router