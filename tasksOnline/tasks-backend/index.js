const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Meu Backend!!!")
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Backend executando na porta ${PORT}...`)
})