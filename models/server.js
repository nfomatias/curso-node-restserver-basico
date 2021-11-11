const express = require('express')
const cors = require('cors');
require('dotenv').config();

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = [{
            path: '/api/usuarios',
            req: '../routes/usuarios'
        }];

        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());
        
        // Directorio público
        this.app.use(express.static('public'))
    }

    routes() {

        this.usuariosPath.forEach( p => {
            this.app.use(p.path, require(p.req))
        })

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`);
        });
    }
}

module.exports = Server;