import express from 'express'

const app = express()


app.get("/api/v1/somar", (req, rest) => {

    console.log(req.query)
    
    const num1=Number(req.query.num1)
    const num2=Number(req.query.num2)
    const resultado=num1+num2

    rest.send({ resultado: resultado})
});

app.listen(3000,() => {
    console.log("o servidor ta ouvindo 3000")
});