const express = require('express')
const helmet = require('helmet')
const compression = require('compression')
const path = require('path')
const router = require('./routes/router')
const app = express()

require('./db')

app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'pug')

app.set('trust proxy', true)

app.use(express.static(path.join(__dirname,'public')))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(helmet())
app.use(compression())

app.disable('x-powered-by')

router(app)

const server = app.listen(8080, ()=>{
    console.log(`[SERVER] The server is running at http://localhost:${server.address().port}`)
})