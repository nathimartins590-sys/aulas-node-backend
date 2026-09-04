import RepositoryCarro from '../repository/carro.js'

class ServiceCarro {

    //core- regra de negocio
    async Buscar() {
        return RepositoryCarro.Find()
    }

    async Detalhe(id) {
        if(!id) {
            throw new Error("favor informar o id")
        }

        const carro = RepositoryCarro.FindeById(it => it.id === id)

        if(!carro) {
            throw new Error(`id ${id} do carro não encontrado`)
        }
        
        return carro
    }
    //função(parametro, parametro, parametro)
    async Criar( marca, ano) {
    //     if (!id || !marca || !ano) {
    //             throw new Error({ message: "colocar todas as informações" })
    //         }

    //        RepositoryCarro.push({ id, marca, ano })
         return RepositoryCarro.Creat( marca, ano)
    }

    async Alterar(id) {
         // if (!id || !marca || !ano) {
        //     throw new Error("Favor informar os dados");
        // }

        // const index = RepositoryCarro.findIndex(carro => carro.id === Number(id));

        // if (index) {
        //     throw new Error("Carro não encontrado");
        // }

        // RepositoryCarro[index] = {
        //     id: Number(id),
        //     marca,
        //     ano
        // };

        return RepositoryCarro.Update(id)
    }

    async Deletar(id) {
//     //      if (!id) {
//     //             throw new Error({ message: "favor informar o id" })
//     //         }
           
//     //     RepositoryCarro.splice(it => it.id === id, 1)

        return RepositoryCarro.Delete(id)
      }

}

export default new ServiceCarro()