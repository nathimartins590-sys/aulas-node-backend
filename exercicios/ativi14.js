import express from 'express'

const router = express.Router()

router.use(express.json());

router.post('/maior-numero', (req, res) => {
    const { numero1, numero2 } = req.body;

    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        return res.status(400).json({ erro: 'Envie numero1 e numero2 como números.' });
    }

    let resultado;
    if (numero1 > numero2) {
        resultado = numero1;
    } else if (numero2 > numero1) {
        resultado = numero2;
    } else {
        resultado = 'Os números são iguais';
    }

    res.json({ resultado });
});

export default router