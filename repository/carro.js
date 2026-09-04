import carro from "../model/carro.js"

class RepositoryCarro {
    
    async Find() {
       const carros = await carro.findAll()

       return carros
    }

    async FindeById(id) {
        const carroDetalhes = await carro.findByPk(id)

        return carroDetalhes
    }

    async Creat() {
        const carroCriar = await carro.create()

        return carroCriar
    }

    async Update() {
        const carroAtualizar = await carro.update()

        return carroAtualizar
    }

    async Delete() {
        const carroDeletar = await carro.delete()

        return carroDeletar
    }
}

export default new RepositoryCarro()