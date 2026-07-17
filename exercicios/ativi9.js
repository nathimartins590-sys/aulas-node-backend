import express from 'express'

const router = express.Router()

router.use(express.json());

router.post('/api/v1/situacao-aluno', (req, res) => {
    const { nota1, nota2, nota3 } = req.body;

    if (typeof nota1 !== 'number' || typeof nota2 !== 'number' || typeof nota3 !== 'number') {
        return res.status(400).json({ erro: 'Envie nota1, nota2 e nota3 como números.' });
    }

    const media = (nota1 + nota2 + nota3) / 3;

    let situacao;
    if (media >= 7) {
        situacao = 'Aprovado';
    } else if (media >= 5) {
        situacao = 'Recuperação';
    } else {
        situacao = 'Reprovado';
    }

    res.json({ media, situacao });
});

export default router