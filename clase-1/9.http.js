const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

const desiredPort = process.env.PORT ?? 1234;

const server = http.createServer((req, res) => {
    console.log('Request received')
    res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`server listening on port http://localhost:${port}`)
    })
})

//PUERTO 3000P
// server.listen(3000, () => {
//     console.log('server listening on por 3000')
// })

//ESTO ES RECOMENDABLE PARA MODO DE DESARROLLO
//AL PONER 0 EN EL PUERTO, DA EL PRIMER PUERTO LIBRE QUE ENCUENTRE
// server.listen(0, () => {
//     console.log(`server listening on port http://localhost:${server.address().port}`)
// })