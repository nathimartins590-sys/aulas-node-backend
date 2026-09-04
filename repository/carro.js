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

    async Creat(marca, ano) {
        const carroCriar = await carro.create({marca, ano})

        return carroCriar
    }

    async Update() {
        
    }

    async Delete(id) {
        const carroDeletar = await carro.findByPk(id)

        if(!carroDeletar){
            throw new Error("nao foi achado")
        }

        await carroDeletar.destroy()

        return carroDeletar
    }
}

export default new RepositoryCarro()