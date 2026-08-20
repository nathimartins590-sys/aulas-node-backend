import express from 'express'

const router = express.Router()

router.use(express.json());

router.post('/calculadora', (req, res) => {
    const { numero1, numero2, operacao } = req.body;

    if ( numero1 !== 'number' ||numero2 !== 'number') {
        return res.status(400).json({ erro: 'Envie numero1 e numero2 como números.' });
    }

    let resultado;
    switch (operacao) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 === 0) {
                return res.status(400).json({ erro: 'Não é possível dividir por zero.' });
            }
            resultado = numero1 / numero2;
            break;
        default:
            return res.status(400).json({ erro: 'Operação inválida. Use +, -, * ou /.' });
    }

    res.json({ resultado });
});

export default router