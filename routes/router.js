const indexRouter = require('./index/index')
const notFound = require('./404/404')
const router = (server) => {
    server.use('/',indexRouter)
    
    server.use(notFound)
}

module.exports = router