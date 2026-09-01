import ServiceCarro from '../service/carro.js'

class ControllerCarro {
    //recebimento e saida de info
    async Buscar(_, res) {
        try {
            const carros = await ServiceCarro.Buscar()
            res.send({ message: carros })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    Detalhe(req, res) {
        try {
            const id = req.params.id

            const carro = ServiceCarro.Detalhe(id)

            res.status(200).send({ message: carro })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    Criar(req, res) {
        try {
            const { id, marca, ano } = req.body

           ServiceCarro.Criar(id, marca, ano)
            
            res.status(201).send({ message: "cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }


    Alterar(req, res) {
        try {

        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    Deletar(req, res) {
        try {
            const id = req.body.id
            
            ServiceCarro.Deletar(id)

            res.send({ message: "deletado" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }


}

export default new ControllerCarro()