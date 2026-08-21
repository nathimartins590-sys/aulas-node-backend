import RepositoryCarro from '../repository/carro.js'

class ServiceCarro {

    //core- regra de negocio
    Buscar() {
        return RepositoryCarro
    }

    Detalhe(id) {
        if(!id) {
            throw new Error("favor informar o id")
        }

        const carro = RepositoryCarro.find(it => it.id === id)

        if(!carro) {
            throw new Error(`id ${id} do carro não encontrado`)
        }
        
        return carro
    }
    //função(parametro, parametro, parametro)
    Criar(id, marca, ano) {
        if (!id || !marca || !ano) {
                throw new Error({ message: "colocar todas as informações" })
            }

           RepositoryCarro.push({ id, marca, ano })
           return {id, marca, ano}
    }

    Alterar() {}

    Deletar(id) {
         if (!id) {
                throw new Error({ message: "favor informar o id" })
            }
           
        RepositoryCarro.splice(it => it.id === id, 1)

        return id
    }

}

export default new ServiceCarro()