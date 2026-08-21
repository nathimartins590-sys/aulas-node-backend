import express from 'express'
import ControllerCarro from '../controler/carro.js'

const router = express.Router()

router.get("/buscar", ControllerCarro.Buscar)
router.get("/detalhe/:id", ControllerCarro.Detalhe)
router.post("/criar", ControllerCarro.Criar)
router.post("/alterar/:id", ControllerCarro.Alterar)
router.post("/deletar/:id", ControllerCarro.Deletar)

export default router