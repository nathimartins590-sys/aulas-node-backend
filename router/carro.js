import express from 'express'
import carros from '../repository/carro.js'

const router = express.Router()

router.get("/buscar", (req, res) => {
    res.send({ message: carros })
}) 
// buscar todos
router.get("/detalhe/:id", (req, res) => {
    const id = req.params.id

    const carro = carros.find(it => it.id === id)

    res.send({ message: carro })
}) 
// buscar um
router.post("/criar", (req, res) => {
    const { id, marca, ano } = req.body

    if(!id || !marca || !ano) {
        res.send({ message: "colocar todas as informações"})
        return
    }

    carros.push({ id, marca, ano })
    res.send({ message: "cadastrado com sucesso"})
}) 
// criar
router.post("/alterar", (req, res) => {
}) 
//alterar
router.post("/deletar", (req, res) => {
    const id = req.body.id

    carros.splice(it => it.id === id, 1)

    res.send({ message: "deletado"})
}) 
//deletar

export default router