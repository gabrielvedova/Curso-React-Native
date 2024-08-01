const express = require('express')
const app = express()


app.use('/opa', (req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/opa', (req, res, next) => {
    console.log('Durante...')

    //res.send('<h1>Estou Bem!</h1><br><br><h2>Tipo é HTML!</h2>')

    // res.json({
    //     name: 'iPad 32gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })

    res.json({
        data: [
            {id: 7, name:'Anna', position: 1},
        {id: 34, name:'João', position: 2},
        {id: 5, name:'Mário', position: 3},
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()
})

app.use('/opa', (req, res) => {
    console.log('Depois...')
})

app.listen(3000, () => {
    console.log("Backend rodando 2...")
})