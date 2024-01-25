const express = require('express')
const body_parser = require('body-parser')

const { PORT } = require('./Config/serverConfig');

const app = express();

const setupAndStartServer = () => {
    app.use(body_parser.json())
    app.use(body_parser.urlencoded({extended:true}))

    app.listen(PORT, ()=> {
        console.log(`Server started on PORT ${PORT}`)
    })
}


setupAndStartServer()