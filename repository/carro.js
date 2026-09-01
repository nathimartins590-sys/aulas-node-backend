import carro from "../model/carro.js"

class RepositoryCarro {
    async Find() {
       const carros = await carro.findAll()

       return carros
    }

    async Creat() {
        
    }

    async Update() {

    }

    async Delete() {

    }
}

export default new RepositoryCarro()