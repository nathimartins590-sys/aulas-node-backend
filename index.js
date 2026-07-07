import express from 'express'
import bancoDeDados from './repository/index.js';

const app = express()

// app.get("/api/v1/somar", (req, rest) => {

//     console.log(req.query)
    
//     const num1=Number(req.query.num1)
//     const num2=Number(req.query.num2)
//     const resultado=num1+num2

//     rest.send({ resultado: resultado})
// });


app.get("/api/pessoa/:id", (req, res) => {
    const id = req.params.id
    const pessoa = bancoDeDados.find(it => it.id == id)
    if(!pessoa) {
        res.send({ message: "pessoa não encontrada"})

        return
    }
    res.send({ pessoa })
});

app.get("/api/pessoa", (req, res) => {
    const {id, nome} = req.query
    if(!id || !nome) {
        res.send({ message: "informe o id e nome"})

        return
    }
    bancoDeDados.push({id, nome})
    res.send({message: "bah foi criado"})
})

// app.put("/api/update/:id", (req, res) => {
//     let nome = req.body.nome;
//     pessoa[req.params.id] = nome
//     return res.json(pessoa[req.params.id])
// })

// app.delete("/api/delete/:id", (req, res) => {
//     let id = req.params.id;
//     pessoa[id] = null;
//     return res.json(pessoa[id]);
// })

app.listen(3000,() => {
    console.log("o servidor ta escutando 3000")
});