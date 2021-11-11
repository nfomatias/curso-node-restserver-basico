const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const {q, nombre = 'no name', apikey, page = 1, limit = 10} = req.query;

    res.json({
        msg: "get API - controlador",
        q, 
        nombre, 
        apikey,
        page, 
        limit
    })
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: "post API - controlador",
        nombre,
        edad
    })
}

const usuariosPut = (req, res) => {

    const { id } = req.params;
    res.json({
        msg: "put API - controlador",
        id
    })
}
const usuariosPut404 = (req, res) => {
    res.status(404).json({
        msg: "not found"
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: "patch API - controlador"
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: "delete API - controlador"
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPut404,
    usuariosPatch,
    usuariosDelete
}