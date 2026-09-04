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

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const carro = await ServiceCarro.Detalhe(id)

            res.status(200).send({ message: carro })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Criar(req, res) {
        try {
            const { marca, ano } = req.body

           await ServiceCarro.Create( marca, ano )
            
            res.status(201).send({ message: "cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }


    async Alterar(req, res) {
        try {
            const { marca, ano } = req.body

            await ServiceCarro.Update( marca, ano)
            
            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.body.id
            
            await ServiceCarro.Delete(id)

            res.send({ message: "deletado" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }


}

export default new ControllerCarro()