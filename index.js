import express from 'express'
import exercicios1 from './exercicios/ativi1.js'
import exercicios2 from './exercicios/ativi2.js'
import exercicios3 from './exercicios/ativi3.js'
import exercicios4 from './exercicios/ativi4.js'
import exercicios5 from './exercicios/ativi5.js'
import exercicios6 from './exercicios/ativi6.js'
import exercicios7 from './exercicios/ativi7.js'
import exercicios8 from './exercicios/ativi8.js'
import exercicios9 from './exercicios/ativi9.js'
import exercicios10 from './exercicios/ativi10.js'

const app = express()

app.use(express.json())

app.use('/api/v1/exercicios/ativi1', exercicios1)
app.use('/api/v1/exercicios/ativi2', exercicios2)
app.use('/api/v1/exercicios/ativi3', exercicios3)
app.use('/api/v1/exercicios/ativi4', exercicios4)
app.use('/api/v1/exercicios/ativi5', exercicios5)
app.use('/api/v1/exercicios/ativi6', exercicios6)
app.use('/api/v1/exercicios/ativi7', exercicios7)
app.use('/api/v1/exercicios/ativi8', exercicios8)
app.use('/api/v1/exercicios/ativi9', exercicios9)
app.use('/api/v1/exercicios/ativi10', exercicios10)

//somar
// app.get("/api/v1/somar", (req, res) => {
//     const {num1, num2} = req.query
//     const resultado = Number (num1) + Number (num2)

//     res.status(200).send({ message: resultado })
//     //res.send({ message: resultado })
// })

// //subtrair
// app.get("/api/v1/sub", (req, res) => {
//     const {num1, num2} = req.query
//     const resultado = Number (num1) - Number (num2)

//     res.status(200).send({ message: resultado })
//     //res.send({ message: resultado })
// })
// //mult
// app.get("/api/v1/mult", (req, res) => {
//     const {num1, num2} = req.query
//     const resultado = Number (num1) * Number (num2)

//     res.status(200).send({ message: resultado })
//     //res.send({ message: resultado })
// })
// //div
// app.get("/api/v1/div", (req, res) => {
//     const {num1, num2} = req.query
//     const resultado = Number (num1) / Number (num2)

//     res.status(200).send({ message: resultado })
//     //res.send({ message: resultado })
// })

app.listen(3000,() => {
    console.log("bah ta funcionando 3000")
});