import express from 'express'
import greeting from './routes/greeting.js'
import random from './routes/random.js'
import readFile from './routes/readFile.js'
import operations from './routes/operations.js'

const app = express();

//SET PORT
app.set('PUERTO', 8080)
const PORT = process.env.PORT || app.get('PUERTO')

//SERVER LISTENING
const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${server.address().port}`)
})
server.on('error', error => console.log(`Server error: ${error}`))


//GET GREETING
app.get('/', (req, res) => {
    res.send(greeting(req, res))
})

//GET RANDOM NUMBERS
app.get('/random', (req, res) => {
    res.send(random(req, res))
})

//GET PACKAGE JSON
app.get('/info', async (req, res) => {
    readFile(req, res)
})

//GET OPERATIONS
app.get('/operaciones', (req, res) => {
    operations(req, res)
})