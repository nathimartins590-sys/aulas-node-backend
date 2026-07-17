import express from 'express'

const router = express.Router()

router.use(express.json());

router.post('/api/v1/duracao/:id', (req, res) => {
    const { segundosTotais } = req.body;
    const { horas, minutos, segundos } = segundosTotais

    if (typeof segundosTotais !== 'number') {
        return res.status(400).json({ erro: 'Envie segundos como número' });
    }

    const horas = Math.floor(segundosTotais / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = Math.floor(segundosTotais % 60);

    res.json({ horas, minutos, segundos });
});

export default router